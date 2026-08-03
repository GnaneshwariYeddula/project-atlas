"use client";

import { useEffect, useMemo, useState } from "react";

import TimelineFilters from "./TimelineFilters";
import TimelineGrid, { TimelineItem } from "./TimelineGrid";
import { getTimelines } from "@/services/timeline";

export default function TimelineContainer() {
  const [events, setEvents] = useState<TimelineItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    async function loadTimeline() {
      try {
        const response = await getTimelines();
        setEvents(response.data.timeline ?? []);
      } catch (error) {
        console.error(error);
      }
    }

    void loadTimeline();
  }, []);

  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return events;

    return events.filter(
      (event) =>
        event.category === activeFilter || event.period.includes(activeFilter)
    );
  }, [activeFilter, events]);

  return (
    <>
      <TimelineFilters active={activeFilter} onChange={setActiveFilter} />
      <TimelineGrid events={filteredEvents} />
    </>
  );
}
