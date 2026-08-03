import {
  Globe2,
  Landmark,
  Building2,
  MapPinned,
} from "lucide-react";

interface MapStatsProps {
  sites: number;
  museums: number;
  mappedLocations: number;
}

export default function MapStats({ sites, museums, mappedLocations }: MapStatsProps) {
const stats = [
  {
    title: "Countries",
    value: "195",
    icon: Globe2,
  },
  {
    title: "Historic Sites",
    value: String(sites),
    icon: Landmark,
  },
  {
    title: "Museums",
    value: String(museums),
    icon: Building2,
  },
  {
    title: "Mapped Locations",
    value: String(mappedLocations),
    icon: MapPinned,
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

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">

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
