import Link from "next/link";
import { Building2, Landmark } from "lucide-react";

import Button from "@/components/ui/Button";

export default function MuseumHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-amber-900 to-stone-900 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

            <Building2 size={18} />

            World Museums

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Explore Museums
            <br />
            Around the World

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-amber-100">

            Discover renowned museums, priceless collections,
            archaeological treasures, and cultural heritage from every continent.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link href="/museums">
              <Button>
                Explore Museums
              </Button>
            </Link>

            <Link href="/collections">
              <Button variant="secondary">
                View Collections
              </Button>
            </Link>

          </div>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <Landmark size={80} />

        </div>

      </div>

    </section>
  );
}