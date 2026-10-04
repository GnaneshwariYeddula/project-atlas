"use client";

import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (images.length <= 1) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [
    isOpen,
    images.length,
    onClose,
    onPrevious,
    onNext,
  ]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image gallery"
        className="
          absolute
          right-4
          top-4
          z-20
          rounded-full
          border
          border-white/20
          bg-white/10
          p-3
          text-white
          transition
          hover:bg-white/20
          focus:outline-none
          focus:ring-2
          focus:ring-white
          sm:right-6
          sm:top-6
        "
      >
        <X size={24} aria-hidden="true" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous image"
            className="
              absolute
              left-3
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              border
              border-white/20
              bg-white/10
              p-3
              text-white
              transition
              hover:bg-white/20
              focus:outline-none
              focus:ring-2
              focus:ring-white
              sm:left-6
            "
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="
              absolute
              right-3
              top-1/2
              z-20
              -translate-y-1/2
              rounded-full
              border
              border-white/20
              bg-white/10
              p-3
              text-white
              transition
              hover:bg-white/20
              focus:outline-none
              focus:ring-2
              focus:ring-white
              sm:right-6
            "
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        </>
      )}

      <div className="flex h-full items-center justify-center px-4 py-20 sm:px-10">
        <div className="relative h-full w-full max-w-7xl">
          <Image
            src={currentImage}
            alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>

      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          rounded-full
          border
          border-white/15
          bg-black/50
          px-4
          py-2
          text-sm
          font-medium
          text-white
          backdrop-blur-md
        "
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}