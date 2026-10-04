"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Compass,
  RefreshCw,
} from "lucide-react";

import { getSite } from "@/services/site";

import SiteHero from "./SiteHero";
import SiteGallery from "./SiteGallery";
import SiteInfo from "./SiteInfo";
import SiteTimeline from "./SiteTimeline";
import SiteLocation from "./SiteLocation";
import RelatedSites from "./RelatedSites";

export interface SiteDetails {
  _id: string;
  name: string;
  description: string;
  country: string;
  city: string;
  civilization: string;
  type: string;
  latitude: number;
  longitude: number;
  unesco: boolean;
  thumbnail: string;
  gallery: string[];
  establishedYear: number;
  status: string;
}

interface Props {
  id: string;
}

function SiteDetailsSkeleton() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="relative h-[620px] animate-pulse bg-stone-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-stone-800/50" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-10">
          <div className="h-12 w-36 rounded-xl bg-white/10" />

          <div className="max-w-4xl space-y-6">
            <div className="h-8 w-40 rounded-full bg-white/10" />
            <div className="h-16 w-3/4 rounded-2xl bg-white/10" />
            <div className="h-5 w-full max-w-2xl rounded bg-white/10" />
            <div className="h-5 w-2/3 max-w-xl rounded bg-white/10" />

            <div className="flex gap-4">
              <div className="h-12 w-32 rounded-xl bg-white/10" />
              <div className="h-12 w-32 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 h-10 w-64 rounded bg-stone-200" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-80 animate-pulse rounded-3xl bg-stone-200"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function SiteDetailsContainer({
  id,
}: Props) {
  const [site, setSite] = useState<SiteDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadSite = useCallback(async () => {
    setLoading(true);
    setError(false);
    setSite(null);

    try {
      const res = await getSite(id);

      if (!res.data?.site) {
        throw new Error("Site not found");
      }

      setSite(res.data.site);

      if (typeof document !== "undefined") {
        document.title = `${res.data.site.name} | Project Atlas`;
      }
    } catch (err) {
      console.error("Failed to load site:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadSite();
  }, [loadSite]);

  if (loading) {
    return <SiteDetailsSkeleton />;
  }

  if (error || !site) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-stone-50 to-stone-100 px-6 py-20">
        <section className="w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            {error ? (
              <AlertCircle size={30} />
            ) : (
              <Compass size={30} />
            )}
          </div>

          <h1 className="mt-6 text-3xl font-black text-stone-900">
            {error
              ? "We couldn't load this site"
              : "Site not found"}
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-stone-600">
            {error
              ? "Something went wrong while retrieving this archaeological site. Please try again."
              : "The site may have been removed or the link may be incorrect."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={loadSite}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-indigo-700
                px-5
                py-3
                font-semibold
                text-white
                shadow-lg
                transition
                hover:bg-indigo-800
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
              "
            >
              <RefreshCw size={18} />
              Try Again
            </button>

            <Link
              href="/sites"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-stone-300
                bg-stone-50
                px-5
                py-3
                font-semibold
                text-stone-800
                transition
                hover:bg-stone-100
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
              "
            >
              <ArrowLeft size={18} />
              Browse Sites
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <>
      <SiteHero site={site} />

      <SiteGallery site={site} />

      <SiteInfo site={site} />

      <SiteTimeline site={site} />

      <SiteLocation site={site} />

      <RelatedSites currentSite={site} />
    </>
  );
}