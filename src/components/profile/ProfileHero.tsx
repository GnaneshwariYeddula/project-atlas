"use client";

import { useEffect, useState } from "react";
import { User, BadgeCheck, MapPin, CalendarDays } from "lucide-react";
import { getProfile } from "@/services/profile";

interface Profile {
  fullName: string;
  isVerified: boolean;
  createdAt: string;
}

export default function ProfileHero() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await getProfile();
        setProfile(res.user);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  if (!profile) {
    return (
      <section className="bg-slate-950 py-20 text-center text-white">
        Loading...
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-slate-950 via-indigo-900 to-slate-900 py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-8">
          <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-white/20 bg-white/10">
            <User size={90} />
          </div>

          <div>
            {profile.isVerified && (
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold">
                <BadgeCheck size={16} />
                Verified Explorer
              </div>
            )}

            <h1 className="mt-5 text-5xl font-black">
              {profile.fullName}
            </h1>

            <p className="mt-3 text-lg text-slate-300">
              Archaeology Enthusiast • History Explorer • AI Researcher
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-slate-200">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                India
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                Joined {new Date(profile.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
