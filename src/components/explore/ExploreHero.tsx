import Link from "next/link";
import { ArrowRight, Compass, Globe2, Search } from "lucide-react";

import Button from "@/components/ui/Button";

export default function ExploreHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-slate-900 to-indigo-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.35),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-200 backdrop-blur">
              <Compass size={16} />
              Explore the Ancient World
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Every Discovery
              <span className="block text-amber-400">
                Starts Here
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Browse thousands of archaeological sites, civilizations,
              artifacts and discoveries from across the globe using one
              intelligent exploration platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/sites">
                <Button>
                  Start Exploring
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>

              <Link href="/collections">
                <Button variant="secondary">
                  Browse Collections
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-amber-400">
                  1K+
                </h2>

                <p className="mt-2 text-slate-400">
                  Sites
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-400">
                  50K+
                </h2>

                <p className="mt-2 text-slate-400">
                  Artifacts
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-400">
                  120+
                </h2>

                <p className="mt-2 text-slate-400">
                  Civilizations
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="rounded-3xl bg-slate-900 p-8 shadow-2xl">
                <div className="mb-8 flex items-center gap-3">
                  <div className="rounded-full bg-indigo-700 p-3">
                    <Search size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Quick Search
                    </h3>

                    <p className="text-sm text-slate-400">
                      Explore instantly
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-800 p-4">
                  <input
                    type="text"
                    placeholder="Search sites, artifacts, civilizations..."
                    className="w-full bg-transparent text-white placeholder:text-slate-400 outline-none"
                  />
                </div>

                <div className="mt-10 flex items-center justify-center">
                  <div className="flex h-72 w-72 items-center justify-center rounded-full border border-indigo-500/20 bg-gradient-to-br from-indigo-500/20 to-amber-400/20">
                    <Globe2
                      size={180}
                      className="text-indigo-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}