import {
  Clock3,
  Landmark,
  Gem,
  Bot,
  Globe2,
} from "lucide-react";

const activities = [
  {
    icon: Landmark,
    title: "Visited Machu Picchu",
    date: "2 hours ago",
  },
  {
    icon: Gem,
    title: "Saved Rosetta Stone",
    date: "Yesterday",
  },
  {
    icon: Bot,
    title: "Asked AI about Ancient Egypt",
    date: "2 days ago",
  },
  {
    icon: Globe2,
    title: "Explored Roman Empire",
    date: "Last Week",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-black">
        Recent Activity
      </h2>

      <div className="space-y-6">

        {activities.map((activity) => {

          const Icon = activity.icon;

          return (

            <div
              key={activity.title}
              className="flex items-start gap-5"
            >

              <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-700">

                <Icon size={22} />

              </div>

              <div className="flex-1">

                <h3 className="font-bold">
                  {activity.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-stone-500">

                  <Clock3 size={15} />

                  {activity.date}

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}