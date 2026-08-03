import {
  MessageCircleQuestion,
  Landmark,
  Gem,
  Globe2,
  ScrollText,
  Sparkles,
} from "lucide-react";

import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";

const prompts = [
  {
    title: "Explain the Indus Valley Civilization",
    icon: Landmark,
  },
  {
    title: "Who built the Great Pyramid of Giza?",
    icon: Globe2,
  },
  {
    title: "Tell me about the Rosetta Stone",
    icon: Gem,
  },
  {
    title: "Create a timeline of Ancient Rome",
    icon: ScrollText,
  },
  {
    title: "Compare the Maya and Aztec civilizations",
    icon: Sparkles,
  },
  {
    title: "Which archaeological sites are UNESCO World Heritage Sites?",
    icon: MessageCircleQuestion,
  },
];

export default function PromptSuggestions() {
  return (
    <section className="bg-stone-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Quick Prompts"
          title="Start the Conversation"
          subtitle="Choose one of these example prompts to quickly explore history with the AI assistant."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {prompts.map((prompt) => {

            const Icon = prompt.icon;

            return (

              <Card
                key={prompt.title}
                className="group cursor-pointer rounded-3xl border border-stone-200 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-indigo-100 p-4 text-indigo-700 transition-all duration-300 group-hover:bg-indigo-700 group-hover:text-white">

                    <Icon size={28} />

                  </div>

                  <h3 className="text-lg font-bold text-stone-900">
                    {prompt.title}
                  </h3>

                </div>

                <button className="mt-8 w-full rounded-2xl bg-indigo-700 px-6 py-3 font-semibold text-white transition hover:bg-indigo-800">
                  Ask AI
                </button>

              </Card>

            );

          })}

        </div>

      </div>

    </section>
  );
}