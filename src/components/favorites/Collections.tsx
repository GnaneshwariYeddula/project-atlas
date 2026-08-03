import {
  FolderHeart,
  Landmark,
  Gem,
  Globe2,
  Bot,
} from "lucide-react";

const collections = [
  {
    title: "Historical Sites",
    count: 18,
    icon: Landmark,
  },
  {
    title: "Artifacts",
    count: 42,
    icon: Gem,
  },
  {
    title: "Civilizations",
    count: 16,
    icon: Globe2,
  },
  {
    title: "AI Bookmarks",
    count: 25,
    icon: Bot,
  },
];

export default function Collections() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-10 flex items-center gap-3">

        <FolderHeart className="text-pink-700" size={32} />

        <h2 className="text-3xl font-black">
          Collections
        </h2>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {collections.map((collection) => {

          const Icon = collection.icon;

          return (

            <div
              key={collection.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-700">

                <Icon size={28} />

              </div>

              <h3 className="text-xl font-bold">

                {collection.title}

              </h3>

              <p className="mt-2 text-stone-500">

                {collection.count} Items

              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}