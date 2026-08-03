import {
  Settings,
  Shield,
  Bell,
} from "lucide-react";

export default function SettingsHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-violet-900 to-slate-900 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

            <Settings size={18} />

            Account Settings

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Manage Your
            <br />
            Preferences

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-violet-100">

            Customize your Project Atlas experience with account,
            privacy, security, notifications, and appearance settings.

          </p>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <Shield size={80} />

        </div>

      </div>

    </section>
  );
}