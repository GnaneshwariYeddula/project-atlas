import TimelineHero from "@/components/timeline/TimelineHero";
import TimelineContainer from "@/components/timeline/TimelineContainer";
import TimelineStats from "@/components/timeline/TimelineStats";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-white">

      <TimelineHero />

      <TimelineContainer />

      <TimelineStats />

    </main>
  );
}
