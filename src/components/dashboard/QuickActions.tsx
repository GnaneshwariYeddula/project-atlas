import Link from "next/link";
import {
  Landmark,
  Gem,
  Bot,
  Globe2,
  Clock3,
  Search,
} from "lucide-react";

const actions = [
  {
    title: "Explore Sites",
    href: "/sites",
    icon: Landmark,
  },
  {
    title: "Browse Artifacts",
    href: "/artifacts",
    icon: Gem,
  },
  {
    title: "AI Assistant",
    href: "/ai",
    icon: Bot,
  },
  {
    title: "Civilizations",
    href: "/civilizations",
    icon: Globe2,
  },
  {
    title: "Timeline",
    href: "/timeline",
    icon: Clock3,
  },
  {
    title: "Search",
    href: "/explore",
    icon: Search,
  },
];

export default function QuickActions() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">

      <h2 className="mb-8 text-3xl font-black">
        Quick Actions
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <Link
              key={action.title}
              href={action.href}
              className="group rounded-3xl border border-stone-200 bg-white p-8 transition hover:-translate-y-2 hover:border-indigo-600 hover:shadow-xl"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">

                <Icon size={28} />

              </div>

              <h3 className="text-xl font-bold">
                {action.title}
              </h3>

            </Link>

          );

        })}

      </div>

    </section>
  );
}