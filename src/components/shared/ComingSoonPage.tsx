"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Construction,
  Sparkles,
} from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function ComingSoonPage({
  title,
  description,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6">

      <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-300">

          <Construction size={46} />

        </div>

        <h1 className="mt-8 text-5xl font-black text-white">
          {title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {description}
        </p>

        <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 p-6">

          <div className="flex items-center justify-center gap-3">

            <Sparkles className="text-amber-400" />

            <span className="font-semibold text-white">
              This section is currently under development.
            </span>

          </div>

          <p className="mt-4 text-slate-400">
            Soon you'll be able to explore detailed information,
            interactive maps, galleries, AI insights,
            timelines, related discoveries and much more.
          </p>

        </div>

        <div className="mt-12 flex justify-center gap-5">

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <ArrowLeft size={18} />
            Home
          </Link>

          <Link
            href="/explore"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Explore Atlas
          </Link>

        </div>

      </div>

    </main>
  );
}