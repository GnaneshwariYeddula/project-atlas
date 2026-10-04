"use client";

import {
  Bot,
  ChevronDown,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import { chatWithAI } from "@/services/ai";

interface Message {
  id: number;
  sender: "user" | "assistant";
  text: string;
}

function getPageContext(pathname: string): string {
  if (pathname === "/") {
    return "The user is currently on the Project Atlas home page.";
  }

  if (pathname === "/explore") {
    return "The user is currently exploring archaeological content on Project Atlas.";
  }

  if (pathname === "/sites") {
    return "The user is currently browsing archaeological sites on Project Atlas.";
  }

  if (pathname.startsWith("/sites/")) {
    return `The user is currently viewing an archaeological site detail page on Project Atlas. Current route: ${pathname}`;
  }

  if (pathname === "/artifacts") {
    return "The user is currently browsing archaeological artifacts on Project Atlas.";
  }

  if (pathname.startsWith("/artifacts/")) {
    return `The user is currently viewing an artifact detail page on Project Atlas. Current route: ${pathname}`;
  }

  if (pathname === "/civilizations") {
    return "The user is currently browsing civilizations on Project Atlas.";
  }

  if (pathname.startsWith("/civilizations/")) {
    return `The user is currently viewing a civilization detail page on Project Atlas. Current route: ${pathname}`;
  }

  if (pathname === "/museums") {
    return "The user is currently browsing museums on Project Atlas.";
  }

  if (pathname.startsWith("/museums/")) {
    return `The user is currently viewing a museum detail page on Project Atlas. Current route: ${pathname}`;
  }

  if (pathname === "/timeline") {
    return "The user is currently browsing the historical timeline on Project Atlas.";
  }

  if (pathname.startsWith("/timeline/")) {
    return `The user is currently viewing a timeline detail page on Project Atlas. Current route: ${pathname}`;
  }

  if (pathname === "/research") {
    return "The user is currently browsing archaeological research on Project Atlas.";
  }

  if (pathname.startsWith("/research/")) {
    return `The user is currently viewing a research detail page on Project Atlas. Current route: ${pathname}`;
  }

  if (pathname === "/community") {
    return "The user is currently using the Project Atlas community area.";
  }

  if (pathname === "/map") {
    return "The user is currently viewing the interactive archaeological map/globe on Project Atlas.";
  }

  if (pathname === "/dashboard") {
    return "The user is currently viewing their Project Atlas dashboard.";
  }

  if (pathname === "/profile") {
    return "The user is currently viewing their Project Atlas profile.";
  }

  if (pathname === "/favorites") {
    return "The user is currently viewing their saved favorites on Project Atlas.";
  }

  if (pathname === "/settings") {
    return "The user is currently viewing Project Atlas settings.";
  }

  return `The user is currently on Project Atlas route: ${pathname}`;
}

function formatAssistantText(text: string) {
  const lines = text.split("\n");

  return lines.map((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return (
        <div
          key={index}
          className="h-2"
        />
      );
    }

    if (trimmed.startsWith("### ")) {
      return (
        <h4
          key={index}
          className="mt-3 text-sm font-bold text-stone-900 first:mt-0"
        >
          {trimmed.slice(4)}
        </h4>
      );
    }

    if (trimmed.startsWith("## ")) {
      return (
        <h3
          key={index}
          className="mt-3 text-base font-bold text-stone-900 first:mt-0"
        >
          {trimmed.slice(3)}
        </h3>
      );
    }

    if (trimmed.startsWith("# ")) {
      return (
        <h3
          key={index}
          className="mt-3 text-base font-bold text-stone-900 first:mt-0"
        >
          {trimmed.slice(2)}
        </h3>
      );
    }

    if (/^[-*]\s+/.test(trimmed)) {
      return (
        <div
          key={index}
          className="flex gap-2"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
          <span>
            {renderInlineMarkdown(
              trimmed.replace(/^[-*]\s+/, "")
            )}
          </span>
        </div>
      );
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s+(.*)$/);

      return (
        <div
          key={index}
          className="flex gap-2"
        >
          <span className="font-semibold text-emerald-700">
            {match?.[1]}.
          </span>

          <span>
            {renderInlineMarkdown(
              match?.[2] ?? trimmed
            )}
          </span>
        </div>
      );
    }

    return (
      <p
        key={index}
        className="leading-6"
      >
        {renderInlineMarkdown(trimmed)}
      </p>
    );
  });
}

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {
      return (
        <strong
          key={index}
          className="font-bold text-stone-900"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function AtlasAssistant() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const abortController =
    useRef<AbortController | null>(null);

  const scrollRef =
    useRef<HTMLDivElement | null>(null);

  const messageId =
    useRef(0);

  const pageContext = useMemo(
    () => getPageContext(pathname),
    [pathname]
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const element = scrollRef.current;

    if (!element) {
      return;
    }

    element.scrollTop =
      element.scrollHeight;
  }, [messages, loading, open]);

  useEffect(() => {
    return () => {
      abortController.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    setError("");
  }, [pathname, open]);

  async function sendMessage() {
    const cleanMessage =
      message.trim();

    if (
      !cleanMessage ||
      loading
    ) {
      return;
    }

    setError("");
    setMessage("");

    const userMessage: Message = {
      id: ++messageId.current,
      sender: "user",
      text: cleanMessage,
    };

    const assistantId =
      ++messageId.current;

    const assistantMessage: Message = {
      id: assistantId,
      sender: "assistant",
      text: "",
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      assistantMessage,
    ]);

    setLoading(true);

    const controller =
      new AbortController();

    abortController.current =
      controller;

    const contextualMessage = `
You are answering a user inside Project Atlas.

CURRENT PAGE CONTEXT:
${pageContext}

USER QUESTION:
${cleanMessage}

Answer the user's actual question directly.
Use the current page context when it is relevant.
Do not mention that you received page context.
Do not invent information about a specific Atlas record that is not provided.
Keep the answer concise unless the user asks for detail.
`;

    try {
      await chatWithAI(
        contextualMessage,
        {
          onChunk: (chunk) => {
            setMessages((previous) =>
              previous.map((item) =>
                item.id === assistantId
                  ? {
                      ...item,
                      text:
                        item.text +
                        chunk,
                    }
                  : item
              )
            );
          },

          onComplete: () => {
            setLoading(false);
          },
        },
        controller.signal
      );
    } catch (requestError) {
      if (
        controller.signal.aborted
      ) {
        return;
      }

      console.error(
        "Atlas Assistant error:",
        requestError
      );

      setMessages((previous) =>
        previous.filter(
          (item) =>
            item.id !== assistantId
        )
      );

      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to contact Atlas AI."
      );

      setLoading(false);
    } finally {
      if (
        abortController.current ===
        controller
      ) {
        abortController.current =
          null;
      }
    }
  }

  function clearConversation() {
    if (loading) {
      abortController.current?.abort();
      setLoading(false);
    }

    setMessages([]);
    setError("");
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault();
      sendMessage();
    }
  }

  if (pathname === "/ai") {
    return null;
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Atlas AI Assistant"
          className="
            fixed
            bottom-5
            right-5
            z-[100]
            flex
            items-center
            gap-3
            rounded-full
            bg-emerald-700
            px-5
            py-3.5
            font-semibold
            text-white
            shadow-2xl
            ring-1
            ring-emerald-600/30
            transition
            hover:-translate-y-0.5
            hover:bg-emerald-800
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-500
            focus:ring-offset-2
            sm:bottom-6
            sm:right-6
          "
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <MessageCircle
              size={20}
            />
          </span>

          <span className="hidden sm:inline">
            Ask Atlas AI
          </span>

          <Sparkles
            size={16}
            className="text-yellow-300"
          />
        </button>
      )}

      {open && (
        <section
          aria-label="Atlas AI Assistant"
          className={`
            fixed
            z-[100]
            overflow-hidden
            rounded-3xl
            border
            border-stone-200
            bg-white
            shadow-2xl
            transition-all
            duration-200
            ${
              expanded
                ? "inset-3 sm:inset-6"
                : "bottom-5 right-5 h-[min(680px,calc(100vh-40px))] w-[min(430px,calc(100vw-40px))] sm:bottom-6 sm:right-6"
            }
          `}
        >
          <div className="flex h-full min-h-0 flex-col">
            <header className="flex shrink-0 items-center justify-between bg-slate-950 px-4 py-3.5 text-white">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600">
                  <Bot size={22} />
                </div>

                <div className="min-w-0">
                  <h2 className="truncate text-sm font-bold">
                    Atlas AI
                  </h2>

                  <p className="text-xs text-slate-400">
                    Archaeology Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearConversation}
                  disabled={
                    loading ||
                    messages.length === 0
                  }
                  aria-label="Clear conversation"
                  title="Clear conversation"
                  className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Trash2 size={17} />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setExpanded(
                      (value) =>
                        !value
                    )
                  }
                  aria-label={
                    expanded
                      ? "Minimize assistant"
                      : "Expand assistant"
                  }
                  title={
                    expanded
                      ? "Minimize"
                      : "Expand"
                  }
                  className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <ChevronDown
                    size={19}
                    className={
                      expanded
                        ? "rotate-180"
                        : ""
                    }
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    abortController.current?.abort();
                    setLoading(false);
                    setOpen(false);
                  }}
                  aria-label="Close Atlas AI"
                  title="Close"
                  className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={19} />
                </button>
              </div>
            </header>

            <div
              ref={scrollRef}
              className="min-h-0 flex-1 overflow-y-auto bg-stone-50 p-4"
            >
              {messages.length === 0 ? (
                <div className="flex min-h-full flex-col items-center justify-center px-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Bot size={32} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-stone-900">
                    How can I help?
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-stone-500">
                    Ask me about archaeology,
                    civilizations, artifacts,
                    sites, museums, history,
                    or anything you're exploring
                    on Atlas.
                  </p>

                  <div className="mt-6 grid w-full max-w-sm gap-2">
                    {[
                      "What is archaeology?",
                      "Tell me about ancient civilizations.",
                      "How do archaeologists date artifacts?",
                    ].map(
                      (suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => {
                            setMessage(
                              suggestion
                            );
                          }}
                          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-left text-sm font-medium text-stone-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
                        >
                          {suggestion}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map(
                    (item) => (
                      <div
                        key={item.id}
                        className={`flex ${
                          item.sender ===
                          "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm ${
                            item.sender ===
                            "user"
                              ? "bg-emerald-700 text-white shadow-sm"
                              : "border border-stone-200 bg-white text-stone-700 shadow-sm"
                          }`}
                        >
                          {item.sender ===
                          "assistant" ? (
                            item.text ? (
                              <div className="space-y-1">
                                {formatAssistantText(
                                  item.text
                                )}
                              </div>
                            ) : loading ? (
                              <div className="flex items-center gap-2 text-stone-500">
                                <Loader2
                                  size={15}
                                  className="animate-spin"
                                />
                                <span>
                                  Preparing
                                  answer...
                                </span>
                              </div>
                            ) : null
                          ) : (
                            <p className="whitespace-pre-wrap leading-6">
                              {item.text}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  )}

                  {loading && (
                    <div className="flex items-center gap-2 px-1 text-xs text-stone-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600 [animation-delay:300ms]" />
                    </div>
                  )}
                </div>
              )}

              {error && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}
            </div>

            <footer className="shrink-0 border-t border-stone-200 bg-white p-3">
              <div className="flex items-center gap-2 rounded-2xl border border-stone-300 bg-stone-50 p-1.5 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/10">
                <input
                  value={message}
                  onChange={(event) =>
                    setMessage(
                      event.target.value
                    )
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  disabled={loading}
                  placeholder="Ask Atlas AI..."
                  maxLength={4000}
                  className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-stone-900 outline-none placeholder:text-stone-400 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={
                    loading ||
                    !message.trim()
                  }
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? (
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                  ) : (
                    <Send size={18} />
                  )}
                </button>
              </div>

              <p className="mt-2 text-center text-[11px] text-stone-400">
                Atlas AI can make mistakes. Verify
                important historical information.
              </p>
            </footer>
          </div>
        </section>
      )}
    </>
  );
}