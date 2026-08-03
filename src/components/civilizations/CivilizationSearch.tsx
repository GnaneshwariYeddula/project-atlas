"use client";

import { Search, Globe2, Filter, Landmark } from "lucide-react";

interface Props {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function CivilizationSearch({
  search,
  onSearchChange,
}: Props) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg">

          <div className="grid gap-5 lg:grid-cols-4">

            <div className="flex items-center gap-3 rounded-2xl border border-stone-200 px-5 py-4">

              <Search
                size={20}
                className="text-indigo-600"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  onSearchChange(e.target.value)
                }
                placeholder="Search civilizations..."
                className="w-full bg-transparent outline-none"
              />

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-stone-200 px-5 py-4">

              <Globe2
                size={20}
                className="text-indigo-600"
              />

              <select className="w-full bg-transparent outline-none">
                <option>All Regions</option>
              </select>

            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-stone-200 px-5 py-4">

              <Landmark
                size={20}
                className="text-indigo-600"
              />

              <select className="w-full bg-transparent outline-none">
                <option>All Eras</option>
              </select>

            </div>

            <button className="flex items-center justify-center gap-3 rounded-2xl bg-indigo-700 px-6 py-4 font-semibold text-white">

              <Filter size={20} />

              Apply Filters

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}