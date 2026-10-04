"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Bot,
  User,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";

import MarkdownMessage from "./MarkdownMessage";
import { chatWithAI } from "@/services/ai";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  streaming?: boolean;
}

function createMessageId() {
  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export default function ChatWindow() {
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: createMessageId(),
      sender: "bot",
      text:
        "👋 Welcome! I'm your Atlas AI Archaeology Assistant. Ask me about archaeological sites, civilizations, artifacts, historical events, museums, or archaeological discoveries.",
    },
  ]);

  const abortControllerRef =
    useRef<AbortController | null>(null);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  async function sendMessage() {
    const userMessage = message.trim();

    if (!userMessage || loading) {
      return;
    }

    setMessage("");

    const userMessageId = createMessageId();
    const botMessageId = createMessageId();

    setMessages((previous) => [
      ...previous,

      {
        id: userMessageId,
        sender: "user",
        text: userMessage,
      },

      {
        id: botMessageId,
        sender: "bot",
        text: "",
        streaming: true,
      },
    ]);

    setLoading(true);

    const controller = new AbortController();

    abortControllerRef.current = controller;

    try {
      await chatWithAI(
        userMessage,
        {
          onChunk: (text) => {
            setMessages((previous) =>
              previous.map((item) =>
                item.id === botMessageId
                  ? {
                      ...item,
                      text: item.text + text,
                      streaming: true,
                    }
                  : item
              )
            );
          },

          onComplete: () => {
            setMessages((previous) =>
              previous.map((item) =>
                item.id === botMessageId
                  ? {
                      ...item,
                      streaming: false,
                    }
                  : item
              )
            );
          },
        },
        controller.signal
      );
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      console.error("Atlas AI error:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong while contacting the AI service.";

      setMessages((previous) =>
        previous.map((item) =>
          item.id === botMessageId
            ? {
                ...item,
                text:
                  item.text ||
                  `Sorry, I couldn't complete that request.\n\n${errorMessage}`,
                streaming: false,
              }
            : item
        )
      );
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-stone-200 bg-slate-950 px-5 py-5 sm:px-8">

            <div className="flex items-center gap-3 sm:gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 sm:h-12 sm:w-12">
                <Bot
                  className="text-white"
                  size={25}
                />
              </div>

              <div>
                <h2 className="text-base font-bold text-white sm:text-xl">
                  Atlas AI Assistant
                </h2>

                <p className="text-xs text-slate-400 sm:text-sm">
                  Archaeology & History Assistant
                </p>
              </div>

            </div>

            <Sparkles
              className="text-yellow-400"
              size={22}
            />

          </div>

          {/* Messages */}

          <div className="h-[500px] overflow-y-auto bg-stone-50 px-4 py-6 sm:px-8 sm:py-8">

            <div className="space-y-7">

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`flex max-w-4xl gap-3 sm:gap-4 ${
                      msg.sender === "user"
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >

                    {/* Avatar */}

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${
                        msg.sender === "bot"
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-900 text-white"
                      }`}
                    >
                      {msg.sender === "bot" ? (
                        <Bot size={20} />
                      ) : (
                        <User size={20} />
                      )}
                    </div>

                    {/* Message */}

                    <div
                      className={`min-w-0 rounded-3xl px-5 py-4 shadow-sm sm:px-6 sm:py-5 ${
                        msg.sender === "bot"
                          ? "bg-white text-stone-700"
                          : "bg-indigo-700 text-white"
                      }`}
                    >

                      {msg.sender === "bot" ? (
                        msg.text ? (
                          <MarkdownMessage
                            content={msg.text}
                          />
                        ) : (
                          <div className="flex items-center">
                            <Loader2
                              size={18}
                              className="animate-spin text-indigo-600"
                              aria-label="Responding"
                            />
                          </div>
                        )
                      ) : (
                        <p className="whitespace-pre-wrap leading-7">
                          {msg.text}
                        </p>
                      )}

                    </div>

                  </div>

                </div>
              ))}

              <div ref={messagesEndRef} />

            </div>

          </div>

          {/* Input */}

          <div className="border-t border-stone-200 bg-white p-4 sm:p-6">

            <div className="flex gap-3 sm:gap-4">

              <input
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                disabled={loading}
                placeholder="Ask Atlas AI..."
                aria-label="Ask Atlas AI"
                className="min-w-0 flex-1 rounded-2xl border border-stone-300 bg-white px-4 py-4 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 disabled:bg-stone-50 sm:px-6"
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={
                  loading || !message.trim()
                }
                className="flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-indigo-700 px-5 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8"
              >

                {loading ? (
                  <Loader2
                    size={20}
                    className="animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <Send
                    size={20}
                    aria-hidden="true"
                  />
                )}

                <span className="hidden sm:inline">
                  Send
                </span>

              </button>

            </div>

            <p className="mt-3 text-center text-xs text-stone-400">
              Atlas AI can make mistakes. Verify important
              historical information with reliable sources.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}