"use client";

import { useState } from "react";

import MuseumHero from "@/components/museums/MuseumHero";
import MuseumSearch from "@/components/museums/MuseumSearch";
import MuseumFilters from "@/components/museums/MuseumFilters";
import MuseumGrid from "@/components/museums/MuseumGrid";
import MuseumCollections from "@/components/museums/MuseumCollections";
import MuseumStats from "@/components/museums/MuseumStats";

export default function MuseumsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <main className="bg-stone-50">
      <MuseumHero />

      <MuseumSearch
        value={search}
        onChange={setSearch}
      />

      <MuseumFilters
        active={category}
        onChange={setCategory}
      />

      <MuseumGrid
        search={search}
        category={category}
      />

      <MuseumCollections />

      <MuseumStats />
    </main>
  );
}