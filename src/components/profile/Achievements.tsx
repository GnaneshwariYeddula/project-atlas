import { Award } from "lucide-react";

const achievements = [
  "Explorer Level 10",
  "Visited 120 Historical Sites",
  "Saved 300 Artifacts",
  "Completed AI Learning Path",
  "Top Community Contributor",
];

export default function Achievements() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-black">
        Achievements
      </h2>

      <div className="space-y-4">

        {achievements.map((item) => (

          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl bg-stone-50 p-4"
          >

            <Award className="text-yellow-500" />

            <span>{item}</span>

          </div>

        ))}

      </div>

    </div>
  );
}