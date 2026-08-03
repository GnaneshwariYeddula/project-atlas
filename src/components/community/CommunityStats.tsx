import {
  Users,
  MessageSquare,
  Globe2,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Members",
    value: "150K+",
    icon: Users,
  },
  {
    title: "Discussions",
    value: "42K+",
    icon: MessageSquare,
  },
  {
    title: "Countries",
    value: "180+",
    icon: Globe2,
  },
  {
    title: "Contributors",
    value: "8.5K+",
    icon: Trophy,
  },
];

export default function CommunityStats() {
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

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">

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