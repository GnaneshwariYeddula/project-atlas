"use client";

import { useEffect, useMemo, useState } from "react";

import CivilizationSearch from "./CivilizationSearch";
import CivilizationFilters from "./CivilizationFilters";
import CivilizationGrid from "./CivilizationGrid";

import { getCivilizations } from "@/services/civilization";

export interface Civilization {
  _id: string;
  name: string;
  region: string;
  period: string;
  capital: string;
  description: string;
  thumbnail: string;
}

export default function CivilizationContainer() {
  const [civilizations, setCivilizations] = useState<Civilization[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCivilizations();
  }, []);

  async function loadCivilizations() {
    try {
      const res = await getCivilizations();
      setCivilizations(res.data.civilizations || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filteredCivilizations = useMemo(() => {
    return civilizations.filter((civilization) => {
      const matchesSearch = civilization.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        civilization.period.includes(filter);

      return matchesSearch && matchesFilter;
    });
  }, [civilizations, search, filter]);

  return (
    <>
      <CivilizationSearch
        search={search}
        onSearchChange={setSearch}
      />

      <CivilizationFilters
        active={filter}
        onChange={setFilter}
      />

      <CivilizationGrid
        civilizations={filteredCivilizations}
        loading={loading}
      />
    </>
  );
}