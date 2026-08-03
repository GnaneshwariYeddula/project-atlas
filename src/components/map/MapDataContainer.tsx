"use client";

import { useEffect, useMemo, useState } from "react";

import MapFilters from "./MapFilters";
import InteractiveMap from "./InteractiveMap";
import LocationGrid, { MapLocation } from "./LocationGrid";
import NearbySites from "./NearbySites";
import MapStats from "./MapStats";
import { getAnalytics } from "@/services/analytics";
import { getMapData, getNearbyLocations } from "@/services/map";

interface MapData {
  museums: MapLocation[];
  artifacts: MapLocation[];
  sites: MapLocation[];
  civilizations: MapLocation[];
}

export default function MapDataContainer() {
  const [data, setData] = useState<MapData>({ museums: [], artifacts: [], sites: [], civilizations: [] });
  const [nearbySites, setNearbySites] = useState<MapLocation[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [analytics, setAnalytics] = useState<{ sites: number; museums: number } | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [mapResponse, analyticsResponse] = await Promise.all([
          getMapData(),
          getAnalytics(),
        ]);
        setData(mapResponse.data);
        setAnalytics(analyticsResponse.analytics?.totals ?? null);
        const nearbyResponse = await getNearbyLocations(0, 0);
        setNearbySites(nearbyResponse.data?.sites ?? []);
      } catch (error) {
        console.error(error);
      }
    }

    void load();
  }, []);

  const locations = useMemo(() => {
    const selected = activeFilter === "All"
      ? [...data.sites, ...data.museums, ...data.artifacts, ...data.civilizations]
      : activeFilter === "UNESCO"
        ? data.sites
        : data[activeFilter.toLowerCase() as keyof MapData] ?? [];

    return selected.filter((location) =>
      activeFilter !== "UNESCO" || location.unesco === true
    );
  }, [activeFilter, data]);

  return (
    <>
      <MapFilters active={activeFilter} onChange={setActiveFilter} />
      <InteractiveMap />
      <LocationGrid locations={locations} />
      <NearbySites sites={nearbySites} />
      <MapStats
        sites={analytics?.sites ?? data.sites.length}
        museums={analytics?.museums ?? data.museums.length}
        mappedLocations={locations.length}
      />
    </>
  );
}
