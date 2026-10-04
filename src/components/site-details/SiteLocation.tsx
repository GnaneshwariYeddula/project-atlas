"use client";

import dynamic from "next/dynamic";
import {
  MapPin,
  Globe,
  Landmark,
  ExternalLink,
} from "lucide-react";

import { SiteDetails } from "./SiteDetailsContainer";

interface SiteMapLeafletProps {
  latitude: number;
  longitude: number;
  title: string;
}

const Map = dynamic<SiteMapLeafletProps>(
  () => import("./SiteMapLeaflet"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] items-center justify-center bg-stone-200 text-sm font-semibold text-stone-600 sm:h-[500px]">
        Loading interactive map...
      </div>
    ),
  }
);

interface Props {
  site: SiteDetails;
}

export default function SiteLocation({
  site,
}: Props) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.latitude},${site.longitude}`;

  return (
    <section className="bg-stone-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 sm:mb-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
            Geographic Context
          </p>

          <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
            Location
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            Explore the exact geographical location of this archaeological site.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-lg sm:p-8">
            <div className="space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <MapPin size={21} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-stone-950">
                    Address
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-stone-600">
                    {site.city}, {site.country}
                  </p>
                </div>
              </div>

              <div className="h-px bg-stone-200" />

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Globe size={21} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-stone-950">
                    Coordinates
                  </h3>

                  <p className="mt-1.5 break-all text-sm leading-6 text-stone-600">
                    {site.latitude}, {site.longitude}
                  </p>
                </div>
              </div>

              <div className="h-px bg-stone-200" />

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Landmark size={21} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-stone-950">
                    Civilization
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-stone-600">
                    {site.civilization}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-indigo-700
                px-5
                py-3
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-indigo-800
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
              "
            >
              Open in Maps
              <ExternalLink size={17} />
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl">
            <Map
              latitude={site.latitude}
              longitude={site.longitude}
              title={site.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}