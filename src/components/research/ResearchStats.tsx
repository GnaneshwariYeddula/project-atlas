import {
  BookOpen,
  Users,
  Globe2,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Research Papers",
    value: "25K+",
    icon: BookOpen,
  },
  {
    title: "Researchers",
    value: "8K+",
    icon: Users,
  },
  {
    title: "Countries",
    value: "120+",
    icon: Globe2,
  },
  {
    title: "Publications",
    value: "3K+",
    icon: FileText,
  },
];

export default function ResearchStats() {
  return (
    <section className="bg-slate-950 py-20 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (

            <div
              key={stat.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">

                <Icon size={30} />

              </div>

              <h3 className="text-4xl font-black">

                {stat.value}

              </h3>

              <p className="mt-2 text-slate-300">

                {stat.title}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}