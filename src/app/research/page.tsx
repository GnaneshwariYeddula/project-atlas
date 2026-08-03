import ResearchHero from "@/components/research/ResearchHero";
import ResearchSearch from "@/components/research/ResearchSearch";
import ResearchFilters from "@/components/research/ResearchFilters";
import ResearchGrid from "@/components/research/ResearchGrid";
import ResearchCategories from "@/components/research/ResearchCategories";
import ResearchStats from "@/components/research/ResearchStats";

export default function ResearchPage() {
  return (
    <main className="bg-stone-50">

      <ResearchHero />

      <ResearchSearch />

      <ResearchFilters />

      <ResearchGrid />

      <ResearchCategories />

      <ResearchStats />

    </main>
  );
}