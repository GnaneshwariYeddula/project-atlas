import { Gem } from "lucide-react";

interface Props {
  artifacts: string[];
}

export default function SavedArtifacts({
  artifacts,
}: Props) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8">

      <h2 className="mb-6 text-2xl font-black">
        Saved Artifacts
      </h2>

      <div className="space-y-4">

        {artifacts.map((artifact) => (

          <div
            key={artifact}
            className="flex items-center gap-4 rounded-2xl bg-stone-50 p-4"
          >

            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
              <Gem size={20} />
            </div>

            <span>{artifact}</span>

          </div>

        ))}

      </div>

    </section>
  );
}