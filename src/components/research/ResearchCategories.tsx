import {
  ScrollText,
  BookOpen,
  Landmark,
  Globe2,
} from "lucide-react";

const categories = [
  {
    title: "Excavation Reports",
    papers: "2,450+",
    icon: ScrollText,
  },
  {
    title: "History Journals",
    papers: "8,300+",
    icon: BookOpen,
  },
  {
    title: "Museum Studies",
    papers: "1,700+",
    icon: Landmark,
  },
  {
    title: "Civilizations",
    papers: "5,600+",
    icon: Globe2,
  },
];

export default function ResearchCategories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="mb-10 text-3xl font-black">
        Popular Categories
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {categories.map((category) => {

          const Icon = category.icon;

          return (

            <div
              key={category.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">

                <Icon size={28} />

              </div>

              <h3 className="text-xl font-bold">

                {category.title}

              </h3>

              <p className="mt-2 text-stone-500">

                {category.papers}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}