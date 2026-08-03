import {
  Bell,
  Shield,
  Lock,
  UserCog,
  ChevronRight,
} from "lucide-react";

const settings = [
  {
    icon: UserCog,
    title: "Edit Profile",
  },
  {
    icon: Bell,
    title: "Notifications",
  },
  {
    icon: Shield,
    title: "Privacy",
  },
  {
    icon: Lock,
    title: "Security",
  },
];

export default function SettingsCard() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-black">
        Account Settings
      </h2>

      <div className="space-y-4">

        {settings.map((setting) => {

          const Icon = setting.icon;

          return (

            <button
              key={setting.title}
              className="flex w-full items-center justify-between rounded-2xl border border-stone-200 p-5 transition hover:border-indigo-600 hover:bg-indigo-50"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">

                  <Icon size={20} />

                </div>

                <span className="font-medium">
                  {setting.title}
                </span>

              </div>

              <ChevronRight />

            </button>

          );

        })}

      </div>

    </div>
  );
}