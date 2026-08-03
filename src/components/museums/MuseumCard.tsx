import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";

interface MuseumCardProps {
  name: string;
  country: string;
  image: string;
  visitors: string;
}

export default function MuseumCard({
  name,
  country,
  image,
  visitors,
}: MuseumCardProps) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-64">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-black">
          {name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-stone-500">

          <MapPin size={18} />

          {country}

        </div>

        <p className="mt-4 text-sm text-stone-500">
          Annual Visitors: {visitors}
        </p>

        <Link href={`/museums/${slug}`}>
          <Button className="mt-6">
            View Museum
            <ArrowRight
              size={18}
              className="ml-2"
            />
          </Button>
        </Link>

      </div>

    </div>
  );
}