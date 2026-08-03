import Link from "next/link";
import { CalendarDays } from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const discoveries = [
  {
    title: "Ancient Temple Ruins",
    date: "July 2026",
    description:
      "Researchers uncovered a temple dating back over 2,000 years.",
  },
  {
    title: "Bronze Age Weapons",
    date: "June 2026",
    description:
      "A collection of rare bronze tools was discovered near an excavation site.",
  },
  {
    title: "Lost Roman Road",
    date: "May 2026",
    description:
      "Archaeologists mapped an extensive Roman transportation network.",
  },
];

export default function LatestDiscoveries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Latest"
          title="Recent Archaeological Discoveries"
          subtitle="Stay updated with remarkable findings from around the world."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {discoveries.map((item) => (
            <Card key={item.title}>
              <div className="h-56 bg-gradient-to-br from-indigo-200 to-amber-200" />

              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-indigo-700">
                  <CalendarDays size={18} />
                  {item.date}
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {item.description}
                </p>

                <Link
                  href="/research"
                  className="mt-8 inline-block rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}