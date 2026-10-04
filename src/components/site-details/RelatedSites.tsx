"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Landmark,
  MapPin,
} from "lucide-react";

import { getSites } from "@/services/site";
import { SiteDetails } from "./SiteDetailsContainer";

interface Props {
  currentSite: SiteDetails;
}

interface Site {
  _id: string;
  name: string;
  country: string;
  city?: string;
  thumbnail: string;
  civilization: string;
  type?: string;
  unesco?: boolean;
}

interface RankedSite {
  site: Site;
  score: number;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1526392060635-9d6019884377";

export default function RelatedSites({
  currentSite,
}: Props) {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      try {
        const res = await getSites();

        const available: Site[] = (
          res.data?.sites || []
        ).filter(
          (site: Site) =>
            site._id !== currentSite._id
        );

        const ranked: Site[] = available
          .map(
            (site: Site): RankedSite => {
              let score = 0;

              if (
                site.civilization &&
                site.civilization ===
                  currentSite.civilization
              ) {
                score += 50;
              }

              if (
                site.country &&
                site.country ===
                  currentSite.country
              ) {
                score += 30;
              }

              if (
                site.type &&
                site.type === currentSite.type
              ) {
                score += 15;
              }

              if (site.unesco) {
                score += 5;
              }

              return {
                site,
                score,
              };
            }
          )
          .sort(
            (
              a: RankedSite,
              b: RankedSite
            ) => b.score - a.score
          )
          .slice(0, 3)
          .map(
            ({ site }: RankedSite) =>
              site
          );

        if (!cancelled) {
          setSites(ranked);
        }
      } catch (error) {
        console.error(
          "Failed to load related sites:",
          error
        );

        if (!cancelled) {
          setSites([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [
    currentSite._id,
    currentSite.country,
    currentSite.civilization,
    currentSite.type,
  ]);

  const visibleSites = useMemo(
    () => sites.slice(0, 3),
    [sites]
  );

  if (
    !loading &&
    visibleSites.length === 0
  ) {
    return null;
  }

  return (
    <section className="border-t border-stone-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-9 flex items-end justify-between gap-6 sm:mb-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
              Continue Exploring
            </p>

            <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
              Related Sites
            </h2>
          </div>

          <Link
            href="/sites"
            className="
              hidden
              items-center
              gap-2
              rounded-xl
              border
              border-stone-200
              bg-stone-50
              px-4
              py-2.5
              text-sm
              font-bold
              text-stone-700
              transition
              hover:border-indigo-200
              hover:bg-indigo-50
              hover:text-indigo-700
              sm:inline-flex
            "
          >
            View All Sites
            <ArrowRight size={16} />
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[390px] animate-pulse rounded-3xl bg-stone-100"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleSites.map((site) => (
              <Link
                key={site._id}
                href={`/sites/${site._id}`}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-stone-200
                  bg-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-indigo-200
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  focus:ring-offset-4
                "
              >
                <div className="relative h-60 overflow-hidden bg-stone-200">
                  <Image
                    src={
                      site.thumbnail ||
                      FALLBACK_IMAGE
                    }
                    alt={site.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    <Landmark size={13} />
                    {site.type ||
                      "Archaeological Site"}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="line-clamp-2 text-2xl font-black text-stone-950">
                    {site.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-stone-600">
                    <MapPin
                      size={16}
                      className="shrink-0 text-indigo-600"
                    />

                    <span>
                      {site.city
                        ? `${site.city}, ${site.country}`
                        : site.country}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-5">
                    <span className="text-sm font-bold text-indigo-700">
                      {site.civilization}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <Link
          href="/sites"
          className="
            mt-7
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-stone-200
            bg-stone-50
            px-5
            py-3
            font-bold
            text-stone-700
            transition
            hover:bg-stone-100
            sm:hidden
          "
        >
          View All Sites
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}