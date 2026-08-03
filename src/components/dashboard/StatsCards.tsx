import {
  Landmark,
  Gem,
  Bot,
  BookOpen,
} from "lucide-react";

interface Props {
  stats: {
    savedSites: number;
    artifacts: number;
    aiChats: number;
    bookmarks: number;
  };
}

export default function StatsCards({
  stats,
}: Props) {
  const cards = [
    {
      title: "Saved Sites",
      value: stats.savedSites,
      icon: Landmark,
    },
    {
      title: "Artifacts",
      value: stats.artifacts,
      icon: Gem,
    },
    {
      title: "AI Chats",
      value: stats.aiChats,
      icon: Bot,
    },
    {
      title: "Bookmarks",
      value: stats.bookmarks,
      icon: BookOpen,
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

              <h3 className="text-3xl font-black">
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