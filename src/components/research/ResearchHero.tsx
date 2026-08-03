import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";

import Button from "@/components/ui/Button";

export default function ResearchHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-slate-900 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

            <BookOpen size={18} />

            Archaeological Research

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Research Papers
            <br />
            & Publications

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-blue-100">

            Browse journals, excavation reports, conference papers,
            archaeological discoveries and academic publications.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link href="/research">
              <Button>
                Explore Research
              </Button>
            </Link>

            <Link href="/research/publications">
              <Button variant="secondary">
                View Publications
              </Button>
            </Link>

          </div>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <GraduationCap size={80} />

        </div>

      </div>

    </section>
  );
}