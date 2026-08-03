"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-6 py-5">
      <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
        <Link href="/">Home</Link>

        {parts.map((part, index) => {
          const href = "/" + parts.slice(0, index + 1).join("/");

          return (
            <div
              key={href}
              className="flex items-center gap-2"
            >
              <ChevronRight size={16} />

              <Link
                href={href}
                className="capitalize hover:text-emerald-700"
              >
                {part.replaceAll("-", " ")}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}