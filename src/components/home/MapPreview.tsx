import Link from "next/link";
import { Compass, Globe2, MapPin } from "lucide-react";

import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const locations = [
  {
    name: "Egypt",
    top: "18%",
    left: "52%",
  },
  {
    name: "India",
    top: "40%",
    left: "68%",
  },
  {
    name: "Peru",
    top: "58%",
    left: "22%",
  },
  {
    name: "Italy",
    top: "24%",
    left: "48%",
  },
];

export default function MapPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          badge="Interactive Map"
          title="Explore Archaeology Around the World"
          subtitle="Navigate continents and discover remarkable archaeological sites."
        />

        <div className="overflow-hidden rounded-[40px] border border-stone-200 bg-gradient-to-br from-sky-100 via-blue-50 to-green-100 shadow-xl">
          <div className="relative flex h-[600px] items-center justify-center">
            <Globe2
              size={220}
              className="text-blue-300"
            />

            {locations.map((item) => (
              <div
                key={item.name}
                className="absolute"
                style={{
                  top: item.top,
                  left: item.left,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-red-600 p-2 text-white shadow-lg">
                    <MapPin size={18} />
                  </div>

                  <span className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/map">
            <Button>
              <Compass className="mr-2" size={18} />
              Open Interactive Map
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}