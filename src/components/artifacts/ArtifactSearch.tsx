"use client";

import {
  Search,
  Building2,
  Filter,
  Gem,
} from "lucide-react";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function ArtifactSearch({
  search,
  onSearchChange,
}: Props) {
  return (
    <section className="-mt-14 relative z-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-2xl">

          <div className="grid gap-5 lg:grid-cols-[1fr_240px_220px_170px]">

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200 px-5 py-4">

              <Search
                size={22}
                className="text-indigo-700"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  onSearchChange(e.target.value)
                }
                placeholder="Search artifacts..."
                className="w-full bg-transparent text-lg outline-none placeholder:text-stone-400"
              />

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-stone-200 px-5 py-4">

              <Building2
                size={20}
                className="text-indigo-700"
              />

              <select className="w-full bg-transparent outline-none">
                <option>All Museums</option>
              </select>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-stone-200 px-5 py-4">

              <Gem
                size={20}
                className="text-indigo-700"
              />

              <select className="w-full bg-transparent outline-none">
                <option>All Types</option>
              </select>

            </div>

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-indigo-700 px-6 py-4 font-semibold text-white">

              <Filter size={20} />

              Filter

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}