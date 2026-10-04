"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Landmark,
  UserCircle,
  LogOut,
  Compass,
  BookOpen,
  Users,
  Map,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  getCurrentUser,
  logout,
} from "@/services/auth";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    name: "Research",
    href: "/research",
    icon: BookOpen,
  },
  {
    name: "Community",
    href: "/community",
    icon: Users,
  },
  {
    name: "Map",
    href: "/map",
    icon: Map,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, [pathname]);

  function handleLogout() {
    logout();
    setUser(null);
    setOpen(false);

    router.push("/");
    router.refresh();
  }

  function closeMobileMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <Landmark
            size={27}
            strokeWidth={2.2}
            className="text-emerald-700"
          />

          <div>
            <h1 className="text-xl font-black leading-none text-stone-900">
              Atlas
            </h1>

            <p className="hidden text-xs tracking-wide text-stone-500 sm:block">
              Archaeology Platform
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => {
            const Icon = link.icon;

            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-stone-600 hover:bg-stone-50 hover:text-emerald-700"
                }`}
              >
                {Icon && <Icon size={16} />}
                {link.name}
              </Link>
            );
          })}

          <div className="ml-2 h-7 w-px bg-stone-200" />

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <UserCircle size={18} />
                Dashboard
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                <LogOut size={17} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-xl border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Create Account
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() =>
            setOpen((value) => !value)
          }
          className="rounded-xl p-2 text-stone-700 transition hover:bg-stone-100 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-stone-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 p-4">
            {links.map((link) => {
              const Icon = link.icon;

              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(
                      `${link.href}/`
                    );

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3.5 font-semibold transition ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  {Icon && <Icon size={19} />}
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-3 border-t border-stone-200 pt-4">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={closeMobileMenu}
                    className="mb-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
                  >
                    <UserCircle size={19} />
                    Dashboard
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3.5 font-semibold text-white transition hover:bg-stone-800"
                  >
                    <LogOut size={19} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="mb-2 block rounded-xl border border-emerald-700 px-4 py-3.5 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMobileMenu}
                    className="block rounded-xl bg-emerald-700 px-4 py-3.5 text-center font-semibold text-white transition hover:bg-emerald-800"
                  >
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}