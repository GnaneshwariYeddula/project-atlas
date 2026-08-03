"use client";

import { useState } from "react";

const filters = [
  "All",
  "Excavation",
  "History",
  "Ancient",
  "Civilizations",
  "Museums",
  "Artifacts",
];

export default function ResearchFilters() {
  const [active, setActive] = useState("All");

  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">

      <div className="flex flex-wrap gap-4">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full px-6 py-3 font-semibold transition ${
              active === filter
                ? "bg-blue-700 text-white"
                : "border border-stone-300 bg-white hover:border-blue-600"
            }`}
          >
            {filter}
          </button>

        ))}

      </div>

    </section>
  );
}