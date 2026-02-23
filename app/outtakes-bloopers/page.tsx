import fs from "fs";
import path from "path";
import Link from "next/link";
import OuttakesGrid from "./OuttakesGrid";

const DATA_PATH = path.join(process.cwd(), "data", "outtakes-urls.json");

type OuttakeItem = {
  name: string;
  publicURL: string;
  type: "image" | "video" | "audio";
};

function getOuttakes(): OuttakeItem[] {
  try {
    const json = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(json);
  } catch {
    return [];
  }
}

export default function OuttakesBloopersPage() {
  const items = getOuttakes();
  const stills = items.filter((i) => i.type === "image");
  const video = items.filter((i) => i.type === "video");
  const audio = items.filter((i) => i.type === "audio");

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--studio-edge)] bg-[var(--studio-black)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-16 lg:px-24 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-[var(--studio-white)] hover:opacity-80 transition-opacity"
              aria-label="Back to Shimmer home"
            >
              Shimmer
            </Link>
            <nav className="flex flex-wrap gap-6 md:gap-8" aria-label="Jump to section and pages">
              <a href="#stills" className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors" style={{ letterSpacing: "0.18em" }}>
                Stills {stills.length > 0 && `(${stills.length})`}
              </a>
              <a href="#video" className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors" style={{ letterSpacing: "0.18em" }}>
                Video {video.length > 0 && `(${video.length})`}
              </a>
              <a href="#audio" className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors" style={{ letterSpacing: "0.18em" }}>
                Audio {audio.length > 0 && `(${audio.length})`}
              </a>
              <Link href="/lyrics" className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors" style={{ letterSpacing: "0.18em" }}>
                Lyrics
              </Link>
              <Link href="/process" className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors" style={{ letterSpacing: "0.18em" }}>
                Process
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="mb-20">
          <p className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] mb-2" style={{ letterSpacing: "0.2em" }}>
            Outtakes & bloopers
          </p>
          <p className="font-body text-[var(--studio-muted)]">
            Made with{" "}
            <a href="https://pixio.myapps.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--studio-white)] hover:underline">
              Pixio AI
            </a>
          </p>
        </div>

        <OuttakesGrid stills={stills} video={video} audio={audio} />
      </div>

      <footer className="border-t border-[var(--studio-edge)] py-8">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 md:px-16 lg:px-24">
          <p className="font-body text-xs text-[var(--studio-muted)] tracking-wider" style={{ letterSpacing: "0.15em" }}>
            <Link href="/" className="hover:text-[var(--studio-white)] transition-colors">Shimmer</Link>
            {" · "}
            <a href="https://pixio.myapps.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--studio-white)] transition-colors">
              Pixio AI
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
