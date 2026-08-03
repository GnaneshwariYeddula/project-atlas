"use client";

const filters = [
  "All",
  "Sites",
  "Museums",
  "Artifacts",
  "Civilizations",
  "UNESCO",
];

interface MapFiltersProps {
  active: string;
  onChange: (filter: string) => void;
}

export default function MapFilters({ active, onChange }: MapFiltersProps) {

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="flex flex-wrap gap-4">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`rounded-full px-6 py-3 font-semibold transition ${
              active === filter
                ? "bg-cyan-700 text-white"
                : "border border-stone-300 bg-white hover:border-cyan-600"
            }`}
          >
            {filter}
          </button>

        ))}

      </div>

    </section>
  );
}
