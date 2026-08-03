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
        Loading Sites...
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