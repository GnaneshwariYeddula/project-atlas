"use client";

const filters = [
  "All",
  "Sites",
  "Artifacts",
  "Civilizations",
  "Museums",
  "UNESCO",
  "Excavations",
  "Ancient Cities",
  "Temples",
  "Monuments",
];

interface FilterChipsProps {
  activeFilter: string;
  onChange: (filter: string) => void;
}

export default function FilterChips({
  activeFilter,
  onChange,
}: FilterChipsProps) {

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

          {filters.map((filter) => {

            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => onChange(filter)}
                className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "border-indigo-700 bg-indigo-700 text-white shadow-lg"
                    : "border-stone-200 bg-white text-stone-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {filter}
              </button>
            );

          })}

        </div>

      </div>
    </section>
  );
}
