"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Item {
  label: string;
  href?: string;
}

interface Props {
  items: Item[];
  dark?: boolean;
}

export default function Breadcrumbs({
  items,
  dark = false,
}: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`
        flex
        max-w-full
        flex-wrap
        items-center
        gap-1.5
        text-sm
        ${
          dark
            ? "text-white/75"
            : "text-stone-500"
        }
      `}
    >
      {items.map((item, index) => (
        <div
          key={`${item.label}-${index}`}
          className="flex min-w-0 items-center gap-1.5"
        >
          {item.href ? (
            <Link
              href={item.href}
              className={`
                max-w-[180px]
                truncate
                rounded-md
                px-1.5
                py-1
                font-medium
                transition
                focus:outline-none
                focus:ring-2
                ${
                  dark
                    ? "hover:bg-white/10 hover:text-white focus:ring-white/70"
                    : "hover:bg-stone-100 hover:text-indigo-600 focus:ring-indigo-500"
                }
              `}
            >
              {item.label}
            </Link>
          ) : (
            <span
              aria-current="page"
              className={`
                max-w-[220px]
                truncate
                rounded-md
                px-1.5
                py-1
                font-semibold
                ${
                  dark
                    ? "bg-white/10 text-white"
                    : "text-stone-800"
                }
              `}
            >
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <ChevronRight
              size={15}
              className={dark ? "text-white/50" : "text-stone-400"}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </nav>
  );
}