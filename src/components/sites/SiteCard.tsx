import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, MapPin, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface SiteCardProps {
  name: string;
  country: string;
  image: string;
  type: string;
  year: string;
  rating: number;
  description: string;
}

export default function SiteCard({
  name,
  country,
  image,
  type,
  year,
  rating,
  description,
}: SiteCardProps) {
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

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          {type}
        </div>

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />
          {rating}
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <h2 className="text-2xl font-bold text-stone-900">
          {name}
        </h2>

        <div className="mt-4 flex items-center gap-5 text-sm text-stone-600">
          <div className="flex items-center gap-2">
            <MapPin
              size={17}
              className="text-indigo-700"
            />
            {country}
          </div>

          <div className="flex items-center gap-2">
            <Clock3
              size={17}
              className="text-indigo-700"
            />
            {year}
          </div>
        </div>

        <p className="mt-5 leading-7 text-stone-600">
          {description}
        </p>

        <Link href={`/sites/${slug}`}>
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