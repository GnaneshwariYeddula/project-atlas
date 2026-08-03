import {
  Bot,
  Landmark,
  Globe2,
  Gem,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Landmark,
    title: "Explore Archaeological Sites",
  },
  {
    icon: Globe2,
    title: "Discover Ancient Civilizations",
  },
  {
    icon: Gem,
    title: "Browse Thousands of Artifacts",
  },
  {
    icon: Bot,
    title: "AI Archaeology Assistant",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Account",
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
  },
];

export default function AuthFeatures() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">

      {features.map((feature) => {

        const Icon = feature.icon;

        return (

          <div
            key={feature.title}
            className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4"
          >

            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">

              <Icon size={22} />

            </div>

            <span className="font-medium text-stone-700">
              {feature.title}
            </span>

          </div>

        );

      })}

    </div>
  );
}