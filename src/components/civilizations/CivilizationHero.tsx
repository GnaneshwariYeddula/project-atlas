import Link from "next/link";
import { ArrowRight, Crown, Globe2, Landmark } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CivilizationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_45%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        <div className="flex-1">

          <span className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-300">
            🌍 Ancient Civilizations
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Discover the World's
            <span className="block text-indigo-400">
              Greatest Civilizations
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            Explore powerful empires, legendary kingdoms, remarkable cultures,
            and the people who shaped human history through innovation,
            architecture, science, and art.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link href="/civilizations">
              <Button>
                Explore Civilizations
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>

            <Link href="/timeline">
              <Button variant="secondary">
                Learn More
              </Button>
            </Link>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-4xl font-black text-white">120+</h2>
              <p className="mt-2 text-slate-400">Civilizations</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-white">5000+</h2>
              <p className="mt-2 text-slate-400">Historical Events</p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-white">50K+</h2>
              <p className="mt-2 text-slate-400">Artifacts</p>
            </div>
          </div>

        </div>

        <div className="flex flex-1 justify-center">

          <div className="relative flex h-[520px] w-[520px] items-center justify-center rounded-full border border-indigo-500/30 bg-white/5 backdrop-blur">

            <div className="absolute h-96 w-96 rounded-full border border-indigo-500/30" />
            <div className="absolute h-72 w-72 rounded-full border border-indigo-400/30" />
            <div className="absolute h-52 w-52 rounded-full border border-indigo-300/30" />

            <Globe2
              className="text-indigo-400"
              size={140}
            />

            <div className="absolute left-8 top-16 rounded-2xl bg-slate-900 p-4 shadow-xl">
              <Landmark
                className="text-amber-400"
                size={34}
              />
            </div>

            <div className="absolute bottom-20 right-10 rounded-2xl bg-slate-900 p-4 shadow-xl">
              <Crown
                className="text-yellow-400"
                size={34}
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}