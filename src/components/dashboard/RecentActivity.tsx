import { Clock3 } from "lucide-react";

interface Props {
  activities: string[];
}

export default function RecentActivity({
  activities,
}: Props) {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8">

      <h2 className="mb-6 text-2xl font-black">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item) => (

          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl bg-stone-50 p-4"
          >
            <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
              <Clock3 size={20} />
            </div>

            <p>{item}</p>

          </div>

        ))}

      </div>

    </section>
  );
}