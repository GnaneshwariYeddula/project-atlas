"use client";

import { useEffect, useState } from "react";
import {
  Globe2,
  Landmark,
  Crown,
  BookOpen,
} from "lucide-react";

export default function CivilizationStats() {
  const [totals, setTotals] = useState({ civilizations: 0, sites: 0, artifacts: 0, events: 0 });

  useEffect(() => {
    import("@/services/analytics").then(({ getAnalytics }) =>
      getAnalytics().then((response) => setTotals(response.analytics?.totals ?? totals)).catch(console.error)
    );
  }, []);

const stats = [
  {
    value: String(totals.civilizations),
    title: "Civilizations",
    icon: Globe2,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    value: String(totals.sites),
    title: "Historical Sites",
    icon: Landmark,
    color: "bg-amber-100 text-amber-700",
  },
  {
    value: String(totals.artifacts),
    title: "Artifacts",
    icon: Crown,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    value: String(totals.events),
    title: "Research Records",
    icon: BookOpen,
    color: "bg-rose-100 text-rose-700",
  },
];
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black text-white">
            Civilization Archive
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Our digital archive preserves thousands of civilizations,
            archaeological sites, historical records, and priceless artifacts
            from around the world.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                key={stat.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className={`inline-flex rounded-2xl p-4 ${stat.color}`}>

                  <Icon size={32} />

                </div>

                <h3 className="mt-8 text-5xl font-black text-white">
                  {stat.value}
                </h3>

                <p className="mt-4 text-lg text-slate-400">
                  {stat.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

