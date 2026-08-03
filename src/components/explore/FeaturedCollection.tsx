import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const collections = [
  {
    title: "Ancient Egypt",
    description:
      "Temples, pyramids, mummies and thousands of years of fascinating history.",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1200&auto=format&fit=crop",
    items: "245 Sites",
    href: "/collections/ancient-egypt",
  },
  {
    title: "Roman Empire",
    description:
      "Explore legendary cities, monuments and engineering marvels.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
    items: "182 Sites",
    href: "/collections/roman-empire",
  },
  {
    title: "Indus Valley",
    description:
      "Discover one of the world's earliest urban civilizations.",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
    items: "98 Sites",
    href: "/collections/indus-valley",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Collections"
          title="Featured Collections"
          subtitle="Curated archaeological collections from around the world."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <Card
              key={collection.title}
              className="group overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold shadow">
                  ⭐ {collection.items}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="font-semibold text-amber-600">
                    Featured
                  </span>
                </div>

                <h3 className="text-3xl font-bold">
                  {collection.title}
                </h3>

                <p className="mt-5 leading-7 text-stone-600">
                  {collection.description}
                </p>

                <Link href={collection.href}>
                  <Button className="mt-8">
                    View Collection
                    <ArrowRight
                      className="ml-2"
                      size={18}
                    />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}