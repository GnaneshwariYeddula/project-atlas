"use client";

import {
  Calendar,
  Landmark,
  Flag,
  BadgeCheck,
} from "lucide-react";

import { SiteDetails } from "./SiteDetailsContainer";

interface Props {
  site: SiteDetails;
}

export default function SiteTimeline({
  site,
}: Props) {
  const events = [
    {
      icon: Calendar,
      title: "Established",
      description: `${site.name} dates back to approximately ${site.establishedYear}.`,
    },
    {
      icon: Landmark,
      title: "Civilization",
      description: `Built during the ${site.civilization} civilization.`,
    },
    {
      icon: BadgeCheck,
      title: "Current Status",
      description: `Current status: ${site.status}.`,
    },
    {
      icon: Flag,
      title: "UNESCO",
      description: site.unesco
        ? "Recognized as a UNESCO World Heritage Site."
        : "Not listed as a UNESCO World Heritage Site.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-14 text-center text-4xl font-black text-stone-900">
          Historical Timeline
        </h2>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-1 rounded bg-amber-300" />

          <div className="space-y-12">

            {events.map((event, index) => {

              const Icon = event.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-8"
                >

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg">

                    <Icon size={22} />

                  </div>

                  <div className="flex-1 rounded-3xl border border-stone-200 bg-stone-50 p-6">

                    <h3 className="text-xl font-bold text-stone-900">
                      {event.title}
                    </h3>

                    <p className="mt-3 leading-7 text-stone-600">
                      {event.description}
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