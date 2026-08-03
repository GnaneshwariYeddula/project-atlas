"use client";

import FavoriteCard from "./FavoriteCard";

export interface FavoriteItem {
  _id: string;
  targetType: string;
  title: string;
  location: string;
  image: string;
}

interface Props {
  favorites: FavoriteItem[];
  loading: boolean;
}

export default function FavoriteGrid({
  favorites,
  loading,
}: Props) {
  if (loading) {
    return (
      <section className="py-24 text-center">
        Loading Favorites...
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {favorites.map((item) => (
          <FavoriteCard
            key={item._id}
            title={item.title}
            category={item.targetType}
            location={item.location}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}