import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedSites from "@/components/home/FeaturedSites";
import MapPreview from "@/components/home/MapPreview";
import Civilizations from "@/components/home/Civilizations";
import LatestDiscoveries from "@/components/home/LatestDiscoveries";
import AIAssistant from "@/components/home/AIAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">


      <Hero />

      <FeaturedCategories />

      <FeaturedSites />

      <MapPreview />

      <Civilizations />

      <LatestDiscoveries />

      <AIAssistant />

    </main>
  );
}