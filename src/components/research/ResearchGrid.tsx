"use client";

import { useEffect, useState } from "react";
import ResearchCard from "./ResearchCard";

export default function ResearchGrid() {
  const [papers, setPapers] = useState<{ id: string; title: string; author: string; year: string; category: string }[]>([]);

  useEffect(() => {
    Promise.all([
      import("@/services/historicalEvent").then(({ getHistoricalEvents }) => getHistoricalEvents()),
      import("@/services/historicalFigure").then(({ getHistoricalFigures }) => getHistoricalFigures()),
    ]).then(([eventsResponse, figuresResponse]) => {
      const events = (eventsResponse.data.historicalEvents ?? []).map((event: {
        _id: string; name: string; category: string; eventYear: number;
      }) => ({
        id: event._id,
        title: event.name,
        author: "Historical Event",
        year: String(event.eventYear),
        category: event.category,
      }));
      const figures = (figuresResponse.data.figures ?? []).map((figure: {
        _id: string; name: string; role: string; birthYear: number;
      }) => ({
        id: figure._id,
        title: figure.name,
        author: figure.role,
        year: figure.birthYear ? String(figure.birthYear) : "Unknown",
        category: "Historical Figure",
      }));
      setPapers([...events, ...figures]);
    }).catch(console.error);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {papers.map((paper) => (

          <ResearchCard
            key={paper.id}
            title={paper.title}
            author={paper.author}
            year={paper.year}
            category={paper.category}
          />

        ))}

      </div>

    </section>
  );
}
