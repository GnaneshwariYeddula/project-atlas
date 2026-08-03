import Link from "next/link";
import { ArrowRight, Globe2, Landmark, MapPinned } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SiteHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-stone-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.2),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-200 backdrop-blur">
              <Landmark size={16} />
              Archaeological Sites
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Explore
              <span className="block text-amber-400">
                Ancient Wonders
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Browse thousands of archaeological sites from every continent.
              Discover their history, location, discoveries, architecture and
              cultural importance.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/sites">
                <Button>
                  Explore Sites
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>

              <Link href="/map">
                <Button variant="secondary">
                  World Map
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-amber-400">1200+</h2>
                <p className="mt-2 text-slate-400">Sites</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-400">95</h2>
                <p className="mt-2 text-slate-400">Countries</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-400">350+</h2>
                <p className="mt-2 text-slate-400">UNESCO Sites</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="rounded-3xl bg-slate-900 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-indigo-700 p-3">
                      <Globe2 size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold">Global Coverage</h3>
                      <p className="text-sm text-slate-400">
                        Sites from every continent
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-900 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-amber-500 p-3 text-black">
                      <MapPinned size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold">Interactive Maps</h3>
                      <p className="text-sm text-slate-400">
                        View every location on the map
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex h-72 items-center justify-center rounded-3xl border border-dashed border-indigo-400/30 bg-gradient-to-br from-indigo-500/10 to-amber-400/10">
                  <div className="text-center">
                    <Globe2
                      size={170}
                      className="mx-auto text-indigo-300"
                    />

                    <p className="mt-6 text-lg font-semibold text-slate-300">
                      Interactive World Archaeology Map
                    </p>
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