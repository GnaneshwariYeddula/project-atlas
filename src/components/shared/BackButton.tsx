"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/sites");
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back"
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-white/25
        bg-black/35
        px-5
        py-3
        font-semibold
        text-white
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-200
        hover:border-white/40
        hover:bg-black/55
        hover:-translate-y-0.5
        focus:outline-none
        focus:ring-2
        focus:ring-white/80
        focus:ring-offset-2
        focus:ring-offset-black/20
        active:translate-y-0
      "
    >
      <ArrowLeft size={18} aria-hidden="true" />
      <span>Back to Sites</span>
    </button>
  );
}