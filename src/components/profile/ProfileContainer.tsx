"use client";

import { useEffect, useState } from "react";

import ProfileCard from "./ProfileCard";
import PersonalInfo from "./PersonalInfo";
import Achievements from "./Achievements";
import ActivityTimeline from "./ActivityTimeline";
import SettingsCard from "./SettingsCard";

import { getProfile } from "@/services/profile";
import { getFavorites } from "@/services/favorite";

export interface ProfileData {
  fullName: string;
  email: string;
  avatar: string;
  role: string;
  isVerified: boolean;
  favorites: number;
  articles: number;
  createdAt: string;
}

export default function ProfileContainer() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const [profileResponse, favoritesResponse] = await Promise.all([
        getProfile(),
        getFavorites(),
      ]);
      setProfile({
        ...profileResponse.user,
        favorites: favoritesResponse.favorites?.length ?? 0,
        articles: 0,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading || !profile) {
    return (
      <section className="py-24 text-center">
        Loading Profile...
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2">
        <ProfileCard profile={profile} />

        <PersonalInfo profile={profile} />

        <Achievements />

        <SettingsCard />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ActivityTimeline />
      </section>
    </>
  );
}
