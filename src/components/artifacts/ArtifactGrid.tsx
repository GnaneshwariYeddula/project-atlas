"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ArtifactCard from "./ArtifactCard";
import { Artifact } from "./ArtifactContainer";

interface Props {
  artifacts: Artifact[];
  loading: boolean;
}

export default function ArtifactGrid({
  artifacts,
  loading,
}: Props) {
  if (loading) {
    return (
      <section className="bg-stone-50 py-24 text-center">
        Loading Artifacts...
      </section>
    );
  }

  return (
    <section className="bg-stone-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Collection"
          title="Featured Artifacts"
          subtitle="Explore remarkable archaeological treasures from civilizations across the globe."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {artifacts.map((artifact) => (

            <ArtifactCard
              key={artifact._id}
              name={artifact.name}
              image={artifact.thumbnail}
              civilization={artifact.civilization}
              origin={artifact.origin}
              age={artifact.age}
              material={artifact.material}
              description={artifact.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}