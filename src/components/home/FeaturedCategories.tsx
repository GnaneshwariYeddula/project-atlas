import {
  Globe,
  Landmark,
  ScrollText,
  Gem,
} from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Link from "next/link";
import { routes } from "@/data/navigation";

const categories = [
  {
    title: "Sites",
    description: "Discover famous archaeological sites from around the world.",
    icon: Landmark,
    href: routes.sites,
  },
  {
    title: "Artifacts",
    description: "Browse ancient artifacts, relics, and historical objects.",
    icon: Gem,
    href: routes.artifacts,
  },
  {
    title: "Civilizations",
    description: "Learn about ancient civilizations and their cultures.",
    icon: Globe,
    href: routes.civilizations,
  },
  {
    title: "Museums",
    description: "Explore museums preserving our global heritage.",
    icon: Landmark,
    href: routes.museums,
  },
  {
    title: "Research",
    description: "Read archaeological research papers and discoveries.",
    icon: ScrollText,
    href: routes.research,
  },
  {
    title: "Timeline",
    description: "Travel through history with an interactive timeline.",
    icon: ScrollText,
    href: routes.timeline,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Explore"
          title="Everything in One Platform"
          subtitle="Choose how you'd like to begin your journey."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {categories.map((item) => {

            const Icon = item.icon;

            return (

             <Link
  key={item.title}
  href={item.href}
  className="block"
>
  <Card>

                <div className="p-8">

                  <div className="mb-6 inline-flex rounded-2xl bg-indigo-100 p-4">
                    <Icon
                      size={32}
                      className="text-indigo-700"
                    />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-600">
                    {item.description}
                  </p>

                </div>

              </Card>
</Link>

            );
          })}

        </div>

      </div>
    </section>
  );
}