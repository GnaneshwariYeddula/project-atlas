"use client";

import { Palette } from "lucide-react";

const themes = [
  ["System Default", "system"],
  ["Light Mode", "light"],
  ["Dark Mode", "dark"],
] as const;

interface AppearanceSettingsProps {
  theme: "system" | "light" | "dark";
  onChange: (theme: "system" | "light" | "dark") => void;
}

export default function AppearanceSettings({ theme, onChange }: AppearanceSettingsProps) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center gap-3">
        <Palette className="text-violet-700" />
        <h2 className="text-2xl font-black">Appearance</h2>
      </div>

      <div className="space-y-4">
        {themes.map(([label, value]) => (
          <label
            key={value}
            className="flex items-center justify-between rounded-2xl bg-stone-50 p-4"
          >
            <span>{label}</span>
            <input
              type="radio"
              name="theme"
              checked={theme === value}
              onChange={() => onChange(value)}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
