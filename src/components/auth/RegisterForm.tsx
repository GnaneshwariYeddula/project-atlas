"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Lock } from "lucide-react";
import axios from "axios";

import SocialLogin from "./SocialLogin";
import { register } from "@/services/auth";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters long."
      );
      return;
    }

    if (!acceptedTerms) {
      setErrorMessage(
        "Please agree to the Terms of Service and Privacy Policy."
      );
      return;
    }

    setSubmitting(true);

    try {
      await register({
        fullName,
        email,
        password,
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Registration error:", error);

      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message;

        setErrorMessage(
          message ||
            "Unable to create your account. Please try again."
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
          <User
            size={20}
            className="absolute left-4 top-4 text-stone-400"
          />

          <input
            type="text"
            value={fullName}
            onChange={(event) =>
              setFullName(event.target.value)
            }
            required
            minLength={2}
            maxLength={100}
            placeholder="Full Name"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 text-stone-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
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
            size={20}
            className="absolute left-4 top-4 text-stone-400"
          />

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
            minLength={8}
            maxLength={128}
            placeholder="Password"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 text-stone-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
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
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
            minLength={8}
            maxLength={128}
            placeholder="Confirm Password"
            className="w-full rounded-2xl border border-stone-300 py-4 pl-12 pr-4 text-stone-900 outline-none transition focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-stone-600">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) =>
              setAcceptedTerms(event.target.checked)
            }
            className="mt-1"
          />

          <span>
            I agree to the Terms of Service and
            Privacy Policy.
          </span>
        </label>

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
          disabled={
            submitting ||
            password !== confirmPassword ||
            !acceptedTerms
          }
          className="w-full rounded-2xl bg-indigo-700 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting
            ? "Creating Account..."
            : "Create Account"}
        </button>

        <p className="text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-700 hover:text-indigo-800"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}