import Hero from "@/components/home/Hero";
import FeaturedSites from "@/components/home/FeaturedSites";
import MapPreview from "@/components/home/MapPreview";
import Civilizations from "@/components/home/Civilizations";
import AIAssistant from "@/components/home/AIAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <FeaturedSites />

      <Civilizations />

      <MapPreview />

      <AIAssistant />
    </main>
  );
}