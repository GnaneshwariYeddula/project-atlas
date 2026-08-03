import LocationCard from "./LocationCard";

export interface MapLocation {
  _id: string;
  name: string;
  country: string;
  type: string;
  unesco?: boolean;
}

interface LocationGridProps {
  locations: MapLocation[];
}

export default function LocationGrid({ locations }: LocationGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <h2 className="mb-8 text-3xl font-black">
        Featured Locations
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {locations.map((location) => (

          <LocationCard
            key={location._id}
            {...location}
          />

        ))}

      </div>

    </section>
  );
}
