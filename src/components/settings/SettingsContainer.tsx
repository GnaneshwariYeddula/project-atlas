"use client";

import { useEffect, useState } from "react";

import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
import PrivacySettings from "./PrivacySettings";
import AppearanceSettings from "./AppearanceSettings";
import SecuritySettings from "./SecuritySettings";
import SettingsStats from "./SettingsStats";
import { getProfile, updateProfile } from "@/services/profile";
import { getNotifications } from "@/services/notification";
import { getSettings, SettingsData, updateSettings } from "@/services/settings";

const defaultSettings: SettingsData = {
  notifications: {
    email: true,
    push: true,
    newsletter: true,
    researchUpdates: true,
    communityReplies: true,
  },
  privacy: {
    publicProfile: true,
    showActivity: true,
    displayAchievements: true,
    allowMessages: true,
  },
  appearance: { theme: "system" },
};

export default function SettingsContainer() {
  const [settings, setSettings] = useState<SettingsData>(defaultSettings);
  const [profile, setProfile] = useState({ fullName: "", email: "" });
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const [settingsResponse, profileResponse, notificationsResponse] = await Promise.all([
          getSettings(),
          getProfile(),
          getNotifications(),
        ]);

        if (settingsResponse.settings) setSettings(settingsResponse.settings);
        setProfile(profileResponse.user);
        setNotificationCount(notificationsResponse.notifications?.filter((item: { isRead: boolean }) => !item.isRead).length ?? 0);
      } catch (error) {
        console.error(error);
      }
    }

    void load();
  }, []);

  async function saveSettings(nextSettings: SettingsData) {
    setSettings(nextSettings);

    try {
      const response = await updateSettings(nextSettings);
      if (response.settings) setSettings(response.settings);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-2">
        <AccountSettings
          fullName={profile.fullName}
          email={profile.email}
          onSave={async (data) => {
            const response = await updateProfile(data);
            setProfile(response.user);
          }}
        />
        <NotificationSettings
          settings={settings.notifications}
          onChange={(key, value) => void saveSettings({
            ...settings,
            notifications: { ...settings.notifications, [key]: value },
          })}
        />
        <PrivacySettings
          settings={settings.privacy}
          onChange={(key, value) => void saveSettings({
            ...settings,
            privacy: { ...settings.privacy, [key]: value },
          })}
        />
        <AppearanceSettings
          theme={settings.appearance.theme}
          onChange={(theme) => void saveSettings({
            ...settings,
            appearance: { theme },
          })}
        />
        <SecuritySettings />
      </section>
      <SettingsStats notificationCount={notificationCount} />
    </>
  );
}
