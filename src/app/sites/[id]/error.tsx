"use client";

import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {
  console.error(error);

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-stone-50 to-stone-100 px-6 py-20">
      <section className="w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
          <AlertTriangle size={30} />
        </div>

        <h1 className="mt-6 text-3xl font-black text-stone-950">
          Something went wrong
        </h1>

        <p className="mt-4 leading-7 text-stone-600">
          We couldn't display this archaeological site right now.
          Please try again or return to the Sites collection.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-indigo-700
              px-5
              py-3
              font-semibold
              text-white
              shadow-lg
              transition
              hover:bg-indigo-800
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <Link
            href="/sites"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-stone-300
              bg-stone-50
              px-5
              py-3
              font-semibold
              text-stone-800
              transition
              hover:bg-stone-100
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
              focus:ring-offset-2
            "
          >
            <ArrowLeft size={18} />
            Browse Sites
          </Link>
        </div>
      </section>
    </main>
  );
}