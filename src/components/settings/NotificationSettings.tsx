"use client";

import { Bell } from "lucide-react";

const options = [
  ["Email Notifications", "email"],
  ["Push Notifications", "push"],
  ["Weekly Newsletter", "newsletter"],
  ["Research Updates", "researchUpdates"],
  ["Community Replies", "communityReplies"],
] as const;

interface NotificationSettingsProps {
  settings: Record<(typeof options)[number][1], boolean>;
  onChange: (key: (typeof options)[number][1], value: boolean) => void;
}

export default function NotificationSettings({
  settings,
  onChange,
}: NotificationSettingsProps) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <Bell className="text-violet-700" />

        <h2 className="text-2xl font-black">
          Notifications
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
