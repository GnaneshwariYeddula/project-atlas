"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";

import SocialLogin from "./SocialLogin";
import { login } from "@/services/auth";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    try {
      await login({ email, password });
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>

      <SocialLogin />

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

        <div className="relative">

          <Mail
            className="absolute left-4 top-4 text-stone-400"
            size={20}
          />

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Email Address"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

        <div className="relative">

          <Lock
            className="absolute left-4 top-4 text-stone-400"
            size={20}
          />

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Password"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm">

            <input type="checkbox" />

            Remember me

          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-indigo-700"
          >
            Forgot Password?
          </Link>

        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-2xl bg-indigo-700 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:opacity-50"
        >

          Sign In

        </button>

        <p className="text-center text-sm text-stone-600">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-semibold text-indigo-700"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}
