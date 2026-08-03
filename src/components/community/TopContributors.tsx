import {
  Trophy,
  Star,
} from "lucide-react";

const contributors = [
  {
    name: "Dr. Emily Wilson",
    points: "18,250 XP",
  },
  {
    name: "James Carter",
    points: "15,900 XP",
  },
  {
    name: "Sophia Martin",
    points: "13,600 XP",
  },
  {
    name: "Ahmed Hassan",
    points: "12,200 XP",
  },
  {
    name: "Gnaneshwari",
    points: "9,500 XP",
  },
];

export default function TopContributors() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <Trophy className="text-yellow-500" />

        <h2 className="text-2xl font-black">
          Top Contributors
        </h2>

      </div>

      <div className="space-y-4">

        {contributors.map((user, index) => (

          <div
            key={user.name}
            className="flex items-center justify-between rounded-2xl bg-stone-50 p-4 transition hover:bg-yellow-50"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-700">

                {index + 1}

              </div>

              <div>

                <h3 className="font-bold">
                  {user.name}
                </h3>

                <p className="text-sm text-stone-500">
                  {user.points}
                </p>

              </div>

            </div>

            <Star className="text-yellow-500" />

          </div>

        ))}

      </div>

    </section>
  );
}