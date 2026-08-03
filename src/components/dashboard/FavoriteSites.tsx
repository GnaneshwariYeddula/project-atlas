import { Heart, MapPin } from "lucide-react";

interface Props {
  sites: string[];
}

export default function FavoriteSites({
  sites,
}: Props) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8">

      <h2 className="mb-6 text-2xl font-black">
        Favorite Sites
      </h2>

      <div className="space-y-4">

        {sites.map((site) => (

          <div
            key={site}
            className="flex items-center justify-between rounded-2xl bg-stone-50 p-4"
          >
            <div className="flex items-center gap-3">

              <MapPin
                className="text-indigo-700"
                size={20}
              />

              <span>{site}</span>

            </div>

            <Heart
              size={20}
              className="fill-red-500 text-red-500"
            />

          </div>

        ))}

      </div>

    </section>
  );
}