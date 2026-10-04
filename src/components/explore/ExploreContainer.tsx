"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Landmark,
  Gem,
  Globe2,
  Building2,
  BookOpen,
  Clock3,
  Map,
  ArrowRight,
  Compass,
  Sparkles,
  X,
} from "lucide-react";

import { globalSearch } from "@/services/search";

interface SearchRecord {
  _id?: string;
  id?: string;
  name?: string;
  title?: string;
  country?: string;
  origin?: string;
  originCountry?: string;
  civilization?: string;
  thumbnail?: string;
  image?: string;
}

interface SearchResult {
  id: string;
  name: string;
  type: string;
  location: string;
  image: string;
  href: string;
}

const categories = [
  {
    title: "Archaeological Sites",
    description:
      "Discover ancient cities, monuments, temples, ruins and excavation sites.",
    href: "/sites",
    icon: Landmark,
    label: "Sites",
  },
  {
    title: "Artifacts",
    description:
      "Explore ancient objects, relics, tools, sculptures and historical treasures.",
    href: "/artifacts",
    icon: Gem,
    label: "Artifacts",
  },
  {
    title: "Civilizations",
    description:
      "Journey through the cultures and societies that shaped human history.",
    href: "/civilizations",
    icon: Globe2,
    label: "Civilizations",
  },
  {
    title: "Museums",
    description:
      "Discover institutions preserving archaeological and cultural heritage.",
    href: "/museums",
    icon: Building2,
    label: "Museums",
  },
  {
    title: "Research",
    description:
      "Read archaeological research, discoveries and scholarly material.",
    href: "/research",
    icon: BookOpen,
    label: "Research",
  },
  {
    title: "Timeline",
    description:
      "Navigate major periods, events and developments across human history.",
    href: "/timeline",
    icon: Clock3,
    label: "Timeline",
  },
];

const searchFilters = [
  "All",
  "Sites",
  "Artifacts",
  "Civilizations",
  "Museums",
];

const endpointByFilter: Record<string, string> = {
  Sites: "sites",
  Artifacts: "artifacts",
  Civilizations: "civilizations",
  Museums: "museums",
};

function createResult(
  type: string,
  item: SearchRecord
): SearchResult {
  const id = String(
    item._id ??
      item.id ??
      item.name ??
      item.title ??
      "unknown"
  );

  const name = String(
    item.name ??
      item.title ??
      "Untitled Discovery"
  );

  const location = String(
    item.country ??
      item.origin ??
      item.originCountry ??
      item.civilization ??
      ""
  );

  const image = String(
    item.thumbnail ??
      item.image ??
      ""
  );

  /*
   * Sites already have a working dynamic detail route.
   * Other current collections use their listing route
   * until their individual detail pages are implemented.
   */
  const href =
    type === "sites"
      ? `/sites/${id}`
      : `/${type}`;

  return {
    id,
    name,
    type,
    location,
    image,
    href,
  };
}

