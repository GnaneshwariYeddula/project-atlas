import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const trendingSites = [
  {
    name: "Machu Picchu",
    country: "Peru",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    href: "/sites/machu-picchu",
  },
  {
    name: "Petra",
    country: "Jordan",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?q=80&w=1200&auto=format&fit=crop",
    href: "/sites/petra",
  },
  {
    name: "Chichen Itza",
    country: "Mexico",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1200&auto=format&fit=crop",
    href: "/sites/chichen-itza",
  },
  {
    name: "Colosseum",
    country: "Italy",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
    href: "/sites/colosseum",
  },
];

export interface ExploreCardItem {
  id: string;
  name: string;
  country: string;
  image: string;
  href: string;
  rating?: string;
}

interface TrendingSitesProps {
  sites?: ExploreCardItem[];
}

export default function TrendingSites({ sites }: TrendingSitesProps) {
  const displayedSites = sites ?? trendingSites.map((site) => ({
    id: site.name,
    ...site,
  }));

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Trending"
          title="Most Visited Archaeological Sites"
          subtitle="Discover the destinations attracting history lovers around the world."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {displayedSites.map((site) => (
            <Card
              key={site.id}
              className="group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {site.rating ?? "4.8"}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {site.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-stone-600">
                  <MapPin
                    size={18}
                    className="text-indigo-700"
                  />
                  {site.country}
                </div>

                <Link href={site.href}>
                  <Button className="mt-8 w-full">
                    Explore Site
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
