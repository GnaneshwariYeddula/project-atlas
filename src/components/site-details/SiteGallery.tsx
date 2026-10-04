"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, Maximize2 } from "lucide-react";

import ImageLightbox from "@/components/shared/ImageLightbox";
import { SiteDetails } from "./SiteDetailsContainer";

interface Props {
  site: SiteDetails;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1526392060635-9d6019884377";

export default function SiteGallery({
  site,
}: Props) {
  const images = (
    site.gallery.length > 0
      ? site.gallery
      : [site.thumbnail]
  ).filter(Boolean);

  const safeImages =
    images.length > 0 ? images : [FALLBACK_IMAGE];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  function openImage(index: number) {
    setSelectedIndex(index);
    setOpen(true);
  }

  function previousImage() {
    setSelectedIndex((current) =>
      current === 0
        ? safeImages.length - 1
        : current - 1
    );
  }

  function nextImage() {
    setSelectedIndex((current) =>
      current === safeImages.length - 1
        ? 0
        : current + 1
    );
  }

  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-9 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-indigo-700">
                <Images size={16} />
                Visual Archive
              </div>

              <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl">
                Photo Gallery
              </h2>
            </div>

            <span className="hidden rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-600 sm:inline-flex">
              {safeImages.length}{" "}
              {safeImages.length === 1 ? "image" : "images"}
            </span>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {safeImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => openImage(index)}
                aria-label={`Open image ${index + 1} of ${safeImages.length}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-stone-200
                  bg-stone-100
                  text-left
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  focus:ring-offset-4
                "
              >
                <div className="relative h-64 w-full overflow-hidden sm:h-72 xl:h-80">
                  <Image
                    src={image || FALLBACK_IMAGE}
                    alt={`${site.name} gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="rounded-full bg-black/45 px-3 py-1.5 text-xs font-bold backdrop-blur-md">
                      {index + 1} / {safeImages.length}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition group-hover:bg-white/25">
                      <Maximize2 size={17} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox
        images={safeImages}
        currentIndex={selectedIndex}
        isOpen={open}
        onClose={() => setOpen(false)}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </>
  );
}