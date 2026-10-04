"use client";

import { useEffect, useState } from "react";
import { User, Sparkles } from "lucide-react";

import { getCurrentUser } from "@/services/auth";

interface CurrentUser {
  fullName?: string;
  email?: string;
}

export default function DashboardHero() {
  const [user, setUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const firstName =
    user?.fullName?.trim().split(/\s+/)[0] || "Explorer";

  return (
    <section className="bg-gradient-to-r from-slate-950 via-indigo-900 to-slate-900 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-5 py-2 text-sm font-semibold text-indigo-100">
            <Sparkles size={18} />
            Personal Dashboard
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Welcome Back, {firstName} 👋
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Continue discovering civilizations, archaeological sites,
            artifacts, and AI-powered historical insights.
          </p>

          {user?.email && (
            <p className="mt-4 text-sm text-slate-400">
              Signed in as {user.email}
            </p>
          )}
        </div>

        <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
          <User size={70} strokeWidth={1.6} />
        </div>
      </div>
    </section>
  );
}