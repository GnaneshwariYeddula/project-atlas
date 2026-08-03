import { User, Sparkles } from "lucide-react";

export default function DashboardHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-indigo-900 to-slate-900 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-5 py-2 text-sm font-semibold">

            <Sparkles size={18} />

            Personal Dashboard

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Welcome Back Explorer 👋

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">

            Continue discovering civilizations, archaeological sites,
            artifacts, and AI-powered historical insights.

          </p>

        </div>

        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/10">

          <User size={70} />

        </div>

      </div>

    </section>
  );
}