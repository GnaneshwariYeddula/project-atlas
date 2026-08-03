import { Users, MessageSquare, Globe2 } from "lucide-react";

export default function CommunityHero() {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-emerald-900 to-slate-900 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

            <Users size={18} />

            Community

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Connect With
            <br />
            History Lovers

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-emerald-100">

            Join discussions, ask questions, share discoveries,
            and collaborate with archaeologists, researchers,
            students and enthusiasts from around the world.

          </p>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <MessageSquare size={80} />

        </div>

      </div>

    </section>
  );
}