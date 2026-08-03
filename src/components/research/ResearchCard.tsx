import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  User,
} from "lucide-react";

import Button from "@/components/ui/Button";

interface ResearchCardProps {
  title: string;
  author: string;
  year: string;
  category: string;
}

export default function ResearchCard({
  title,
  author,
  year,
  category,
}: ResearchCardProps) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
        {category}
      </span>

      <h3 className="mt-5 text-2xl font-black">
        {title}
      </h3>

      <div className="mt-6 flex items-center gap-3 text-stone-600">

        <User size={18} />

        {author}

      </div>

      <div className="mt-3 flex items-center gap-3 text-stone-600">

        <Calendar size={18} />

        {year}

      </div>

      <Link href={`/research/${slug}`}>
        <Button className="mt-8">

          Read Paper

          <ArrowRight
            size={18}
            className="ml-2"
          />

        </Button>
      </Link>

    </div>
  );
}