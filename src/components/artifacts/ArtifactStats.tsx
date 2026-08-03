"use client";

import { useEffect, useState } from "react";
import {
  Gem,
  Globe2,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function ArtifactStats() {
  const [totals, setTotals] = useState({ artifacts: 0, civilizations: 0, museums: 0 });

  useEffect(() => {
    import("@/services/analytics").then(({ getAnalytics }) =>
      getAnalytics().then((response) => setTotals(response.analytics?.totals ?? totals)).catch(console.error)
    );
  }, []);

const stats = [
  {
    value: String(totals.artifacts),
    title: "Artifacts",
    icon: Gem,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    value: String(totals.civilizations),
    title: "Civilizations",
    icon: Globe2,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    value: String(totals.museums),
    title: "Museums",
    icon: Building2,
    color: "bg-amber-100 text-amber-700",
  },
  {
    value: "—",
    title: "Verified Records",
    icon: ShieldCheck,
    color: "bg-rose-100 text-rose-700",
  },
];
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-white">
            Collection Statistics
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            A growing digital archive preserving archaeological heritage.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                key={stat.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2"
              >

                <div className={`inline-flex rounded-2xl p-4 ${stat.color}`}>

                  <Icon size={32} />

                </div>

                <h3 className="mt-8 text-5xl font-black text-white">
                  {stat.value}
                </h3>

                <p className="mt-4 text-slate-400">
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

