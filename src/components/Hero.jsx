const HERO_IMAGE_URL = 'https://res.cloudinary.com/dgqequjgk/image/upload/v1794690613/Hero_img_bfw9ux.png'

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-28 pb-6 lg:h-screen lg:min-h-[650px] lg:pt-24 lg:pb-20 border-b border-ink-4 flex flex-col justify-between">
      
      {/* Bottom Metadata - Kept */}
      <div className="absolute inset-x-0 bottom-0 h-12 flex items-center justify-between px-6 lg:px-10 font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint z-30 pointer-events-none">
        <span>P. 01</span>
        <span className="text-gold">↓ Scroll to read</span>
      </div>

      {/* Text content - Massive typography overlapping the photo */}
      <div className="relative z-10 w-full px-6 lg:px-10 mt-12 flex-1 flex flex-col justify-center">
        <div className="lg:w-[60%]">
          {/* Slate tag */}
          <div className="animate-entrance mb-8 lg:mb-10">
            <span className="inline-block border border-ink-4 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
              Subject: Film &amp; TV&ensp;—&ensp;Scene: Writer&ensp;—&ensp;Take: 01
            </span>
          </div>

          {/* Massive Name - Using sans-serif (font-body) for brutalist impact */}
          <h1 className="animate-entrance-delay-1 font-body text-[clamp(3rem,12vw,6.5rem)] lg:text-[9.5vw] font-bold leading-[0.85] tracking-tighter text-text uppercase">
            Yara
            <span className="block mt-2 lg:mt-5 text-gold tracking-tight">Abdelaziz</span>
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-12 lg:mt-16">
            {/* Gold accent rule */}
            <div
              className="animate-entrance-delay-2 h-px w-12 bg-gold shrink-0"
              aria-hidden="true"
            />
            {/* Role line */}
            <p className="animate-entrance-delay-2 font-mono text-[11px] sm:text-[13px] lg:text-[15px] font-medium tracking-[0.18em] lg:tracking-[0.2em] text-text-muted uppercase">
              Multimedia Writer | Researcher | Visual Storyteller
            </p>
          </div>
        </div>

        {/* Mobile photo — full bleed banner after text */}
        <div className="relative -mx-6 mt-10 aspect-[4/3] sm:aspect-[5/3] overflow-hidden lg:hidden">
          <div className="duotone h-full w-full">
            <img
              src={HERO_IMAGE_URL}
              alt="Yara Abdelaziz"
              className="h-full w-full object-cover object-[center_15%]"
            />
          </div>
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-ink to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-ink to-transparent" />
        </div>
      </div>

      {/* Desktop photo — bleeds to right viewport edge */}
      <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block pointer-events-none">
        <div className="duotone h-full w-full">
          <img
            src={HERO_IMAGE_URL}
            alt="Yara Abdelaziz"
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
