import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Sparkles,
  MessageSquare,
} from "lucide-react";

import Button from "@/components/ui/Button";

export default function AIHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-28">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <span className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">

            🤖 AI Archaeology Assistant

          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

            Discover History

            <span className="block text-indigo-400">
              With Artificial Intelligence
            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

            Ask questions about civilizations, archaeological sites,
            artifacts, timelines, ancient cultures, and historical events.
            Our AI provides intelligent, accurate, and interactive answers.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Button>

              Start Chatting

              <ArrowRight
                className="ml-2"
                size={18}
              />

            </Button>

            <Button variant="secondary">
              Learn More
            </Button>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-black text-white">
                24/7
              </h2>

              <p className="mt-2 text-slate-400">
                AI Support
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-white">
                120+
              </h2>

              <p className="mt-2 text-slate-400">
                Civilizations
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-white">
                50K+
              </h2>

              <p className="mt-2 text-slate-400">
                Knowledge Base
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          <div className="relative flex h-[520px] w-[520px] items-center justify-center rounded-full border border-indigo-500/30 bg-white/5 backdrop-blur">

            <div className="absolute h-96 w-96 rounded-full border border-indigo-500/30" />

            <div className="absolute h-72 w-72 rounded-full border border-indigo-400/30" />

            <div className="absolute h-52 w-52 rounded-full border border-indigo-300/30" />

            <Bot
              className="text-indigo-400"
              size={140}
            />

            <div className="absolute left-8 top-16 rounded-2xl bg-slate-900 p-4 shadow-xl">

              <BrainCircuit
                className="text-cyan-400"
                size={34}
              />

            </div>

            <div className="absolute right-8 top-32 rounded-2xl bg-slate-900 p-4 shadow-xl">

              <Sparkles
                className="text-yellow-400"
                size={34}
              />

            </div>

            <div className="absolute bottom-20 right-10 rounded-2xl bg-slate-900 p-4 shadow-xl">

              <MessageSquare
                className="text-emerald-400"
                size={34}
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}