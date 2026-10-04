"use client";

import SectionTitle from "@/components/ui/SectionTitle";

import SiteCard from "./SiteCard";
import { Site } from "./SiteContainer";

interface Props {
  sites: Site[];
  loading: boolean;
}

export default function SiteGrid({
  sites,
  loading,
}: Props) {
  if (loading) {
    return (
      <section className="bg-stone-50 py-24 text-center">
        <p className="text-lg font-semibold text-stone-700">
          Loading Sites...
        </p>
      </section>
    );
  }

  if (sites.length === 0) {
    return (
      <section className="bg-stone-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            badge="Discover"
            title="Explore Archaeological Sites"
            subtitle="Browse famous archaeological destinations from around the globe."
          />

          <div className="mt-12 rounded-3xl border border-stone-200 bg-white px-6 py-16 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-stone-900">
              No sites found
            </h3>

            <p className="mt-3 text-stone-600">
              Try changing your search or filter to find more archaeological sites.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Discover"
          title="Explore Archaeological Sites"
          subtitle="Browse famous archaeological destinations from around the globe."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sites.map((site) => (
            <SiteCard
              key={site._id}
              _id={site._id}
              name={site.name}
              country={site.country}
              image={site.thumbnail}
              type={site.type}
              year={site.age}
              rating={5}
              description={site.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}