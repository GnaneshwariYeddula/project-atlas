"use client";

import {
  Globe,
  Landmark,
  MapPin,
  Calendar,
  BadgeCheck,
} from "lucide-react";

import { SiteDetails } from "./SiteDetailsContainer";

interface Props {
  site: SiteDetails;
}

function InfoCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: typeof Globe;
}) {
  return (
    <div className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-100">
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-stone-500">
            {title}
          </p>

          <p className="mt-1.5 break-words font-bold text-stone-950">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SiteInfo({
  site,
}: Props) {
  return (
    <section className="border-y border-stone-200 bg-stone-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
            Archaeological Record
          </p>

          <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
            About This Site
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-base leading-8 text-stone-700 sm:text-lg sm:leading-9">
              {site.description}
            </p>

            <div className="mt-8 h-px bg-stone-200" />

            <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-stone-600">
              <Landmark
                size={18}
                className="text-amber-600"
              />
              Historical site classification
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              title="Country"
              value={site.country}
              icon={Globe}
            />

            <InfoCard
              title="City"
              value={site.city}
              icon={MapPin}
            />

            <InfoCard
              title="Civilization"
              value={site.civilization}
              icon={Landmark}
            />

            <InfoCard
              title="Established"
              value={String(site.establishedYear)}
              icon={Calendar}
            />

            <InfoCard
              title="Status"
              value={site.status}
              icon={Globe}
            />

            <InfoCard
              title="UNESCO"
              value={site.unesco ? "Yes" : "No"}
              icon={BadgeCheck}
            />
          </div>
        </div>
      </div>
    </section>
  );
}