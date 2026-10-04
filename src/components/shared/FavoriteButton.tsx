"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Loader2, LogIn } from "lucide-react";
import axios from "axios";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "@/services/favorite";

interface Props {
  targetType: string;
  targetId: string;
}

interface FavoriteItem {
  _id: string;
  targetType: string;
  targetId: string;
}

export default function FavoriteButton({
  targetType,
  targetId,
}: Props) {
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [authRequired, setAuthRequired] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadFavorite() {
      setChecking(true);
      setAuthRequired(false);

      try {
        const response = await getFavorites();

        const favorite = response.favorites?.find(
          (item: FavoriteItem) =>
            item.targetType === targetType &&
            item.targetId === targetId
        );

        if (!cancelled) {
          setFavoriteId(favorite?._id ?? null);
        }
      } catch (error) {
        if (cancelled) return;

        /*
         * A 401 simply means the user is not currently
         * authenticated. This should never break the
         * Site Details page.
         */
        if (
          axios.isAxiosError(error) &&
          error.response?.status === 401
        ) {
          setFavoriteId(null);
          setAuthRequired(true);
        } else {
          /*
           * Other errors are also handled gracefully.
           * We intentionally don't throw the error because
           * Favorites are an optional feature and should
           * never prevent the entity page from rendering.
           */
          setFavoriteId(null);
        }
      } finally {
        if (!cancelled) {
          setChecking(false);
        }
      }
    }

    loadFavorite();

    return () => {
      cancelled = true;
    };
  }, [targetId, targetType]);

  async function toggleFavorite() {
    if (loading || checking) return;

    if (authRequired) {
      return;
    }

    setLoading(true);

    try {
      if (favoriteId) {
        await removeFavorite(favoriteId);
        setFavoriteId(null);
      } else {
        const response = await addFavorite(
          targetType,
          targetId
        );

        setFavoriteId(response.favorite?._id ?? null);
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response?.status === 401
      ) {
        setFavoriteId(null);
        setAuthRequired(true);
      } else {
        console.error("Failed to update favorite:", error);
      }
    } finally {
      setLoading(false);
    }
  }

  const saved = Boolean(favoriteId);
  const busy = loading || checking;

  /*
   * User is not authenticated.
   * Give them a clear path to login instead of showing
   * a broken/disabled favorite button.
   */
  if (authRequired) {
    return (
      <Link
        href="/login"
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-white/30
          bg-black/40
          px-5
          py-3
          font-semibold
          text-white
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-200
          hover:border-white/50
          hover:bg-black/60
          focus:outline-none
          focus:ring-2
          focus:ring-white/80
          focus:ring-offset-2
          focus:ring-offset-black/20
        "
      >
        <LogIn
          size={18}
          aria-hidden="true"
        />

        <span>Sign in to save</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      disabled={busy}
      aria-pressed={saved}
      aria-label={
        saved
          ? "Remove from favorites"
          : "Save to favorites"
      }
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        px-5
        py-3
        font-semibold
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-white/80
        focus:ring-offset-2
        focus:ring-offset-black/20
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${
          saved
            ? "border-red-500 bg-red-600 text-white hover:bg-red-700"
            : "border-white/30 bg-black/40 text-white hover:border-white/50 hover:bg-black/60"
        }
      `}
    >
      {busy ? (
        <Loader2
          size={18}
          className="animate-spin"
          aria-hidden="true"
        />
      ) : (
        <Heart
          size={18}
          fill={saved ? "currentColor" : "none"}
          aria-hidden="true"
        />
      )}

      <span>
        {checking
          ? "Checking..."
          : loading
            ? "Saving..."
            : saved
              ? "Saved"
              : "Save"}
      </span>
    </button>
  );
}