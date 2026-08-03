import Image from "next/image";
import { Heart, MapPin, ArrowRight } from "lucide-react";

interface FavoriteCardProps {
  title: string;
  category: string;
  location: string;
  image: string;
}

export default function FavoriteCard({
  title,
  category,
  location,
  image,
}: FavoriteCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="relative h-60">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <div className="mb-3 flex items-center justify-between">

          <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
            {category}
          </span>

          <Heart
            size={20}
            className="fill-red-500 text-red-500"
          />

        </div>

        <h3 className="text-2xl font-black">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-stone-500">

          <MapPin size={18} />

          {location}

        </div>

        <button className="mt-6 flex items-center gap-2 font-semibold text-pink-700">

          View Details

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}