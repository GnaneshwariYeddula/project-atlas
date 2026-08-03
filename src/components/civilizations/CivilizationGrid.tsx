"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import CivilizationCard from "./CivilizationCard";
import { Civilization } from "./CivilizationContainer";

interface Props {
  civilizations: Civilization[];
  loading: boolean;
}

export default function CivilizationGrid({
  civilizations,
  loading,
}: Props) {
  if (loading) {
    return (
      <section className="bg-stone-50 py-24 text-center">
        Loading Civilizations...
      </section>
    );
  }

  return (
    <section className="bg-stone-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="World History"
          title="Explore Great Civilizations"
          subtitle="Discover the rise, achievements, innovations, and legacy of humanity's greatest civilizations."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {civilizations.map((civilization) => (

            <CivilizationCard
              key={civilization._id}
              name={civilization.name}
              image={civilization.thumbnail}
              region={civilization.region}
              period={civilization.period}
              capital={civilization.capital}
              description={civilization.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}