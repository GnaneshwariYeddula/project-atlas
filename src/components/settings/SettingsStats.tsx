import {
  Shield,
  Bell,
  User,
  Lock,
} from "lucide-react";

interface SettingsStatsProps {
  notificationCount: number;
}

export default function SettingsStats({ notificationCount }: SettingsStatsProps) {
const stats = [
  { title: "Security Score", value: "96%", icon: Shield },
  { title: "Notifications", value: String(notificationCount), icon: Bell },
  { title: "Profile Complete", value: "100%", icon: User },
  { title: "2FA Status", value: "Off", icon: Lock },
];
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                <Icon size={30} />
              </div>

              <h3 className="text-4xl font-black">{stat.value}</h3>

              <p className="mt-2 text-slate-300">{stat.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
