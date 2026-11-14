const HERO_IMAGE_URL = 'https://res.cloudinary.com/dgqequjgk/image/upload/f_auto,q_auto/v1794690613/Hero_img_bfw9ux.png'

export default function Hero() {
  return (
    <header className="relative overflow-hidden h-screen supports-[height:100dvh]:h-dvh min-h-[580px] pt-16 pb-0 lg:h-screen lg:min-h-[650px] lg:pt-24 lg:pb-20 border-b border-ink-4 flex flex-col justify-between">
      
      {/* Bottom Metadata - Kept */}
      <div className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-between px-6 lg:px-10 font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint z-30 pointer-events-none">
        <span>P. 01</span>
        <span className="text-gold">↓ Scroll to read</span>
      </div>

      {/* Text content - Massive typography overlapping the photo */}
      <div className="relative z-10 w-full px-6 lg:px-10 mt-0 lg:mt-12 flex-1 min-h-0 flex flex-col justify-between lg:justify-center">
        <div className="lg:w-[60%] shrink-0">
          {/* Slate tag */}
          <div className="animate-entrance mb-3 sm:mb-4 lg:mb-10">
            <span className="inline-block border border-ink-4 px-3 py-1.5 lg:px-4 lg:py-2 font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-text-muted uppercase">
              Subject: Film &amp; TV&ensp;—&ensp;Scene: Writer&ensp;—&ensp;Take: 01
            </span>
          </div>

          {/* Massive Name - Using sans-serif (font-body) for brutalist impact */}
          <h1 className="animate-entrance-delay-1 font-body text-[clamp(2.4rem,10.5vw,4.25rem)] lg:text-[9.5vw] font-bold leading-[0.85] tracking-tighter text-text uppercase">
            Yara
            <span className="block mt-1.5 lg:mt-5 text-gold tracking-tight">Abdelaziz</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center gap-2.5 sm:gap-3 lg:gap-6 mt-4 sm:mt-5 lg:mt-16">
            {/* Gold accent rule */}
            <div
              className="animate-entrance-delay-2 h-px w-10 lg:w-12 bg-gold shrink-0"
              aria-hidden="true"
            />
            {/* Role line */}
            <p className="animate-entrance-delay-2 font-mono text-[10px] sm:text-[12px] lg:text-[15px] font-medium tracking-[0.16em] lg:tracking-[0.2em] text-text-muted uppercase">
              Multimedia Writer | Researcher | Visual Storyteller
            </p>
          </div>
        </div>

        {/* Mobile photo — fits remaining viewport height without scrolling */}
        <div className="relative -mx-6 mt-4 flex-1 min-h-0 flex items-end justify-center overflow-hidden lg:hidden">
          <div className="relative h-full aspect-[1059/1485] max-w-full overflow-hidden">
            <div className="h-full w-full">
              <img
                src={HERO_IMAGE_URL}
                alt="Yara Abdelaziz"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink to-transparent" />
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-ink to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-ink to-transparent" />
          </div>
        </div>
      </div>

      {/* Desktop photo — bleeds to right viewport edge */}
      <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block pointer-events-none">
        <div className="h-full w-full">
          <img
            src={HERO_IMAGE_URL}
            alt="Yara Abdelaziz"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </div>
        {/* Left fade — blends photo into ink background */}
        <div className="absolute inset-y-0 left-0 z-10 w-36 bg-gradient-to-r from-ink to-transparent" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-ink to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-ink to-transparent" />
      </div>

    </header>
  )
}
