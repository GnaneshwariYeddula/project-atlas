"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";

interface Props {
  title?: string;
}

export default function ShareButton({
  title = "Project Atlas",
}: Props) {
  const [status, setStatus] = useState<
    "idle" | "copied" | "error"
  >("idle");

  async function handleShare() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title || title,
          text: `Explore ${title} on Project Atlas.`,
          url,
        });

        setStatus("copied");
        window.setTimeout(() => {
          setStatus("idle");
        }, 1800);

        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setStatus("copied");

      window.setTimeout(() => {
        setStatus("idle");
      }, 1800);
    } catch (error) {
      console.error("Share failed:", error);
      setStatus("error");

      window.setTimeout(() => {
        setStatus("idle");
      }, 2200);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share this site"
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-indigo-400/50
        bg-indigo-600
        px-5
        py-3
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-200
        hover:bg-indigo-700
        hover:-translate-y-0.5
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-300
        focus:ring-offset-2
        focus:ring-offset-black/20
        active:translate-y-0
      "
    >
      {status === "copied" ? (
        <Check size={18} aria-hidden="true" />
      ) : (
        <Share2 size={18} aria-hidden="true" />
      )}

      <span>
        {status === "copied"
          ? "Shared"
          : status === "error"
            ? "Try Again"
            : "Share"}
      </span>

      <span className="sr-only" aria-live="polite">
        {status === "copied"
          ? "Link shared or copied."
          : status === "error"
            ? "Sharing failed."
            : ""}
      </span>
    </button>
  );
}