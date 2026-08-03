"use client";

import { useEffect, useMemo, useState } from "react";

import ArtifactSearch from "./ArtifactSearch";
import ArtifactFilters from "./ArtifactFilters";
import ArtifactGrid from "./ArtifactGrid";

import { getArtifacts } from "@/services/artifact";

export interface Artifact {
  _id: string;
  name: string;
  description: string;
  type: string;
  civilization: string;
  origin: string;
  age: string;
  material: string;
  thumbnail: string;
}

export default function ArtifactContainer() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArtifacts();
  }, []);

  async function loadArtifacts() {
    try {
      const res = await getArtifacts();
      setArtifacts(res.data.artifacts || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const filteredArtifacts = useMemo(() => {
    return artifacts.filter((artifact) => {
      const matchesSearch =
        artifact.name.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || artifact.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [artifacts, search, filter]);

  return (
    <>
      <ArtifactSearch
        search={search}
        onSearchChange={setSearch}
      />

      <ArtifactFilters
        active={filter}
        onChange={setFilter}
      />

      <ArtifactGrid
        artifacts={filteredArtifacts}
        loading={loading}
      />
    </>
  );
}