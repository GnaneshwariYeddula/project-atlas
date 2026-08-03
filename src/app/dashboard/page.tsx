import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardContainer from "@/components/dashboard/DashboardContainer";

export default function DashboardPage() {
  return (
    <main className="bg-stone-50">
      <DashboardHero />

      <DashboardContainer />
    </main>
  );
}