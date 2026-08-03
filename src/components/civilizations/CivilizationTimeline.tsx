"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  Landmark,
  Crown,
  ScrollText,
  Globe2,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

export default function CivilizationTimeline() {
  const [timeline, setTimeline] = useState<{ _id: string; year: string; title: string; description: string; icon: typeof Landmark }[]>([]);

  useEffect(() => {
  async function load() {
    try {
      const { getCivilizations } = await import("@/services/civilization");

      const response = await getCivilizations();

      const civilizations = response.data?.civilizations ?? [];

      const mapped = civilizations
        .sort(
          (a: { startYear: number }, b: { startYear: number }) =>
            a.startYear - b.startYear
        )
        .map(
          (
            civilization: {
              _id: string;
              startYear: number;
              name: string;
              description: string;
            },
            index: number
          ) => ({
            _id: civilization._id,
            year: civilization.startYear
              ? String(civilization.startYear)
              : "Unknown",
            title: civilization.name,
            description: civilization.description,
            icon: [Crown, Landmark, ScrollText, Globe2][index % 4],
          })
        );

      setTimeline(mapped);
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
          badge="Historical Journey"
          title="Timeline of Great Civilizations"
          subtitle="Follow the rise and evolution of the civilizations that transformed human history."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          <div className="absolute left-8 top-0 h-full w-1 rounded bg-indigo-200" />

          <div className="space-y-14">

            {timeline.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item._id}
                  className="relative flex gap-8"
                >

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-700 text-white shadow-lg">

                    <Icon size={28} />

                  </div>

                  <div className="flex-1 rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-sm transition hover:shadow-lg">

                    <div className="flex items-center gap-3 text-indigo-700">

                      <Clock3 size={18} />

                      <span className="font-semibold">
                        {item.year}
                      </span>

                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-stone-900">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-7 text-stone-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

