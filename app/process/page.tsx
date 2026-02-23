import Link from "next/link";

const SECTION_IDS = [
  "intro",
  "framework",
  "reality-first",
  "reality-lock",
  "global-locks",
  "scene-prompts",
  "generation-settings",
] as const;

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[var(--studio-edge)] bg-[var(--studio-black)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[900px] px-6 sm:px-10 md:px-16 py-6">
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
              <Link href="/lyrics" className="text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors">
                Lyrics
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-[900px] px-6 sm:px-10 md:px-16 py-12 md:py-20">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--studio-white)] mb-4">
          Process
        </h1>
        <p className="font-body text-[var(--studio-muted)] text-lg mb-12">
          How we made the Shimmer music video: prompts and direction developed with AI Tutor and Machine, then run through Pixio AI and Nano Banana–style generation.
        </p>

        {/* Table of contents */}
        <nav aria-label="Process sections" className="mb-16 pb-8 border-b border-[var(--studio-edge)]">
          <p className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
            On this page
          </p>
          <ul className="font-body text-sm space-y-2">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors">
                  {id.replace(/-/g, " ")}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Intro */}
        <section id="intro" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">How we did it</h2>
          <div className="font-body text-[var(--studio-muted)] space-y-4">
            <p>
              The Shimmer MV was built using a structured prompt system developed in <strong className="text-[var(--studio-white)]">AI Tutor</strong> and <strong className="text-[var(--studio-white)]">Machine</strong>: <strong className="text-[var(--studio-white)]">Reality-First</strong> and{" "}
              <strong className="text-[var(--studio-white)]">Reality Lock</strong> for Nano Banana / Pixio pipelines. Every scene has paired{" "}
              <strong className="text-[var(--studio-white)]">image</strong> and <strong className="text-[var(--studio-white)]">video</strong> prompts so keyframes and motion stay consistent.
            </p>
            <p>
              Core rules: <strong className="text-[var(--studio-white)]">Lover only in reflections</strong> (never shown directly), <strong className="text-[var(--studio-white)]">Shimmer effects only in chorus</strong>,{" "}
              <strong className="text-[var(--studio-white)]">Bridge = effects OFF</strong>, camera default = stalker, two locations (neon alley home base, penthouse counter-space).
            </p>
          </div>
        </section>

        {/* Framework */}
        <section id="framework" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">Nano Banana master structure</h2>
          <p className="font-body text-[var(--studio-muted)] mb-4">
            Prompts follow: Subject → Action → Environment → Camera → Lighting → Mood → Style → Technical specs.
          </p>
          <div className="bg-[var(--studio-edge)]/50 border border-[var(--studio-edge)] rounded-lg p-4 font-body text-sm text-[var(--studio-highlight)]">
            <p>[MAIN SUBJECT] is performing [ACTION] inside [ENVIRONMENT]</p>
            <p>Camera: [TYPE + LENS + MOVEMENT] · Lighting: [STYLE] · Mood: [TONE] · Style: [VISUAL REFERENCES]</p>
            <p>Details: Materials, Colors, Atmosphere, Background · Render: 4K, 60fps, 16:9</p>
          </div>
        </section>

        {/* Reality-First */}
        <section id="reality-first" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">Reality-First system prompt</h2>
          <p className="font-body text-[var(--studio-muted)] mb-4">
            High-control prompts for believable, real-world results: hard constraints first, observable details, one primary focus, strict negatives.
          </p>
          <details className="group border border-[var(--studio-edge)] rounded-lg overflow-hidden">
            <summary className="font-body text-sm text-[var(--studio-white)] p-4 cursor-pointer list-none flex items-center justify-between">
              <span>Expand Reality-First YAML structure</span>
              <span className="text-[var(--studio-muted)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <pre className="font-body text-xs text-[var(--studio-muted)] p-4 bg-[var(--studio-black)] overflow-x-auto whitespace-pre-wrap border-t border-[var(--studio-edge)]">
{`primary_use: "Image generation (photoreal, editorial, product, architecture)"
mission: Write prompts that reliably produce believable results by anchoring
  hard constraints, observable details, one priority focus, strict negatives.
operating_principles:
  - "Hard constraints first (aspect ratio, medium, shot, setting)"
  - "ONE primary focus with 3–8 observable features"
  - "Convert style words into camera/light/material behaviors"
  - "Strict negatives target AI look and unwanted styles"
required_inputs: subject, medium, aspect_ratio, setting, shot, primary_focus
prompt_construction: Constraints → Composition → Environment → Materials →
  Primary focus → Color & light → Camera behavior → Overall aesthetic → Strict negatives
output_format: POSITIVE PROMPT + STRICT NEGATIVES`}
            </pre>
          </details>
        </section>

        {/* Reality Lock */}
        <section id="reality-lock" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">Reality Lock extension</h2>
          <p className="font-body text-[var(--studio-muted)] mb-4">
            Priority order: Primary focus accuracy → Material realism → Lighting physics → Color accuracy → Composition → Aesthetic. Enforcement: if composition conflicts with realism of primary focus, degrade composition first; never smooth or beautify the primary focus.
          </p>
          <details className="group border border-[var(--studio-edge)] rounded-lg overflow-hidden">
            <summary className="font-body text-sm text-[var(--studio-white)] p-4 cursor-pointer list-none flex items-center justify-between">
              <span>Expand Reality Lock rules</span>
              <span className="text-[var(--studio-muted)] group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="font-body text-sm text-[var(--studio-muted)] p-4 bg-[var(--studio-black)] border-t border-[var(--studio-edge)] space-y-2">
              <p>Skin: preserve pores, fine lines, minor blemishes. Materials: micro-scratches, clear boundaries. Tone mapping: no HDR-like global contrast; luminous only from physical light.</p>
              <p>Documentary mode (optional): favor natural imperfections, avoid studio framing, backgrounds may be lived-in.</p>
            </div>
          </details>
        </section>

        {/* Global Locks */}
        <section id="global-locks" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">Global locks (paste into every prompt)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-body text-sm font-medium text-[var(--studio-white)] mb-2">Style Lock</h3>
              <blockquote className="font-body text-sm text-[var(--studio-muted)] pl-4 border-l-2 border-[var(--studio-edge)]">
                cinematic futuristic noir, dark R&B narcotic atmosphere, minimalist but expensive, wet reflective streets, neon signage bokeh, smoke haze, subtle film grain, shallow depth of field, realistic skin texture and pores, low-key lighting, high contrast, dramatic rim light, premium fashion editorial lighting, restrained sensuality, ominous romance, modern music video
              </blockquote>
            </div>
            <div>
              <h3 className="font-body text-sm font-medium text-[var(--studio-white)] mb-2">Character Lock</h3>
              <blockquote className="font-body text-sm text-[var(--studio-muted)] pl-4 border-l-2 border-[var(--studio-edge)]">
                white male late 20s, dark brown short-to-medium hair styled, light stubble, colored eyes, light freckles, sharp cheekbones, full lips, elegant high-fashion futuristic streetwear, matte black tailored coat with reflective trim, chrome ring, intense toxic-romantic gaze
              </blockquote>
            </div>
            <div>
              <h3 className="font-body text-sm font-medium text-[var(--studio-white)] mb-2">Lover Rule</h3>
              <blockquote className="font-body text-sm text-[var(--studio-muted)] pl-4 border-l-2 border-[var(--studio-edge)]">
                the lover is never shown directly; only implied in reflections, silhouettes, handprints on glass, distorted mirrors, ripples in puddles, breath marks on windows; never show the lover’s face or full body
              </blockquote>
            </div>
            <div>
              <h3 className="font-body text-sm font-medium text-[var(--studio-white)] mb-2">Shimmer Rule (chorus only)</h3>
              <blockquote className="font-body text-sm text-[var(--studio-muted)] pl-4 border-l-2 border-[var(--studio-edge)]">
                silver shimmer highlight bloom on bright edges, subtle chromatic aberration on highlights only, slight temporal echo in reflections (reflection moves a fraction late), micro-glitch only on whispered sample line, timed to kick/808 hits; keep it minimal, not sci-fi
              </blockquote>
            </div>
            <div>
              <h3 className="font-body text-sm font-medium text-[var(--studio-white)] mb-2">Negative Prompt</h3>
              <blockquote className="font-body text-sm text-[var(--studio-muted)] pl-4 border-l-2 border-[var(--studio-edge)]">
                no cartoon, no anime, no plastic skin, no low-res, no blur, no warped faces, no identity drift, no extra fingers, no deformed hands, no watermarks, no logos, no text artifacts, no overexposed neon, no blown highlights
              </blockquote>
            </div>
          </div>
        </section>

        {/* Generation settings */}
        <section id="generation-settings" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">Generation settings</h2>
          <ul className="font-body text-sm text-[var(--studio-muted)] space-y-2 list-disc pl-5">
            <li>Format: 16:9, 24fps, cinematic motion blur, high bitrate look</li>
            <li>Camera: 35mm/50mm, shallow depth of field, soft highlight bloom (controlled)</li>
            <li>Lighting: low-key, strong rim light, neon practicals, haze/smoke for depth</li>
            <li>Color: deep blacks, cool shadows (teal/blue), rare crimson accents, silver highlights</li>
            <li>Continuity: same actor identity across all shots (face, hair, freckles, stubble)</li>
          </ul>
        </section>

        {/* Scene prompts */}
        <section id="scene-prompts" className="scroll-mt-24 mb-16">
          <h2 className="font-display text-2xl font-bold text-[var(--studio-white)] mb-4">Scene prompts (S01–S20)</h2>
          <p className="font-body text-[var(--studio-muted)] mb-6">
            Each scene has an <strong className="text-[var(--studio-white)]">IMAGE PROMPT</strong> (keyframe) and <strong className="text-[var(--studio-white)]">VIDEO PROMPT</strong> (motion). Shimmer Rule is ON only for chorus (S12–S18). Lover Rule applied where noted.
          </p>

          {[
            { id: "S01", phase: "Intro", title: "Macro atmosphere (vinyl crackle becomes visual)", effects: "shimmer OFF" },
            { id: "S02", phase: "Intro", title: "Mouth + breath (intimacy)", effects: "shimmer OFF" },
            { id: "S03", phase: "Intro", title: "Ring glint on first 808", effects: "shimmer OFF" },
            { id: "S04", phase: "Intro", title: "Heartbeat streetlight pulse", effects: "shimmer OFF" },
            { id: "S05", phase: "Intro", title: "“can’t turn it off” reflection misbehaves", effects: "glitch allowed ONLY here, Lover Rule" },
            { id: "S06", phase: "Verse 1", title: "Walk performance (stalker camera)", effects: "shimmer OFF" },
            { id: "S07", phase: "Verse 1", title: "“city bleeds in neon” neon infection", effects: "shimmer OFF" },
            { id: "S08", phase: "Verse 1", title: "“nails trace lines of fire” reflection-only touch", effects: "Lover Rule" },
            { id: "S09", phase: "Verse 1", title: "Whisper presence: breath mark + handprint on glass", effects: "Lover Rule" },
            { id: "S10", phase: "Verse 1", title: "“trade my pulse” still portrait", effects: "shimmer OFF" },
            { id: "S11", phase: "Verse 1", title: "Frame-within-frame surveillance", effects: "Lover Rule" },
            { id: "S12", phase: "Chorus", title: "“Desire wearing my face” mirror haze", effects: "SHIMMER ON, Lover Rule" },
            { id: "S13", phase: "Chorus", title: "Insert montage (ring/eyes/mouth/wet pavement)", effects: "SHIMMER ON" },
            { id: "S14", phase: "Chorus", title: "Glass wall silhouette: lover in reflection only", effects: "SHIMMER ON, Lover Rule" },
            { id: "S15", phase: "Chorus", title: "Jawline control touch (reflected hand)", effects: "SHIMMER ON, Lover Rule" },
            { id: "S16", phase: "Chorus", title: "Puddle “mirror maze” impossible physics", effects: "SHIMMER ON, Lover Rule" },
            { id: "S17", phase: "Chorus", title: "“sold my soul” ring constriction metaphor", effects: "SHIMMER ON, Lover Rule" },
            { id: "S18", phase: "Chorus", title: "Chorus wide performance: predator push-in", effects: "SHIMMER ON, Lover Rule" },
            { id: "S19", phase: "Verse 2", title: "Performs to his reflection like it’s his lover", effects: "reflection weirdness, no bloom, Lover Rule" },
            { id: "S20", phase: "Verse 2", title: "Black liquid surrender (silhouettes in reflection)", effects: "Lover Rule" },
          ].map((scene) => (
            <details key={scene.id} className="group border border-[var(--studio-edge)] rounded-lg overflow-hidden mb-4">
              <summary className="font-body text-sm p-4 cursor-pointer list-none flex items-center justify-between bg-[var(--studio-black)] hover:bg-[var(--studio-edge)]/30 transition-colors">
                <span>
                  <span className="text-[var(--studio-muted)] font-medium">{scene.id}</span>
                  <span className="mx-2 text-[var(--studio-muted)]">·</span>
                  <span className="text-[var(--studio-white)]">{scene.title}</span>
                  <span className="ml-2 text-[var(--studio-muted)] text-xs">({scene.phase}, {scene.effects})</span>
                </span>
                <span className="text-[var(--studio-muted)] group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-4 bg-[var(--studio-edge)]/20 border-t border-[var(--studio-edge)] space-y-4">
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] mb-2">Image prompt</p>
                  <p className="font-body text-sm text-[var(--studio-highlight)]">
                    Start with Style Lock + Character Lock (and Lover Rule / Shimmer Rule where noted). Describe the exact frozen frame: aspect ratio 16:9, environment, framing, lighting, character pose and expression, materials and textures. No “same shot” references — be explicit and detailed.
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs uppercase tracking-wider text-[var(--studio-muted)] mb-2">Video prompt</p>
                  <p className="font-body text-sm text-[var(--studio-highlight)]">
                    Restate environment, character, and framing. Describe camera movement (dolly, track, push, whip-pan), subject motion (lip-sync, breath, gesture), and any environment behavior (reflection lag, shimmer bloom, liquid rise). Explicit timing where it matters (e.g. reflection lags 0.2s, shimmer only on highlight edges). Append Negative Prompt.
                  </p>
                </div>
              </div>
            </details>
          ))}
        </section>

        {/* Extra scenes note */}
        <section className="mb-16 pt-8 border-t border-[var(--studio-edge)]">
          <h2 className="font-display text-xl font-bold text-[var(--studio-white)] mb-4">Additional scene ideas</h2>
          <p className="font-body text-[var(--studio-muted)] mb-4">
            The full process also included: falling (Matrix-style backward, POV), crosswalk time-stop eye lock, bus stop handprints, subway window reflection, alley window almost-touch, feet-to-face fashion rise, underwater performance (god rays, meditative stare), black slime / fragmentation / world-fracture set pieces, and seduction beats (breath distance, touch event, eye lock). All follow the same global locks and explicit image + video prompt pairing.
          </p>
          <p className="font-body text-sm text-[var(--studio-muted)]">
            Prompts and direction: AI Tutor and Machine. Generation:{" "}
            <a href="https://pixio.myapps.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--studio-white)] hover:underline">
              Pixio AI
            </a>
            .
          </p>
        </section>

        <footer className="pt-8 border-t border-[var(--studio-edge)]">
          <Link href="/" className="font-body text-sm text-[var(--studio-muted)] hover:text-[var(--studio-white)] transition-colors">
            ← Back to Shimmer
          </Link>
        </footer>
      </article>
    </main>
  );
}
