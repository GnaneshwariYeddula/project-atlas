"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function ForgotPassword() {
  return (
    <form className="space-y-6">

      <div>

        <p className="mb-6 text-stone-600">
          Enter your registered email address and we'll send you a password reset link.
        </p>

        <div className="relative">

          <Mail
            size={20}
            className="absolute left-4 top-4 text-stone-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

      </div>

      <button className="w-full rounded-2xl bg-indigo-700 py-4 font-semibold text-white transition hover:bg-indigo-800">

        Send Reset Link

      </button>

      <p className="text-center text-sm">

        <Link
          href="/login"
          className="font-semibold text-indigo-700"
        >
          ← Back to Login
        </Link>

      </p>

    </form>
  );
}