"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import axios from "axios";

import SocialLogin from "./SocialLogin";
import { login } from "@/services/auth";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setErrorMessage("");
    setSubmitting(true);

    try {
      await login({
        email,
        password,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message;

        setErrorMessage(
          message ||
            "Unable to sign in. Please check your credentials."
        );
      } else {
        setErrorMessage(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <SocialLogin />

      <form
        className="mt-8 space-y-5"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <Mail
            className="absolute left-4 top-4 text-stone-400"
            size={20}
          />

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            placeholder="Email Address"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 text-stone-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
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
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
            placeholder="Password"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 text-stone-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-stone-600">
            <input
              type="checkbox"
              className="rounded"
            />

            Remember me
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-semibold text-indigo-700 hover:text-indigo-800"
          >
            Forgot Password?
          </Link>
        </div>

        {errorMessage && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-2xl bg-indigo-700 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting
            ? "Signing In..."
            : "Sign In"}
        </button>

        <p className="text-center text-sm text-stone-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-700 hover:text-indigo-800"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}