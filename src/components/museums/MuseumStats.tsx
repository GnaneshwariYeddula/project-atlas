"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Users,
  Globe2,
  Gem,
} from "lucide-react";

export default function MuseumStats() {
  const [totals, setTotals] = useState({ museums: 0, artifacts: 0 });

  useEffect(() => {
    import("@/services/analytics").then(({ getAnalytics }) =>
      getAnalytics().then((response) => setTotals(response.analytics?.totals ?? totals)).catch(console.error)
    );
  }, []);

const stats = [
  {
    title: "Museums",
    value: String(totals.museums),
    icon: Building2,
  },
  {
    title: "Visitors",
    value: "—",
    icon: Users,
  },
  {
    title: "Countries",
    value: "—",
    icon: Globe2,
  },
  {
    title: "Artifacts",
    value: String(totals.artifacts),
    icon: Gem,
  },
];
  return (
    <section className="bg-slate-950 py-20 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (

            <div
              key={stat.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">

                <Icon size={30} />

              </div>

              <h3 className="text-4xl font-black">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-300">
                {stat.title}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}
