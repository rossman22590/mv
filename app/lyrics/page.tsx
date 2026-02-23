import Link from "next/link";

export default function LyricsPage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--studio-edge)] bg-[var(--studio-black)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[700px] px-6 sm:px-10 md:px-16 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-[var(--studio-white)] hover:opacity-80 transition-opacity"
              aria-label="Back to Shimmer"
            >
              Shimmer
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/outtakes-bloopers" className="text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors">
                Outtakes
              </Link>
              <Link href="/process" className="text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors">
                Process
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-[700px] px-6 sm:px-10 md:px-16 py-12 md:py-20">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--studio-white)] mb-2">
          Lyrics
        </h1>
        <p className="font-body text-[var(--studio-muted)] text-sm mb-12" style={{ letterSpacing: "0.05em" }}>
          Title: Shimmer · Style: Dark R&B, Narcotic Atmosphere, Minimalist Production, Heavy 808s, Cinematic Synths, Breathy Tenor Vocals, Layered Falsetto Harmonies, Hedonistic & Explicit Lyrics, Toxic Romance
        </p>

        <div className="font-body text-[var(--studio-highlight)] space-y-10">
          <section>
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              Intro – Distorted Synth Pad + Vinyl Crackle
            </h2>
            <div className="space-y-2 text-[var(--studio-muted)] italic">
              <p>(A looped, pitched-down vocal sample whispers: &quot;can&apos;t turn it off…&quot;)</p>
              <p>(A breathy female voice, close to the mic: &quot;I need to feel you...&quot;)</p>
              <p>(A single, deep 808 note hits. A slow, synthesized heartbeat begins.)</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              Verse 1 – Sultry, Breathless Tenor over a simple Kick/Snare
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p>Skin on skin, the city bleeds in neon light</p>
              <p>Your nails trace lines of fire down my spine</p>
              <p>You whisper devils, I pretend I can&apos;t hear</p>
              <p>But I&apos;d trade my fucking pulse to stay right here</p>
              <p className="text-[var(--studio-muted)] italic pt-2">(—can&apos;t turn it off…) [sample pans hard right]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              Chorus – Full Beat Drops; Heavy 808, Driving Synth Bass, Layered Falsetto
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p>Desire&apos;s wearing my face in the mirror&apos;s haze</p>
              <p>You get too close and we both just fuckin&apos; shimmer</p>
              <p>This high has got a price beyond the wasted days</p>
              <p>Yeah, I sold my soul just for a taste on your tongue</p>
              <p className="text-[var(--studio-muted)] italic pt-2">(—can&apos;t turn it off…) [sample distorts with the kick]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              Verse 2 – More Confident, Arrogant Delivery; Low Synth Arpeggio Enters
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p>A silhouette I worship in the dark</p>
              <p>Leaving teeth marks on my heart, just for a scar</p>
              <p>You ask me what it&apos;s worth, this empty paradise?</p>
              <p>We chase a heaven built on beautiful lies</p>
              <p>And every morning I wake up numb to all of it… yeah</p>
              <p className="text-[var(--studio-muted)] italic pt-2">(—can&apos;t turn it off…) [sample glitches, pitched up]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              Bridge – All Percussion Cuts. Just a Deep, Humming Synth and a Raw, Close Vocal
            </h2>
            <div className="space-y-2 text-[var(--studio-muted)] italic mb-4">
              <p>(Three seconds of humming synth)</p>
            </div>
            <div className="space-y-2 leading-relaxed">
              <p>It&apos;s not your ghost that haunts my bed…</p>
              <p>It&apos;s the craving in my head.</p>
              <p>The silence when the high is gone…</p>
              <p>And I know I need another one.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
              Outro – Music Fades to just the Humming Pad and the Heartbeat
            </h2>
            <div className="space-y-2 text-[var(--studio-muted)] italic">
              <p>(A soft, reversed vocal melody plays, then resolves into a single, breathy falsetto note that holds and fades with heavy reverb)</p>
              <p>(A final, intimate whisper, right in your ear: &quot;mine...&quot;)</p>
              <p>(Final sample, clean and unprocessed: &quot;…can&apos;t turn it off.&quot;)</p>
              <p>(Heartbeat flutters once, then stops. Silence.)</p>
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-[var(--studio-edge)]">
          <Link href="/" className="font-body text-sm text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors">
            ← Back to Shimmer
          </Link>
        </footer>
      </article>
    </main>
  );
}
