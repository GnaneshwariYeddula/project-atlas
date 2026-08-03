import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Gem, MapPin } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ArtifactCardProps {
  name: string;
  image: string;
  civilization: string;
  origin: string;
  age: string;
  material: string;
  description: string;
}

export default function ArtifactCard({
  name,
  image,
  civilization,
  origin,
  age,
  material,
  description,
}: ArtifactCardProps) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <Card className="group overflow-hidden">
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow">
          {material}
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <h2 className="text-2xl font-bold text-stone-900">
          {name}
        </h2>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-600">
          <div className="flex items-center gap-2">
            <Gem
              size={17}
              className="text-indigo-700"
            />
            {civilization}
          </div>

          <div className="flex items-center gap-2">
            <MapPin
              size={17}
              className="text-indigo-700"
            />
            {origin}
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-stone-600">
          <Calendar
            size={17}
            className="text-indigo-700"
          />
          {age}
        </div>

        <p className="mt-6 leading-7 text-stone-600">
          {description}
        </p>

        <Link href={`/artifacts/${slug}`}>
          <Button className="mt-8 w-full">
            View Details
            <ArrowRight
              className="ml-2"
              size={18}
            />
          </Button>
        </Link>
      </div>
    </Card>
  );
}