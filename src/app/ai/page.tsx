import AIHero from "@/components/ai/AIHero";
import Features from "@/components/ai/Features";
import ChatWindow from "@/components/ai/ChatWindow";
import PromptSuggestions from "@/components/ai/PromptSuggestions";
import AIStats from "@/components/ai/AIStats";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white">

      <AIHero />

      <Features />

      <ChatWindow />

      <PromptSuggestions />

      <AIStats />

    </main>
  );
}