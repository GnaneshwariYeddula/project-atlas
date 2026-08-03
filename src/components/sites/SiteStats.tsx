import {
  Landmark,
  Globe2,
  MapPinned,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Archaeological Sites",
    value: "1,247+",
    icon: Landmark,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Countries Covered",
    value: "96",
    icon: Globe2,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "UNESCO Heritage",
    value: "352",
    icon: Trophy,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Mapped Locations",
    value: "12K+",
    icon: MapPinned,
    color: "bg-rose-100 text-rose-700",
  },
];

export default function SiteStats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-indigo-600/20 px-5 py-2 text-sm font-semibold text-indigo-300">
            Platform Statistics
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Archaeology By Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Our platform is designed to become one of the largest digital
            collections of archaeological information in the world.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                key={stat.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-600"
              >

                <div
                  className={`inline-flex rounded-2xl p-4 ${stat.color}`}
                >
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