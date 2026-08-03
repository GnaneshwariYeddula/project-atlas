import Link from "next/link";
import {
  Map,
  Navigation,
} from "lucide-react";

import Button from "@/components/ui/Button";

export default function InteractiveMap() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="flex h-[600px] flex-col items-center justify-center rounded-3xl border border-stone-200 bg-gradient-to-br from-cyan-50 to-slate-100">

        <Map
          size={90}
          className="text-cyan-700"
        />

        <h2 className="mt-8 text-4xl font-black">
          Interactive Map
        </h2>

        <p className="mt-4 max-w-xl text-center text-stone-600">

          React Leaflet and real-world archaeological locations
          will be integrated here in the backend phase.

        </p>

        <Link href="/sites">
          <Button className="mt-8">
            <Navigation size={20} className="mr-2" />
            Explore Locations
          </Button>
        </Link>

      </div>

    </section>
  );
}