import CommunityHero from "@/components/community/CommunityHero";
import CommunityContainer from "@/components/community/CommunityContainer";
import TrendingTopics from "@/components/community/TrendingTopics";
import TopContributors from "@/components/community/TopContributors";
import CommunityStats from "@/components/community/CommunityStats";

export default function CommunityPage() {
  return (
    <main className="bg-stone-50">

      <CommunityHero />

      <CommunityContainer />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-2">

        <TrendingTopics />

        <TopContributors />

      </section>

      <CommunityStats />

    </main>
  );
}
