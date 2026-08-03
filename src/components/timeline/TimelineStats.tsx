import {
  Clock3,
  Globe2,
  Landmark,
  ScrollText,
} from "lucide-react";

const stats = [
  {
    value: "7,000+",
    title: "Years Covered",
    icon: Clock3,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    value: "5,000+",
    title: "Historical Events",
    icon: ScrollText,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    value: "120+",
    title: "Civilizations",
    icon: Globe2,
    color: "bg-amber-100 text-amber-700",
  },
  {
    value: "4,500+",
    title: "Archaeological Sites",
    icon: Landmark,
    color: "bg-rose-100 text-rose-700",
  },
];

export default function TimelineStats() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black text-white">
            Timeline Statistics
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Journey across thousands of years of human civilization,
            archaeological discoveries, and historical milestones.
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
