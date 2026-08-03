import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="space-y-4">

      <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-stone-300 py-3 font-semibold transition hover:bg-stone-100">

        <FcGoogle size={22} />

        Continue with Google

      </button>

      <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-stone-300 py-3 font-semibold transition hover:bg-stone-100">

        <FaGithub size={22} />

        Continue with GitHub

      </button>

      <div className="flex items-center gap-4">

        <div className="h-px flex-1 bg-stone-300" />

        <span className="text-sm text-stone-500">
          OR
        </span>

        <div className="h-px flex-1 bg-stone-300" />

      </div>

    </div>
  );
}