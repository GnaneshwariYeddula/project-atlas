import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const sites = [
  {
    name: "Machu Picchu",
    country: "Peru",
    color: "from-green-300 to-green-600",
  },
  {
    name: "Petra",
    country: "Jordan",
    color: "from-orange-300 to-orange-600",
  },
  {
    name: "Mohenjo-daro",
    country: "Pakistan",
    color: "from-amber-300 to-yellow-600",
  },
];

export default function FeaturedSites() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Featured"
          title="World Famous Archaeological Sites"
          subtitle="Explore the world's most iconic archaeological wonders."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {sites.map((site) => (
            <Card key={site.name}>
              <div
                className={`flex h-72 items-center justify-center bg-gradient-to-br ${site.color}`}
              >
                <span className="text-8xl">🏛️</span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold">
                  {site.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-stone-600">
                  <MapPin size={18} />
                  {site.country}
                </div>

                <Link href="/sites">
                  <Button className="mt-8">
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