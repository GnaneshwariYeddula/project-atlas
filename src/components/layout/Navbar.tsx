"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Landmark } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Sites", href: "/sites" },
  { name: "Artifacts", href: "/artifacts" },
  { name: "Civilizations", href: "/civilizations" },
  { name: "Museums", href: "/museums" },
  { name: "Timeline", href: "/timeline" },
  { name: "Research", href: "/research" },
  { name: "Community", href: "/community" },
  { name: "Map", href: "/map" },
  { name: "AI", href: "/ai" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
      <Link
  href="/"
  className="flex items-center gap-2"
>
  <Landmark
    size={26}
    strokeWidth={2.2}
    className="text-emerald-700"
  />

  <div>
    <h1 className="text-xl font-black leading-none text-stone-900">
      Atlas
    </h1>

    <p className="text-xs tracking-wide text-stone-500">
      Archaeology Platform
    </p>
  </div>
</Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                pathname === link.href
                  ? "text-emerald-700"
                  : "text-stone-600 hover:text-emerald-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/dashboard"
            className="rounded-xl bg-emerald-700 px-4 py-2 font-semibold text-white"
          >
            Dashboard
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 hover:bg-stone-100"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/dashboard"
              className="mt-2 rounded-xl bg-emerald-700 px-4 py-3 text-center font-semibold text-white"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}