"use client";

import { Lock } from "lucide-react";

export default function SecuritySettings() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <Lock className="text-violet-700" />
        <h2 className="text-2xl font-black">Security</h2>
      </div>

      <div className="space-y-5">
        <button className="w-full rounded-xl bg-violet-700 py-3 font-semibold text-white">
          Change Password
        </button>

        <button className="w-full rounded-xl border border-violet-700 py-3 font-semibold text-violet-700">
          Enable Two-Factor Authentication
        </button>

        <button className="w-full rounded-xl border border-red-500 py-3 font-semibold text-red-600">
          Logout All Devices
        </button>
      </div>
    </section>
  );
}