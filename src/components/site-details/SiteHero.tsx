"use client";

import Image from "next/image";
import {
  MapPin,
  Landmark,
  Globe,
  Calendar,
  BadgeCheck,
} from "lucide-react";

import { SiteDetails } from "./SiteDetailsContainer";

import BackButton from "@/components/shared/BackButton";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FavoriteButton from "@/components/shared/FavoriteButton";
import ShareButton from "@/components/shared/ShareButton";

interface Props {
  site: SiteDetails;
}

export default function SiteHero({
  site,
}: Props) {
  const image =
    site.thumbnail ||
    "https://images.unsplash.com/photo-1526392060635-9d6019884377";

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-stone-950 sm:h-[700px]">
      <Image
        src={image}
        alt={site.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/90" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[680px] w-full max-w-7xl flex-col justify-between px-5 py-7 sm:h-full sm:px-6 sm:py-10">
        <div>
          <BackButton />

          <div className="mt-5 sm:mt-6">
            <Breadcrumbs
              dark
              items={[
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Sites",
                  href: "/sites",
                },
                {
                  label: site.name,
                },
              ]}
            />
          </div>
        </div>

        <div className="max-w-4xl pb-4 sm:pb-0">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="rounded-full border border-amber-300/30 bg-amber-500/90 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
              {site.type}
            </span>

            {site.unesco && (
              <span className="flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-600/90 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
                <BadgeCheck size={16} />
                UNESCO Heritage
              </span>
            )}
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl">
            {site.name}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-stone-200 sm:mt-8 sm:text-lg sm:leading-8">
            {site.description}
          </p>

          <div className="mt-7 grid max-w-4xl grid-cols-1 gap-3 text-sm text-white sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
              <MapPin size={19} className="shrink-0 text-amber-300" />
              <span className="min-w-0 truncate">
                {site.city}, {site.country}
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
              <Landmark size={19} className="shrink-0 text-amber-300" />
              <span className="min-w-0 truncate">
                {site.civilization}
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
              <Calendar size={19} className="shrink-0 text-amber-300" />
              <span>{site.establishedYear}</span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md">
              <Globe size={19} className="shrink-0 text-amber-300" />
              <span className="min-w-0 truncate">
                {site.status}
              </span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 sm:mt-10">
            <FavoriteButton
              targetType="site"
              targetId={site._id}
            />

            <ShareButton title={site.name} />
          </div>
        </div>
      </div>
    </section>
  );
}