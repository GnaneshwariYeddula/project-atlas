import SectionTitle from "@/components/ui/SectionTitle";
import TimelineCard from "./TimelineCard";

export interface TimelineItem {
  _id: string;
  title: string;
  description: string;
  period: string;
  startYear: number;
  civilization: string;
  category: string;
}

interface TimelineGridProps {
  events: TimelineItem[];
}

export default function TimelineGrid({ events }: TimelineGridProps) {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Historical Events"
          title="Explore the History Timeline"
          subtitle="Browse significant events that shaped civilizations and changed the course of human history."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {events.map((event) => (
            <TimelineCard
              key={event._id}
              year={event.period || String(event.startYear)}
              title={event.title}
              civilization={event.civilization}
              location={event.category}
              description={event.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
