"use client";

import { useEffect, useCallback } from "react";

export type OuttakeItem = {
  name: string;
  publicURL: string;
  type: "image" | "video" | "audio";
};

type LightboxProps = {
  item: OuttakeItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: LightboxProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [item, handleEscape]);

  if (!item) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${item.name}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--studio-muted)] text-[var(--studio-white)] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close preview"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {item.type === "image" && (
          <img
            src={item.publicURL}
            alt={item.name}
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded"
          />
        )}
        {item.type === "video" && (
          <video
            src={item.publicURL}
            controls
            autoPlay
            className="max-w-full max-h-[75vh] w-full rounded bg-black"
            aria-label={item.name}
          />
        )}
        {item.type === "audio" && (
          <div className="w-full max-w-md rounded-lg border border-[var(--studio-edge)] bg-[var(--studio-black)] p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-[var(--studio-muted)] flex items-center justify-center">
              <span className="text-4xl text-[var(--studio-muted)]" aria-hidden>♪</span>
            </div>
            <audio src={item.publicURL} controls autoPlay className="w-full h-12" aria-label={item.name} />
          </div>
        )}

        <div className="mt-4 w-full max-w-2xl text-center">
          <p className="font-body text-sm text-[var(--studio-muted)] truncate" title={item.name}>
            {item.name}
          </p>
          <a
            href={item.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-body text-xs text-[var(--studio-white)]/70 hover:text-white transition-colors"
          >
            Open in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
