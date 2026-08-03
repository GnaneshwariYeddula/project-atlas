import Link from "next/link";
import {
  Navigation,
  MapPin,
} from "lucide-react";

interface NearbySite {
  _id: string;
  name: string;
}

interface NearbySitesProps {
  sites: NearbySite[];
}

export default function NearbySites({ sites }: NearbySitesProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-3">

          <Navigation className="text-cyan-700" />

          <h2 className="text-3xl font-black">
            Nearby Sites
          </h2>

        </div>

        <div className="space-y-4">

          {sites.map((site) => {
            return (
              <Link
                key={site._id}
                href={`/sites/${site._id}`}
              >
                <div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-4 transition hover:bg-cyan-50">

                  <MapPin
                    size={20}
                    className="text-cyan-700"
                  />

                  <span className="font-medium">
                    {site.name}
                  </span>

                </div>
              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}
