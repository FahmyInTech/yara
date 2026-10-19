export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-28 pb-6 min-h-[90vh] lg:h-screen lg:min-h-[650px] lg:pt-24 lg:pb-20 border-b border-ink-4 flex flex-col justify-between">
      
      {/* Bottom Metadata - Kept */}
      <div className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-between px-6 lg:px-10 font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint z-30 pointer-events-none">
        <span>P. 01</span>
        <span className="text-gold">↓ Scroll to read</span>
      </div>

      {/* Text content - Massive typography centered */}
      <div className="relative z-10 w-full px-6 lg:px-10 mt-12 flex-1 flex flex-col justify-center items-center text-center">
        <div className="w-full">
          {/* Slate tag */}
          <div className="animate-entrance mb-8 lg:mb-10">
            <span className="inline-block border border-ink-4 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
              Subject: Film &amp; TV&ensp;—&ensp;Scene: Writer&ensp;—&ensp;Take: 01
            </span>
          </div>

          {/* Massive Name - Using sans-serif (font-body) for brutalist impact */}
          <h1 className="animate-entrance-delay-1 font-body text-[clamp(3.5rem,15vw,8rem)] lg:text-[12vw] font-bold leading-[0.85] tracking-tighter text-text uppercase">
            Yara
            <span className="block mt-2 lg:mt-6 text-gold tracking-tight">Abdelaziz.</span>
          </h1>

          <div className="flex flex-col lg:items-center gap-6 mt-12 lg:mt-16">
            {/* Gold accent rule */}
            <div
              className="animate-entrance-delay-2 h-px w-16 bg-gold shrink-0 mx-auto"
              aria-hidden="true"
            />
            {/* Role line */}
            <p className="animate-entrance-delay-2 font-mono text-[11px] sm:text-[13px] lg:text-[16px] font-medium tracking-[0.18em] lg:tracking-[0.22em] text-text-muted uppercase">
              Multimedia Writer | Researcher | Visual Storyteller
            </p>
          </div>
        </div>

      </div>

    </header>
  )
}
