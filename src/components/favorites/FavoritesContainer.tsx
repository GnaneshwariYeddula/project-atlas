"use client";

import { useEffect, useMemo, useState } from "react";

import Collections from "./Collections";
import FavoriteFilters from "./FavoriteFilters";
import FavoriteGrid, { FavoriteItem } from "./FavoriteGrid";
import FavoritesStats from "./FavoritesStats";

import { getFavorites } from "@/services/favorite";

interface FavoriteResponse {
  _id: string;
  targetType: string;
  target: {
    name?: string;
    title?: string;
    country?: string;
    origin?: string;
    originCountry?: string;
    thumbnail?: string;
  } | null;
}

export default function FavoritesContainer() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const response = await getFavorites();
      setFavorites((response.favorites ?? [])
        .filter((favorite: FavoriteResponse) => favorite.target)
        .map((favorite: FavoriteResponse) => ({
          _id: favorite._id,
          targetType: favorite.targetType,
          title: favorite.target?.name ?? favorite.target?.title ?? "Untitled",
          location: favorite.target?.country ?? favorite.target?.origin ?? favorite.target?.originCountry ?? "",
          image: favorite.target?.thumbnail ?? "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
        })));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filtered = useMemo(() => {
    if (active === "All") return favorites;

    return favorites.filter(
      (item) =>
        item.targetType.toLowerCase() ===
        active.toLowerCase().slice(0, -1)
    );
  }, [favorites, active]);

  return (
    <>
      <FavoriteFilters
        active={active}
        onChange={setActive}
      />

      <FavoriteGrid
        favorites={filtered}
        loading={loading}
      />

      <Collections />

      <FavoritesStats />
    </>
  );
}
