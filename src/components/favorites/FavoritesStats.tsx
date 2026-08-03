import {
  Heart,
  Bookmark,
  Globe2,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Heart,
    title: "Favorites",
    value: "101",
  },
  {
    icon: Bookmark,
    title: "Collections",
    value: "8",
  },
  {
    icon: Globe2,
    title: "Countries",
    value: "37",
  },
  {
    icon: Sparkles,
    title: "AI Saves",
    value: "56",
  },
];

export default function FavoritesStats() {
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

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">

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