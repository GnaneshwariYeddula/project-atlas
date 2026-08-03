"use client";

import { Search } from "lucide-react";

export default function ResearchSearch() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="relative">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-400"
        />

        <input
          type="text"
          placeholder="Search research papers..."
          className="w-full rounded-3xl border border-stone-300 py-5 pl-14 pr-5 outline-none focus:border-blue-600"
        />

      </div>

    </section>
  );
}