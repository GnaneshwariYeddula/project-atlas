import SettingsHero from "@/components/settings/SettingsHero";
import SettingsContainer from "@/components/settings/SettingsContainer";

export default function SettingsPage() {
  return (
    <main className="bg-stone-50">
      <SettingsHero />

      <SettingsContainer />
    </main>
  );
}
