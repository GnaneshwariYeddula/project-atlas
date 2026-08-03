import Link from "next/link";
import {
  Globe2,
  MapPinned,
  Compass,
} from "lucide-react";

import Button from "@/components/ui/Button";

export default function MapHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-cyan-900 to-slate-900 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

            <MapPinned size={18} />

            Interactive World Map

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Explore History
            <br />
            Across the Globe

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-cyan-100">

            Discover archaeological sites, museums, civilizations,
            and historical landmarks through an interactive map.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link href="/map">
              <Button>
                Explore Map
              </Button>
            </Link>

            <Link href="/sites">
              <Button variant="secondary">
                Browse Sites
              </Button>
            </Link>

          </div>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <Globe2 size={80} />

        </div>

      </div>

    </section>
  );
}