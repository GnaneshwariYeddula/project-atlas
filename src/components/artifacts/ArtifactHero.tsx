import Link from "next/link";
import { Gem, Shield, ScrollText, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ArtifactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-stone-950 to-indigo-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.35),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.2),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/20 px-5 py-2 text-sm font-semibold text-indigo-200">
              <Gem size={18} />
              Artifact Collection
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Discover
              <span className="block text-amber-400">
                Ancient Artifacts
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Browse priceless artifacts, sculptures, coins,
              manuscripts, pottery, jewelry and historical treasures
              collected from civilizations around the world.
            </p>

            <div className="mt-10 flex gap-5">

              <Link href="/artifacts">
                <Button>
                  Explore Artifacts
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>

              <Link href="/collections">
                <Button variant="secondary">
                  Collections
                </Button>
              </Link>

            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>
                <h2 className="text-4xl font-black text-amber-400">50K+</h2>
                <p className="mt-2 text-slate-400">Artifacts</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-amber-400">300+</h2>
                <p className="mt-2 text-slate-400">Museums</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-amber-400">120+</h2>
                <p className="mt-2 text-slate-400">Cultures</p>
              </div>

            </div>

          </div>

          <div>

            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="grid gap-6">

                <div className="rounded-3xl bg-slate-900 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-indigo-700 p-3">
                      <Shield size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold">Preserved Heritage</h3>
                      <p className="text-sm text-slate-400">
                        Protected for future generations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-900 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-amber-500 p-3 text-black">
                      <ScrollText size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold">Rich Historical Data</h3>
                      <p className="text-sm text-slate-400">
                        Verified archaeological records
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-amber-400/10">
                  <Gem
                    size={180}
                    className="text-indigo-300"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}