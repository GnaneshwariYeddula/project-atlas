"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Globe2,
  MapPin,
  Navigation,
  Compass,
} from "lucide-react";

import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

interface SiteLocation {
  _id: string;
  name: string;
  country: string;
  top: string;
  left: string;
}

export default function SiteMap() {
  const [locations, setLocations] = useState<SiteLocation[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const { getSites } = await import("@/services/site");

        const response = await getSites();

        const sites = response.data?.sites ?? [];

        const mapped: SiteLocation[] = sites.map(
          (site: {
            _id: string;
            name: string;
            country: string;
            latitude: number;
            longitude: number;
          }) => ({
            _id: site._id,
            name: site.name,
            country: site.country,
            top: `${Math.max(8, Math.min(88, 50 - site.latitude / 2))}%`,
            left: `${Math.max(8, Math.min(88, 50 + site.longitude / 4))}%`,
          })
        );

        setLocations(mapped);
      } catch (error) {
        console.error(error);
      }
    }

    void load();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Interactive Map"
          title="Archaeological Sites Across The Globe"
          subtitle="Every marker represents a famous archaeological destination."
        />

        <div className="overflow-hidden rounded-[40px] border border-stone-200 bg-gradient-to-br from-sky-100 via-blue-50 to-emerald-100 shadow-xl">
          <div className="relative flex h-[700px] items-center justify-center">
            <Globe2
              size={320}
              className="text-blue-300"
            />

            {locations.map((site) => (
              <div
                key={site._id}
                className="absolute"
                style={{
                  top: site.top,
                  left: site.left,
                }}
              >
                <div className="group relative">
                  <Link href={`/sites/${site._id}`}>
                    <button className="rounded-full bg-red-600 p-3 text-white shadow-xl transition duration-300 hover:scale-125">
                      <MapPin size={18} />
                    </button>
                  </Link>

                  <div className="absolute left-1/2 top-14 hidden w-52 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-2xl group-hover:block">
                    <h3 className="font-bold text-stone-900">
                      {site.name}
                    </h3>

                    <p className="mt-1 text-sm text-stone-600">
                      {site.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link href="/map">
            <Button>
              <Navigation
                className="mr-2"
                size={18}
              />
              Explore Full Map
            </Button>
          </Link>

          <Link href="/sites/nearby">
            <Button variant="secondary">
              <Compass
                className="mr-2"
                size={18}
              />
              Nearby Sites
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}