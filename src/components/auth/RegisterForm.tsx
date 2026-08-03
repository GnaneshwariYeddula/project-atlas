"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock } from "lucide-react";

import SocialLogin from "./SocialLogin";
import { register } from "@/services/auth";

export default function RegisterForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting || password !== confirmPassword) return;

    setSubmitting(true);

    try {
      await register({ fullName, email, password });
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

          <User
            size={20}
            className="absolute left-4 top-4 text-stone-400"
          />

          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
            placeholder="Full Name"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

        <div className="relative">

          <Mail
            size={20}
            className="absolute left-4 top-4 text-stone-400"
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
            size={20}
            className="absolute left-4 top-4 text-stone-400"
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

        <div className="relative">

          <Lock
            size={20}
            className="absolute left-4 top-4 text-stone-400"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            placeholder="Confirm Password"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 outline-none focus:border-indigo-600"
          />

        </div>

        <label className="flex items-start gap-3 text-sm text-stone-600">

          <input
            type="checkbox"
            className="mt-1"
          />

          I agree to the Terms of Service and Privacy Policy.

        </label>

        <button
          type="submit"
          disabled={submitting || password !== confirmPassword}
          className="w-full rounded-2xl bg-indigo-700 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:opacity-50"
        >

          Create Account

        </button>

        <p className="text-center text-sm text-stone-600">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold text-indigo-700"
          >
            Sign In
          </Link>

        </p>

      </form>

    </div>
  );
}
