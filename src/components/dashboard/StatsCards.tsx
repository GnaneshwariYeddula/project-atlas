import {
  Landmark,
  Gem,
  Bot,
  Map,
} from "lucide-react";

interface Props {
  stats: {
    savedItems: number;
    artifacts: number;
    communityPosts: number;
    sites: number;
  };
}

export default function StatsCards({ stats }: Props) {
  const cards = [
    {
      title: "Saved Items",
      value: stats.savedItems,
      icon: Landmark,
    },
    {
      title: "Artifacts",
      value: stats.artifacts,
      icon: Gem,
    },
    {
      title: "Community Posts",
      value: stats.communityPosts,
      icon: Bot,
    },
    {
      title: "Archaeological Sites",
      value: stats.sites,
      icon: Map,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Icon size={28} />
              </div>

              <h3 className="text-3xl font-black text-stone-900">
                {item.value}
              </h3>

              <p className="mt-2 text-stone-600">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}