export default function ExploreContainer() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] =
    useState("All");

  const [results, setResults] = useState<
    SearchResult[] | null
  >(null);

  const [searching, setSearching] =
    useState(false);

  const [error, setError] = useState("");

  async function handleSearch(
    event?: React.FormEvent
  ) {
    event?.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setResults(null);
      setError("");
      return;
    }

    setSearching(true);
    setError("");

    try {
      const response =
        await globalSearch(trimmedQuery);

      const keys =
        activeFilter === "All"
          ? [
              "sites",
              "artifacts",
              "civilizations",
              "museums",
            ]
          : [
              endpointByFilter[activeFilter],
            ].filter(Boolean);

      const foundResults: SearchResult[] =
        keys.flatMap((key) => {
          const records =
            (response.results?.[key] ??
              []) as SearchRecord[];

          return records.map((item) =>
            createResult(key, item)
          );
        });

      setResults(foundResults);
    } catch (searchError) {
      console.error(
        "Explore search failed:",
        searchError
      );

      setResults([]);
      setError(
        "We couldn't complete the search. Please try again."
      );
    } finally {
      setSearching(false);
    }
  }

  function handleFilterChange(
    filter: string
  ) {
    setActiveFilter(filter);

    if (query.trim()) {
      setTimeout(() => {
        const form =
          document.getElementById(
            "atlas-explore-search"
          ) as HTMLFormElement | null;

        form?.requestSubmit();
      }, 0);
    }
  }

  function clearSearch() {
    setQuery("");
    setResults(null);
    setError("");
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-slate-900 to-indigo-950">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-100 backdrop-blur">
              <Compass size={17} />
              Atlas Discovery Hub
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Explore the
              <span className="block text-indigo-300">
                Ancient World
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Search archaeological sites, artifacts,
              civilizations and museums — or browse
              Atlas by category to begin your journey.
            </p>
          </div>

          {/* Search */}

          <form
            id="atlas-explore-search"
            onSubmit={handleSearch}
            className="mt-10 max-w-4xl"
          >
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:flex-row">
              <div className="relative flex-1">
                <Search
                  size={21}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={query}
                  onChange={(event) =>
                    setQuery(event.target.value)
                  }
                  placeholder="Search sites, artifacts, civilizations..."
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white px-12 pr-12 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-500/20"
                />

                {query && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
                    aria-label="Clear search"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={searching}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-7 font-bold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Search size={18} />

                {searching
                  ? "Searching..."
                  : "Search Atlas"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Search filters */}

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 py-5 sm:px-6">
          <div className="flex min-w-max gap-2">
            {searchFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  handleFilterChange(filter)
                }
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeFilter === filter
                    ? "bg-indigo-700 text-white shadow-md"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search results */}

      {results !== null && (
        <section className="border-b border-stone-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                  Search Results
                </p>

                <h2 className="text-3xl font-black text-stone-950">
                  Results for "{query}"
                </h2>
              </div>

              <button
                type="button"
                onClick={clearSearch}
                className="hidden rounded-xl border border-stone-200 px-4 py-2 text-sm font-bold text-stone-600 transition hover:bg-stone-50 sm:block"
              >
                Clear
              </button>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            {!error &&
              results.length === 0 && (
                <div className="rounded-3xl border border-stone-200 bg-stone-50 px-6 py-16 text-center">
                  <Search
                    size={40}
                    className="mx-auto text-stone-400"
                  />

                  <h3 className="mt-5 text-xl font-bold text-stone-900">
                    No discoveries found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-stone-600">
                    Try another search term or select
                    a different category.
                  </p>
                </div>
              )}

            {results.length > 0 && (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {results.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.href}
                    className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                  >
                    <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-100 to-stone-200">
                      {result.image ? (
                        <img
                          src={result.image}
                          alt={result.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Landmark
                            size={58}
                            className="text-indigo-300"
                          />
                        </div>
                      )}

                      <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-bold capitalize text-white backdrop-blur">
                        {result.type}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="line-clamp-2 text-xl font-black text-stone-950">
                        {result.name}
                      </h3>

                      {result.location && (
                        <p className="mt-2 text-sm text-stone-500">
                          {result.location}
                        </p>
                      )}

                      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                        <span className="text-sm font-bold text-indigo-700">
                          Explore
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
                          <ArrowRight size={17} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories */}

      <section className="bg-stone-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
              Browse Atlas
            </p>

            <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
              Where would you like to begin?
            </h2>

            <p className="mt-4 text-lg leading-8 text-stone-600">
              Explore one part of humanity's history,
              or use search above to find a specific
              discovery.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-stone-300 transition group-hover:translate-x-1 group-hover:text-indigo-700"
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-black text-stone-950">
                    {category.title}
                  </h3>

                  <p className="mt-3 leading-7 text-stone-600">
                    {category.description}
                  </p>

                  <span className="mt-6 inline-block text-sm font-bold text-indigo-700">
                    Browse {category.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map / AI discovery strip */}

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2">
          <Link
            href="/map"
            className="group rounded-[32px] bg-gradient-to-br from-emerald-950 to-slate-900 p-8 text-white shadow-xl transition hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Map size={27} />
            </div>

            <h2 className="mt-8 text-3xl font-black">
              Explore the World Map
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-emerald-100">
              Discover where archaeological sites,
              civilizations and heritage locations are
              found around the world.
            </p>

            <span className="mt-7 inline-flex items-center gap-2 font-bold">
              Open Interactive Map
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="/ai"
            className="group rounded-[32px] bg-gradient-to-br from-indigo-950 to-slate-900 p-8 text-white shadow-xl transition hover:-translate-y-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-8 text-3xl font-black">
              Ask Atlas AI
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-indigo-100">
              Ask questions about ancient civilizations,
              sites, artifacts, historical events and
              archaeological research.
            </p>

            <span className="mt-7 inline-flex items-center gap-2 font-bold">
              Start with Atlas AI
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}