import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            🌍 Discover Humanity's Past
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-stone-900 md:text-7xl">
            Discover the Story
            <br />
            of Human
            <span className="block text-indigo-700">
              Civilization
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-stone-600">
            Explore archaeological sites, civilizations, artifacts,
            discoveries and interactive maps in one modern platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/explore">
              <Button>
                Explore Now
              </Button>
            </Link>

            <Link href="/ai">
              <Button variant="secondary">
                AI Guide
              </Button>
            </Link>
          </div>

          <div className="mt-14 flex gap-12">
            <div>
              <h2 className="text-4xl font-bold text-indigo-700">
                1000+
              </h2>

              <p className="text-stone-600">
                Historical Sites
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-indigo-700">
                500+
              </h2>

              <p className="text-stone-600">
                Artifacts
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-indigo-700">
                100+
              </h2>

              <p className="text-stone-600">
                Civilizations
              </p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-indigo-100 via-amber-100 to-stone-100 p-10 shadow-2xl">
            <div className="flex h-[520px] items-center justify-center rounded-[30px] border border-white/50 bg-white/40 backdrop-blur">
              <div className="text-center">
                <div className="text-8xl">
                  🌎
                </div>

                <h2 className="mt-8 text-3xl font-bold text-stone-800">
                  Interactive World Map
                </h2>

                <p className="mx-auto mt-4 max-w-sm text-stone-600">
                  Explore archaeological sites from every continent.
                </p>

                <Link href="/map">
                  <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-700 px-6 py-3 text-white transition hover:bg-indigo-800">
                    Explore Map
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}