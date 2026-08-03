import {
  Lock,
  ShieldCheck,
  Globe2,
} from "lucide-react";

export default function LoginHero() {
  return (
    <div className="hidden h-full flex-col justify-center bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-900 p-12 text-white lg:flex">

      <div className="inline-flex w-fit rounded-full bg-indigo-500/20 px-5 py-2 text-sm font-semibold text-indigo-200">

        Welcome Back

      </div>

      <h1 className="mt-8 text-5xl font-black leading-tight">

        Continue Your
        <br />
        Historical Journey

      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-300">

        Access your saved discoveries, AI conversations,
        favorite archaeological sites, and personalized dashboard.

      </p>

      <div className="mt-12 space-y-6">

        <div className="flex items-center gap-4">

          <Lock className="text-indigo-300" />

          Secure Authentication

        </div>

        <div className="flex items-center gap-4">

          <ShieldCheck className="text-emerald-300" />

          Protected Personal Data

        </div>

        <div className="flex items-center gap-4">

          <Globe2 className="text-cyan-300" />

          Explore History Anywhere

        </div>

      </div>

    </div>
  );
}