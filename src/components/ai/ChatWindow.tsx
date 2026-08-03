"use client";

import { useState } from "react";
import {
  Bot,
  User,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";

import { chatWithAI } from "@/services/ai";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatWindow() {
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text:
        "👋 Welcome! I'm your AI Archaeology Assistant. Ask me anything about civilizations, artifacts, historical events, or archaeological discoveries.",
    },
  ]);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setMessage("");

    setLoading(true);

    try {
      const response = await chatWithAI(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            response.reply ??
            "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "Something went wrong while contacting the AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">

          {/* Header */}

          <div className="flex items-center justify-between border-b border-stone-200 bg-slate-950 px-8 py-5">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-indigo-600 p-3">

                <Bot
                  className="text-white"
                  size={28}
                />

              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  AI Archaeology Assistant
                </h2>

                <p className="text-sm text-slate-400">
                  Powered by Gemini AI
                </p>

              </div>

            </div>

            <Sparkles
              className="text-yellow-400"
              size={28}
            />

          </div>

          {/* Messages */}

          <div className="h-[500px] space-y-6 overflow-y-auto bg-stone-50 p-8">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`flex max-w-3xl gap-4 ${
                    msg.sender === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      msg.sender === "bot"
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >

                    {msg.sender === "bot" ? (
                      <Bot size={22} />
                    ) : (
                      <User size={22} />
                    )}

                  </div>

                  <div
                    className={`rounded-3xl px-6 py-5 leading-7 shadow ${
                      msg.sender === "bot"
                        ? "bg-white text-stone-700"
                        : "bg-indigo-700 text-white"
                    }`}
                  >

                    {msg.text}

                  </div>

                </div>

              </div>

            ))}

            {loading && (

              <div className="flex items-center gap-3 text-stone-500">

                <Loader2
                  className="animate-spin"
                  size={18}
                />

                Gemini is thinking...

              </div>

            )}

          </div>

          {/* Input */}

          <div className="border-t border-stone-200 bg-white p-6">

            <div className="flex gap-4">

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask about civilizations, artifacts, historical events..."
                className="flex-1 rounded-2xl border border-stone-300 px-6 py-4 outline-none transition focus:border-indigo-600"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="flex items-center gap-2 rounded-2xl bg-indigo-700 px-8 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:opacity-50"
              >

                <Send size={20} />

                Send

              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
