import Link from "next/link";
import {
  Landmark,
  Gem,
  ScrollText,
  Globe2,
  Map,
  Building2,
  Mountain,
  BookOpen,
} from "lucide-react";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    title: "Archaeological Sites",
    description: "Discover ancient places across the world.",
    icon: Landmark,
    color: "bg-amber-100 text-amber-700",
    href: "/sites",
  },
  {
    title: "Artifacts",
    description: "Explore rare historical objects and relics.",
    icon: Gem,
    color: "bg-indigo-100 text-indigo-700",
    href: "/artifacts",
  },
  {
    title: "Civilizations",
    description: "Learn about the world's greatest civilizations.",
    icon: Globe2,
    color: "bg-emerald-100 text-emerald-700",
    href: "/civilizations",
  },
  {
    title: "Historical Documents",
    description: "Read inscriptions and ancient manuscripts.",
    icon: ScrollText,
    color: "bg-rose-100 text-rose-700",
    href: "/documents",
  },
  {
    title: "Interactive Maps",
    description: "Navigate archaeological discoveries visually.",
    icon: Map,
    color: "bg-cyan-100 text-cyan-700",
    href: "/map",
  },
  {
    title: "Museums",
    description: "Explore famous museums around the world.",
    icon: Building2,
    color: "bg-orange-100 text-orange-700",
    href: "/museums",
  },
  {
    title: "Excavation Sites",
    description: "Follow ongoing archaeological excavations.",
    icon: Mountain,
    color: "bg-lime-100 text-lime-700",
    href: "/excavations",
  },
  {
    title: "Research Library",
    description: "Access books, journals and publications.",
    icon: BookOpen,
    color: "bg-violet-100 text-violet-700",
    href: "/research",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Categories"
          title="Explore by Category"
          subtitle="Choose a category to start exploring archaeological knowledge."
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Card key={category.title}>
                <div className="p-8">
                  <div
                    className={`inline-flex rounded-2xl p-4 ${category.color}`}
                  >
                    <Icon size={34} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-stone-900">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-600">
                    {category.description}
                  </p>

                  <Link
                    href={category.href}
                    className="mt-8 inline-block font-semibold text-indigo-700 transition hover:text-indigo-900"
                  >
                    Explore →
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}