"use client";

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const filters = [
  "All",
  "History",
  "Archaeology",
  "Art",
  "Science",
  "Culture",
  "UNESCO",
];

export default function MuseumFilters({
  active,
  onChange,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10">
      <div className="flex flex-wrap gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`rounded-full px-6 py-3 font-semibold transition ${
              active === filter
                ? "bg-amber-700 text-white"
                : "border border-stone-300 bg-white hover:border-amber-600"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}