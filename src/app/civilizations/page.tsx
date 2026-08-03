import CivilizationHero from "@/components/civilizations/CivilizationHero";
import CivilizationContainer from "@/components/civilizations/CivilizationContainer";
import CivilizationTimeline from "@/components/civilizations/CivilizationTimeline";
import CivilizationStats from "@/components/civilizations/CivilizationStats";

export default function CivilizationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CivilizationHero />

      <CivilizationContainer />

      <CivilizationTimeline />

      <CivilizationStats />
    </main>
  );
}