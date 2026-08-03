import Link from "next/link";
import { Crown } from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const civilizations = [
  {
    name: "Ancient Egypt",
    years: "3100 BCE",
    emoji: "🛕",
  },
  {
    name: "Indus Valley",
    years: "3300 BCE",
    emoji: "🏺",
  },
  {
    name: "Roman Empire",
    years: "27 BCE",
    emoji: "🏛️",
  },
  {
    name: "Maya",
    years: "2000 BCE",
    emoji: "🌄",
  },
];

export default function Civilizations() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Civilizations"
          title="Journey Through Ancient Civilizations"
          subtitle="Learn how great civilizations shaped human history."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {civilizations.map((item) => (
            <Card key={item.name}>
              <div className="p-8 text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
                  {item.emoji}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-2 text-stone-600">
                  Since {item.years}
                </p>

                <div className="mt-6 flex justify-center">
                  <Crown
                    size={28}
                    className="text-amber-500"
                  />
                </div>

                <Link
                  href="/civilizations"
                  className="mt-8 inline-block rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Explore Civilization
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}