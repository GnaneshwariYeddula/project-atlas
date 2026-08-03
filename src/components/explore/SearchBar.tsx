"use client";

import { Search, MapPin, SlidersHorizontal } from "lucide-react";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

export default function SearchBar({
  value = "",
  onChange,
  onSearch,
}: SearchBarProps) {
  return (
    <section className="-mt-14 relative z-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-2xl">

          <div className="grid gap-5 lg:grid-cols-[1fr_220px_180px]">

            {/* Search */}

            <div className="flex items-center gap-4 rounded-2xl border border-stone-200 px-5 py-4">

              <Search
                size={22}
                className="text-indigo-700"
              />

              <input
                type="text"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") onSearch?.();
                }}
                placeholder="Search archaeological sites, artifacts, civilizations..."
                className="w-full bg-transparent text-lg outline-none placeholder:text-stone-400"
              />

            </div>

            {/* Location */}

            <button className="flex items-center justify-between rounded-2xl border border-stone-200 px-5 py-4 transition hover:border-indigo-500 hover:bg-indigo-50">

              <div className="flex items-center gap-3">

                <MapPin
                  size={20}
                  className="text-indigo-700"
                />

                <span className="font-medium">
                  All Locations
                </span>

              </div>

            </button>

            {/* Filters */}

            <button
              type="button"
              onClick={onSearch}
              className="flex items-center justify-center gap-3 rounded-2xl bg-indigo-700 px-6 py-4 font-semibold text-white transition hover:bg-indigo-800"
            >

              <SlidersHorizontal size={20} />

              Filters

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
