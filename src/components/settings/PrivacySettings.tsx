"use client";

import { Shield } from "lucide-react";

const options = [
  ["Public Profile", "publicProfile"],
  ["Show Activity", "showActivity"],
  ["Display Achievements", "displayAchievements"],
  ["Allow Community Messages", "allowMessages"],
] as const;

interface PrivacySettingsProps {
  settings: Record<(typeof options)[number][1], boolean>;
  onChange: (key: (typeof options)[number][1], value: boolean) => void;
}

export default function PrivacySettings({ settings, onChange }: PrivacySettingsProps) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <Shield className="text-violet-700" />

        <h2 className="text-2xl font-black">
          Privacy
        </h2>

      </div>

      <div className="space-y-5">

        {options.map(([label, key]) => (

          <label
            key={key}
            className="flex items-center justify-between rounded-2xl bg-stone-50 p-4"
          >

            <span>{label}</span>

            <input
              type="checkbox"
              checked={settings[key]}
              onChange={(event) => onChange(key, event.target.checked)}
            />

          </label>

        ))}

      </div>

    </section>
  );
}
