import { Heart, Bookmark, Sparkles } from "lucide-react";

export default function FavoritesHero() {
  return (
    <section className="bg-gradient-to-r from-rose-700 via-pink-700 to-purple-800 py-20 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 lg:flex-row">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">

            <Heart size={18} />

            My Favorites

          </div>

          <h1 className="mt-6 text-5xl font-black">

            Your Personal
            <br />
            Collection

          </h1>

          <p className="mt-5 max-w-2xl text-lg text-pink-100">

            All your bookmarked archaeological sites, civilizations,
            artifacts and AI conversations in one place.

          </p>

        </div>

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/10">

          <Bookmark size={80} />

        </div>

      </div>

    </section>
  );
}