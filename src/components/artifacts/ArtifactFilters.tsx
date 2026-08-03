"use client";

interface Props {
  active: string;
  onChange: (value: string) => void;
}

const filters = [
  "All",
  "Statues",
  "Coins",
  "Pottery",
  "Jewelry",
  "Weapons",
  "Tools",
  "Manuscripts",
  "Sculptures",
  "Masks",
  "Ceramics",
  "Gold",
  "Bronze",
  "Stone",
  "Iron",
];

export default function ArtifactFilters({
  active,
  onChange,
}: Props) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex gap-4 overflow-x-auto pb-2">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => onChange(item)}
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active === item
                  ? "border-indigo-700 bg-indigo-700 text-white shadow-lg"
                  : "border-stone-200 bg-white text-stone-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

      </div>
    </section>
  );
}