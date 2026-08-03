import Link from "next/link";
import {
  CalendarDays,
  Globe2,
  Landmark,
  ArrowRight,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface TimelineCardProps {
  year: string;
  title: string;
  civilization: string;
  location: string;
  description: string;
}

export default function TimelineCard({
  year,
  title,
  civilization,
  location,
  description,
}: TimelineCardProps) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Year Badge */}

      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-6">

        <h2 className="text-4xl font-black text-white">
          {year}
        </h2>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-stone-900">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-5 text-sm text-stone-600">

          <div className="flex items-center gap-2">

            <Landmark
              size={17}
              className="text-indigo-700"
            />

            {civilization}

          </div>

          <div className="flex items-center gap-2">

            <Globe2
              size={17}
              className="text-indigo-700"
            />

            {location}

          </div>

        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-stone-600">

          <CalendarDays
            size={17}
            className="text-indigo-700"
          />

          {year}

        </div>

        <p className="mt-6 leading-7 text-stone-600">
          {description}
        </p>

        <Link href={`/timeline/${slug}`}>
          <Button className="mt-8 w-full">

            Learn More

            <ArrowRight
              size={18}
              className="ml-2"
            />

          </Button>
        </Link>

      </div>

    </Card>
  );
}