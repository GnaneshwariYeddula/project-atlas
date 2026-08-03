import { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">

        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

          {/* Left */}

          <div className="hidden flex-col justify-center bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-12 text-white lg:flex">

            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold w-fit">
              PROJECT ATLAS
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight">
              Explore History
              <br />
              Like Never Before
            </h1>

            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Discover civilizations, archaeological sites, artifacts,
              timelines, AI-powered research, and much more with one account.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">
                ✅ Access exclusive content
              </div>

              <div className="flex items-center gap-4">
                ✅ Save favorite discoveries
              </div>

              <div className="flex items-center gap-4">
                ✅ AI Archaeology Assistant
              </div>

              <div className="flex items-center gap-4">
                ✅ Personalized Dashboard
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex items-center justify-center p-10">

            <div className="w-full max-w-md">

              <h2 className="text-4xl font-black text-slate-900">
                {title}
              </h2>

              <p className="mt-3 text-stone-600">
                {subtitle}
              </p>

              <div className="mt-8">
                {children}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}