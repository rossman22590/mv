"use client";

import { useState } from "react";
import Lightbox, { type OuttakeItem } from "./Lightbox";

function MediaCard({
  item,
  index,
  onOpenLightbox,
}: {
  item: OuttakeItem;
  index: number;
  onOpenLightbox: (item: OuttakeItem) => void;
}) {
  const handleClick = () => onOpenLightbox(item);

  return (
    <figure
      className="group overflow-hidden bg-[var(--studio-black)] border border-[var(--studio-edge)] transition-all duration-300 hover:border-[var(--studio-muted)] cursor-pointer"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {item.type === "image" && (
        <button
          type="button"
          onClick={handleClick}
          className="block w-full aspect-square overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--studio-black)]"
          aria-label={`Preview ${item.name}`}
        >
          <img
            src={item.publicURL}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </button>
      )}
      {item.type === "video" && (
        <button
          type="button"
          onClick={handleClick}
          className="relative block w-full aspect-square overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--studio-black)]"
          aria-label={`Preview ${item.name}`}
        >
          <video
            src={item.publicURL}
            preload="metadata"
            className="h-full w-full object-cover pointer-events-none"
            aria-hidden
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <span className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
      {item.type === "audio" && (
        <button
          type="button"
          onClick={handleClick}
          className="block w-full aspect-square overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--studio-black)]"
          aria-label={`Preview ${item.name}`}
        >
          <div className="aspect-square flex flex-col items-center justify-center gap-4 bg-[var(--studio-black)] p-6">
            <div className="w-14 h-14 rounded-full border-2 border-[var(--studio-muted)] flex items-center justify-center">
              <span className="text-2xl text-[var(--studio-muted)]" aria-hidden>♪</span>
            </div>
            <span className="font-body text-xs text-[var(--studio-muted)]">Click to preview</span>
          </div>
        </button>
      )}
      <figcaption className="p-4 border-t border-[var(--studio-edge)] bg-[var(--studio-black)]">
        <p className="font-body text-sm text-[var(--studio-muted)] truncate" title={item.name}>
          {item.name}
        </p>
      </figcaption>
    </figure>
  );
}

function Section({
  id,
  title,
  count,
  items,
  onOpenLightbox,
}: {
  id: string;
  title: string;
  count: number;
  items: OuttakeItem[];
  onOpenLightbox: (item: OuttakeItem) => void;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <header className="mb-10 flex flex-wrap items-baseline gap-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--studio-white)]">
          {title}
        </h2>
        <span className="font-body text-sm uppercase tracking-wider text-[var(--studio-muted)]" style={{ letterSpacing: "0.2em" }}>
          {count} {count === 1 ? "item" : "items"}
        </span>
      </header>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 studio-stagger">
          {items.map((item, index) => (
            <MediaCard key={item.publicURL} item={item} index={index} onOpenLightbox={onOpenLightbox} />
          ))}
        </div>
      ) : (
        <p className="font-body text-[var(--studio-muted)] py-16">No {title.toLowerCase()} yet.</p>
      )}
    </section>
  );
}

type OuttakesGridProps = {
  stills: OuttakeItem[];
  video: OuttakeItem[];
  audio: OuttakeItem[];
};

export default function OuttakesGrid({ stills, video, audio }: OuttakesGridProps) {
  const [lightboxItem, setLightboxItem] = useState<OuttakeItem | null>(null);

  return (
    <>
      <div className="space-y-24 md:space-y-32">
        <Section id="stills" title="Stills" count={stills.length} items={stills} onOpenLightbox={setLightboxItem} />
        <Section id="video" title="Video" count={video.length} items={video} onOpenLightbox={setLightboxItem} />
        <Section id="audio" title="Audio" count={audio.length} items={audio} onOpenLightbox={setLightboxItem} />
      </div>
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
