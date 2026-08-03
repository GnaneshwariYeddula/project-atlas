import ArtifactHero from "@/components/artifacts/ArtifactHero";
import ArtifactContainer from "@/components/artifacts/ArtifactContainer";
import ArtifactTimeline from "@/components/artifacts/ArtifactTimeline";
import ArtifactStats from "@/components/artifacts/ArtifactStats";

export default function ArtifactsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ArtifactHero />

      <ArtifactContainer />

      <ArtifactTimeline />

      <ArtifactStats />
    </main>
  );
}