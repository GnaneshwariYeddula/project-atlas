import Link from "next/link";
import { ArrowLeft, BookOpen, Clock3 } from "lucide-react";

interface ResearchDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ResearchDetailsPage({
  params,
}: ResearchDetailsPageProps) {
  const { id } = await params;

  const title = id
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/research"
          className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2 font-semibold text-stone-700 shadow-sm transition hover:bg-stone-100"
        >
          <ArrowLeft size={18} />
          Back to Research
        </Link>

        <section className="mt-8 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl">
          <div className="bg-slate-950 px-8 py-12 text-white sm:px-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600">
              <BookOpen size={28} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Research
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              This research record is ready to be connected
              to the Project Atlas research database.
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-3 rounded-2xl bg-stone-50 p-5 text-stone-600">
              <Clock3
                size={20}
                className="text-emerald-700"
              />

              <span className="text-sm">
                Research details and verified source
                information will appear here.
              </span>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-black text-stone-900">
                Research Overview
              </h2>

              <p className="mt-4 leading-8 text-stone-600">
                Project Atlas will use this page for
                detailed archaeological research,
                publications, findings, methodology,
                contributors, references, and related
                historical records.
              </p>
            </div>

            <Link
              href="/research"
              className="mt-8 inline-flex items-center rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Explore Research
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}