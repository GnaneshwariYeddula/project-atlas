import {
  TrendingUp,
  Hash,
} from "lucide-react";

const topics = [
  {
    title: "Ancient Egypt",
    posts: "2.4K Posts",
  },
  {
    title: "Indus Valley",
    posts: "1.9K Posts",
  },
  {
    title: "Roman Empire",
    posts: "3.2K Posts",
  },
  {
    title: "Machu Picchu",
    posts: "860 Posts",
  },
  {
    title: "Artificial Intelligence",
    posts: "1.1K Posts",
  },
];

export default function TrendingTopics() {
  return (
    <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <TrendingUp className="text-emerald-700" />

        <h2 className="text-2xl font-black">
          Trending Topics
        </h2>

      </div>

      <div className="space-y-4">

        {topics.map((topic) => (

          <div
            key={topic.title}
            className="flex items-center justify-between rounded-2xl bg-stone-50 p-4 transition hover:bg-emerald-50"
          >

            <div className="flex items-center gap-3">

              <Hash
                size={18}
                className="text-emerald-700"
              />

              <span className="font-semibold">
                {topic.title}
              </span>

            </div>

            <span className="text-sm text-stone-500">
              {topic.posts}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}