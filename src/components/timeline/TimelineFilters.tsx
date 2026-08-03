"use client";

const filters = [
  "All",
  "Prehistoric",
  "Bronze Age",
  "Iron Age",
  "Ancient",
  "Classical",
  "Medieval",
  "Renaissance",
  "Modern",
  "Wars",
  "Empires",
  "Discoveries",
  "Archaeology",
];

interface TimelineFiltersProps {
  active: string;
  onChange: (filter: string) => void;
}

export default function TimelineFilters({
  active,
  onChange,
}: TimelineFiltersProps) {

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex gap-4 overflow-x-auto pb-2">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onChange(filter)}
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active === filter
                  ? "border-indigo-700 bg-indigo-700 text-white shadow-lg"
                  : "border-stone-200 bg-white text-stone-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}
