import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const discoveries = [
  {
    title: "Hidden Roman Villa",
    location: "Italy",
    date: "July 2026",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
    description:
      "Archaeologists uncovered a luxurious Roman villa containing beautifully preserved mosaics.",
    href: "/discoveries/hidden-roman-villa",
  },
  {
    title: "Ancient Temple Complex",
    location: "India",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
    description:
      "A newly excavated temple complex revealed inscriptions dating back more than 1500 years.",
    href: "/discoveries/ancient-temple-complex",
  },
  {
    title: "Lost Pyramid Entrance",
    location: "Egypt",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1200&auto=format&fit=crop",
    description:
      "Researchers discovered a hidden entrance leading to unexplored chambers beneath a pyramid.",
    href: "/discoveries/lost-pyramid-entrance",
  },
];

export default function RecentDiscoveries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Latest News"
          title="Recent Archaeological Discoveries"
          subtitle="Stay updated with the newest findings from archaeological excavations around the globe."
        />

        <div className="space-y-10">
          {discoveries.map((item) => (
            <Card key={item.title}>
              <div className="grid lg:grid-cols-[350px_1fr]">
                <div className="relative h-72 lg:h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-10">
                  <div className="flex items-center gap-3 text-sm text-indigo-700">
                    <CalendarDays size={18} />

                    <span>{item.date}</span>

                    <span>•</span>

                    <span>{item.location}</span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold text-stone-900">
                    {item.title}
                  </h3>

                  <p className="mt-6 leading-8 text-stone-600">
                    {item.description}
                  </p>

                  <Link href={item.href}>
                    <Button className="mt-8 w-fit">
                      Read More
                      <ArrowRight
                        className="ml-2"
                        size={18}
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}