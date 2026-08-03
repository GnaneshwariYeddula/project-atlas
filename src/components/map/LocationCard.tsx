import Link from "next/link";
import {
  MapPin,
  ArrowRight,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface LocationCardProps {
  name: string;
  country: string;
  type: string;
}

export default function LocationCard({
  name,
  country,
  type,
}: LocationCardProps) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700">
        {type}
      </span>

      <h3 className="mt-5 text-2xl font-black">
        {name}
      </h3>

      <div className="mt-4 flex items-center gap-2 text-stone-600">
        <MapPin size={18} />
        {country}
      </div>

      <Link href={`/sites/${slug}`}>
        <Button className="mt-8">
          View Location
          <ArrowRight
            size={18}
            className="ml-2"
          />
        </Button>
      </Link>

    </div>
  );
}