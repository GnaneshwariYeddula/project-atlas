import {
  UserPlus,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function RegisterHero() {
  return (
    <div className="hidden h-full flex-col justify-center bg-gradient-to-br from-indigo-700 via-indigo-900 to-slate-950 p-12 text-white lg:flex">

      <div className="inline-flex w-fit rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

        Join Project Atlas

      </div>

      <h1 className="mt-8 text-5xl font-black leading-tight">

        Create Your
        <br />
        Explorer Account

      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-200">

        Save discoveries, bookmark archaeological sites, chat with AI,
        and build your own personalized history collection.

      </p>

      <div className="mt-12 space-y-6">

        <div className="flex items-center gap-4">

          <UserPlus className="text-white" />

          Free Forever

        </div>

        <div className="flex items-center gap-4">

          <Globe2 className="text-cyan-300" />

          Access Worldwide Content

        </div>

        <div className="flex items-center gap-4">

          <Sparkles className="text-yellow-300" />

          AI Powered Learning

        </div>

      </div>

    </div>
  );
}