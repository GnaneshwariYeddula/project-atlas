"use client";

import { useEffect, useState } from "react";
import {
  ScrollText,
  Gem,
  Crown,
  Landmark,
} from "lucide-react";

export default function MuseumCollections() {
  const [collections, setCollections] = useState<{ title: string; items: string; icon: typeof ScrollText }[]>([]);

  useEffect(() => {
    Promise.all([
      import("@/services/museum").then(({ getMuseums }) => getMuseums()),
      import("@/services/artifact").then(({ getArtifacts }) => getArtifacts()),
    ]).then(([museumsResponse, artifactsResponse]) => {
      const museums = museumsResponse.data.museums ?? [];
      const artifacts = artifactsResponse.data.artifacts ?? [];
      const byCategory = museums.reduce((count: Record<string, number>, museum: { category: string }) => {
        count[museum.category || "Museum"] = (count[museum.category || "Museum"] ?? 0) + 1;
        return count;
      }, {});

      setCollections([
        ...Object.entries(byCategory).slice(0, 3).map(([title, count], index) => ({
          title,
          items: `${count} museums`,
          icon: [ScrollText, Crown, Landmark][index],
        })),
        { title: "Historic Artifacts", items: `${artifacts.length} records`, icon: Gem },
      ]);
    }).catch(console.error);
  }, []);

  return (
 
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="mb-10 text-3xl font-black">
        Featured Collections
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {collections.map((collection) => {

          const Icon = collection.icon;

          return (

            <div
              key={collection.title}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">

                <Icon size={28} />

              </div>

              <h3 className="text-xl font-bold">
                {collection.title}
              </h3>

              <p className="mt-2 text-stone-500">
                {collection.items}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
}

