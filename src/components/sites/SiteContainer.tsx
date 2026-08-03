"use client";

import { useEffect, useMemo, useState } from "react";

import SiteSearch from "./SiteSearch";
import SiteFilters from "./SiteFilters";
import SiteGrid from "./SiteGrid";

import { getSites } from "@/services/site";

export interface Site {
  _id: string;
  name: string;
  country: string;
  type: string;
  age: string;
  description: string;
  thumbnail: string;
  featured: boolean;
}

export default function SiteContainer() {
  const [sites, setSites] = useState<Site[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSites();
  }, []);

  async function loadSites() {
    try {
      const res = await getSites();
      setSites(res.data.sites || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filteredSites = useMemo(() => {
    return sites.filter((site) => {
      const matchesSearch = site.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || site.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [sites, search, filter]);

  return (
    <>
      <SiteSearch
        search={search}
        onSearchChange={setSearch}
      />

      <SiteFilters
        active={filter}
        onChange={setFilter}
      />

      <SiteGrid
        sites={filteredSites}
        loading={loading}
      />
    </>
  );
}