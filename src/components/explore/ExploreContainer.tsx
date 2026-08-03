"use client";

import { useState } from "react";

import ExploreHero from "./ExploreHero";
import SearchBar from "./SearchBar";
import FilterChips from "./FilterChips";
import CategoryGrid from "./CategoryGrid";
import FeaturedCollection from "./FeaturedCollection";
import TrendingSites, { ExploreCardItem } from "./TrendingSites";
import RecentDiscoveries from "./RecentDiscoveries";
import { globalSearch } from "@/services/search";

type SearchRecord = Record<string, unknown>;

const endpointByFilter: Record<string, string> = {
  Sites: "sites",
  Artifacts: "artifacts",
  Civilizations: "civilizations",
  Museums: "museums",
};

function toCardItem(type: string, item: SearchRecord): ExploreCardItem {
  const id = String(item._id ?? item.id ?? item.name);
  const location = String(
    item.country ?? item.origin ?? item.originCountry ?? item.civilization ?? ""
  );
  const image = String(item.thumbnail ?? item.image ?? "");

  return {
    id,
    name: String(item.name ?? item.title ?? "Untitled"),
    country: location,
    image: image || "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop",
    href: `/${type}/${id}`,
    rating: "4.8",
  };
}

export default function ExploreContainer() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [results, setResults] = useState<ExploreCardItem[] | undefined>();

  async function search() {
    if (!query.trim()) {
      setResults(undefined);
      return;
    }

    try {
      const response = await globalSearch(query.trim());
      const keys = activeFilter === "All"
        ? ["sites", "artifacts", "civilizations", "museums"]
        : [endpointByFilter[activeFilter]].filter(Boolean);

      const items = keys.flatMap((key) =>
        ((response.results?.[key] ?? []) as SearchRecord[]).map((item) =>
          toCardItem(key, item)
        )
      );

      setResults(items);
    } catch (error) {
      console.error(error);
      setResults([]);
    }
  }

  function changeFilter(filter: string) {
    setActiveFilter(filter);
  }

  return (
    <>
      <ExploreHero />
      <SearchBar value={query} onChange={setQuery} onSearch={search} />
      <FilterChips activeFilter={activeFilter} onChange={changeFilter} />
      <CategoryGrid />
      <FeaturedCollection />
      <TrendingSites sites={results} />
      <RecentDiscoveries />
    </>
  );
}
