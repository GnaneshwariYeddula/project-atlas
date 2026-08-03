"use client";

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const filters = [
  "All",
  "Ancient",
  "Bronze Age",
  "Iron Age",
  "Classical",
  "Medieval",
  "Empires",
  "Kingdoms",
  "Republics",
  "Nomadic",
  "Maritime",
  "UNESCO",
];

export default function CivilizationFilters({
  active,
  onChange,
}: Props) {
  return (
    <section className="bg-white py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex gap-4 overflow-x-auto pb-2">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => onChange(filter)}
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-all ${
                active === filter
                  ? "border-indigo-700 bg-indigo-700 text-white"
                  : "border-stone-200 bg-white hover:border-indigo-600"
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