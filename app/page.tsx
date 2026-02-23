import Link from "next/link";
import HomeAudioPlayer from "./components/HomeAudioPlayer";

const VIDEO_URL = "https://pixiomedia.nyc3.digitaloceanspaces.com/uploads/1771885853233-FINAL%20NICK_iris3.mp4";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16">
        <p
          className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] mb-6"
          style={{ letterSpacing: "0.2em" }}
        >
          Music video ·{" "}
          <a
            href="https://pixio.myapps.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--studio-white)] transition-colors"
          >
            Pixio AI
          </a>
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--studio-white)] leading-[0.95]">
          SHIMMER
        </h1>
        <p className="mt-6 font-body text-[var(--studio-muted)] text-lg max-w-xl">
          Watch the video. Listen to the song. Then dive into outtakes and bloopers.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/outtakes-bloopers"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-[var(--studio-black)] bg-[var(--studio-white)] px-8 py-4 font-medium hover:bg-[var(--studio-highlight)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--studio-white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--studio-black)]"
            aria-label="View outtakes and bloopers"
            style={{ letterSpacing: "0.18em" }}
          >
            View outtakes & bloopers
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/lyrics"
            className="inline-flex items-center font-body text-sm uppercase tracking-wider text-[var(--studio-muted)] border border-[var(--studio-muted)] px-6 py-4 hover:text-[var(--studio-white)] hover:border-[var(--studio-white)] transition-colors"
            aria-label="Lyrics"
            style={{ letterSpacing: "0.18em" }}
          >
            Lyrics
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center font-body text-sm uppercase tracking-wider text-[var(--studio-muted)] border border-[var(--studio-muted)] px-6 py-4 hover:text-[var(--studio-white)] hover:border-[var(--studio-white)] transition-colors"
            aria-label="How we made it: process and prompts"
            style={{ letterSpacing: "0.18em" }}
          >
            Process
          </Link>
        </div>

        {/* Video player */}
        <section className="mt-12" aria-label="Music video">
          <div className="rounded-lg overflow-hidden border border-[var(--studio-edge)] bg-[var(--studio-black)] max-w-4xl">
            <video
              src={VIDEO_URL}
              controls
              preload="metadata"
              className="home-video"
              aria-label="Shimmer music video"
            />
            <p className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] px-4 py-3 border-t border-[var(--studio-edge)]" style={{ letterSpacing: "0.15em" }}>
              Shimmer · Music video
            </p>
          </div>
        </section>

        {/* Audio player */}
        <section className="mt-8" aria-label="Song">
          <p className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] mb-3" style={{ letterSpacing: "0.15em" }}>
            Listen
          </p>
          <HomeAudioPlayer />
        </section>

      </div>

      <footer className="px-6 sm:px-10 md:px-16 lg:px-24 py-8 border-t border-[var(--studio-edge)]">
        <p className="font-body text-xs text-[var(--studio-muted)] tracking-wider" style={{ letterSpacing: "0.15em" }}>
          Made with{" "}
          <a href="https://pixio.myapps.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--studio-white)] transition-colors">
            Pixio AI
          </a>
        </p>
      </footer>
    </main>
  );
}
