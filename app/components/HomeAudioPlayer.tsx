"use client";

import { useRef, useState, useEffect } from "react";

const SONG_URL = "https://pixiomedia.nyc3.digitaloceanspaces.com/uploads/1771880532298-pixiov2song.mp3";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function HomeAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const audio = audioRef.current;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const handleTimeUpdate = () => setCurrentTime(el.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(el.duration);
      setIsReady(true);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    el.addEventListener("timeupdate", handleTimeUpdate);
    el.addEventListener("loadedmetadata", handleLoadedMetadata);
    el.addEventListener("ended", handleEnded);
    el.addEventListener("play", handlePlay);
    el.addEventListener("pause", handlePause);
    return () => {
      el.removeEventListener("timeupdate", handleTimeUpdate);
      el.removeEventListener("loadedmetadata", handleLoadedMetadata);
      el.removeEventListener("ended", handleEnded);
      el.removeEventListener("play", handlePlay);
      el.removeEventListener("pause", handlePause);
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = audioRef.current;
    if (!el || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const t = Math.max(0, Math.min(1, x)) * duration;
    el.currentTime = t;
    setCurrentTime(t);
  };

  return (
    <div
      className="group flex items-center gap-4 w-full max-w-xl rounded-lg border border-[var(--studio-edge)] bg-[var(--studio-black)] p-4 transition-colors hover:border-[var(--studio-muted)]"
      role="region"
      aria-label="Audio player: Shimmer song"
    >
      <audio ref={audioRef} src={SONG_URL} preload="metadata" aria-label="Shimmer song" />
      <button
        type="button"
        onClick={togglePlay}
        className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[var(--studio-white)] flex items-center justify-center hover:bg-[var(--studio-white)] hover:text-[var(--studio-black)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--studio-black)]"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <p className="font-body text-sm font-medium text-[var(--studio-white)] truncate">pixiov2song</p>
        <div
          className="mt-2 h-1.5 w-full rounded-full bg-[var(--studio-edge)] cursor-pointer relative"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          aria-label="Seek"
          tabIndex={0}
          onClick={handleSeek}
          onKeyDown={(e) => {
            const el = audioRef.current;
            if (!el || !duration) return;
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              e.preventDefault();
              const step = e.key === "ArrowLeft" ? -5 : 5;
              el.currentTime = Math.max(0, Math.min(duration, el.currentTime + step));
            }
          }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-[var(--studio-white)] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 w-3 h-3 rounded-full bg-[var(--studio-white)] -translate-y-1/2 transition-all duration-150 pointer-events-none"
            style={{ left: `clamp(0px, calc(${progress}% - 6px), calc(100% - 12px))` }}
          />
        </div>
      </div>
      <div className="flex-shrink-0 font-body text-xs tabular-nums text-[var(--studio-muted)]">
        {isReady ? `${formatTime(currentTime)} / ${formatTime(duration)}` : "—"}
      </div>
    </div>
  );
}
