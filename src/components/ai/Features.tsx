import {
  BrainCircuit,
  MessageSquare,
  Search,
  Sparkles,
  Languages,
  BookOpen,
} from "lucide-react";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    title: "Ask Anything",
    description:
      "Ask questions about civilizations, artifacts, historical events, timelines, and archaeological discoveries.",
    icon: MessageSquare,
  },
  {
    title: "AI-Powered Research",
    description:
      "Receive intelligent explanations with contextual historical information powered by modern AI.",
    icon: BrainCircuit,
  },
  {
    title: "Smart Search",
    description:
      "Find historical facts, monuments, artifacts, and archaeological sites instantly.",
    icon: Search,
  },
  {
    title: "Learning Assistant",
    description:
      "Generate summaries, quizzes, timelines, and study notes for students and researchers.",
    icon: BookOpen,
  },
  {
    title: "Multilingual Support",
    description:
      "Explore history in multiple languages with AI-powered translation and explanations.",
    icon: Languages,
  },
  {
    title: "Personalized Suggestions",
    description:
      "Get recommended civilizations, historical sites, and artifacts based on your interests.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="AI Features"
          title="Everything You Need to Explore History"
          subtitle="Powerful AI tools designed to make archaeology and history more interactive, engaging, and accessible."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-indigo-100 p-4 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-stone-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-stone-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}