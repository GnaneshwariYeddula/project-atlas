import SiteHero from "@/components/sites/SiteHero";
import SiteContainer from "@/components/sites/SiteContainer";
import SiteMap from "@/components/sites/SiteMap";
import SiteStats from "@/components/sites/SiteStats";

export default function SitesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHero />

      <SiteContainer />

      <SiteMap />

      <SiteStats />
    </main>
  );
}