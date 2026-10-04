"use client";

import { useEffect, useState } from "react";

import StatsCards from "./StatsCards";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import FavoriteSites from "./FavoriteSites";
import SavedArtifacts from "./SavedArtifacts";
import AIHistory from "./AIHistory";

import {
  DashboardData,
  getDashboardStats,
} from "@/services/dashboard";

export default function DashboardContainer() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      setError("");

      const response = await getDashboardStats();

      setDashboard(response.dashboard);
    } catch (err) {
      console.error("Dashboard loading error:", err);

      setError(
        "Unable to load your dashboard. Please sign in again and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="mx-auto max-w-md rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-200 border-t-emerald-700" />

          <h2 className="mt-6 text-xl font-bold text-stone-900">
            Loading your dashboard
          </h2>

          <p className="mt-2 text-sm text-stone-500">
            Fetching your Atlas activity and discovery statistics.
          </p>
        </div>
      </section>
    );
  }

  if (error || !dashboard) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-lg rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
          <h2 className="text-xl font-bold text-red-800">
            Dashboard unavailable
          </h2>

          <p className="mt-3 text-sm text-red-700">
            {error || "Unable to retrieve dashboard information."}
          </p>

          <button
            type="button"
            onClick={() => {
              setLoading(true);
              void loadDashboard();
            }}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <StatsCards
  stats={{
    savedItems: dashboard.totalFavorites,
    artifacts: dashboard.totalArtifacts,
    communityPosts: dashboard.totalCommunityPosts,
    sites: dashboard.totalSites,
  }}
/>

      <QuickActions />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2">
        <RecentActivity
          activities={[
            `You have ${dashboard.totalFavorites} saved item${
              dashboard.totalFavorites === 1 ? "" : "s"
            }.`,
            `You have created ${dashboard.totalCommunityPosts} community post${
              dashboard.totalCommunityPosts === 1 ? "" : "s"
            }.`,
            `Atlas currently contains ${dashboard.totalSites} archaeological sites.`,
          ]}
        />

        <FavoriteSites
          sites={[
            `Saved Favorites : ${dashboard.totalFavorites}`,
            `Available Sites : ${dashboard.totalSites}`,
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