"use client";

import { useEffect, useState } from "react";

import StatsCards from "./StatsCards";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import FavoriteSites from "./FavoriteSites";
import SavedArtifacts from "./SavedArtifacts";
import AIHistory from "./AIHistory";

import { getDashboardStats } from "@/services/dashboard";

export default function DashboardContainer() {
  const [dashboard, setDashboard] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const res = await getDashboardStats();

      setDashboard(res.dashboard);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading || !dashboard) {
    return (
      <section className="py-24 text-center text-xl">
        Loading Dashboard...
      </section>
    );
  }

  return (
    <>
      <StatsCards
        stats={{
          savedSites: dashboard.totalSites,
          artifacts: dashboard.totalArtifacts,
          aiChats: dashboard.totalCommunityPosts,
          bookmarks: dashboard.totalFavorites,
        }}
      />

      <QuickActions />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2">

        <RecentActivity
          activities={[
            "Dashboard Loaded",
            "Connected to Backend",
            "MongoDB Connected",
          ]}
        />

        <FavoriteSites
          sites={[
            `Total Museums : ${dashboard.totalMuseums}`,
            `Total Sites : ${dashboard.totalSites}`,
          ]}
        />

        <SavedArtifacts
          artifacts={[
            `Artifacts : ${dashboard.totalArtifacts}`,
            `Civilizations : ${dashboard.totalCivilizations}`,
          ]}
        />

        <AIHistory
          chats={[
            `Historical Figures : ${dashboard.totalHistoricalFigures}`,
            `Historical Events : ${dashboard.totalHistoricalEvents}`,
          ]}
        />

      </section>
    </>
  );
}