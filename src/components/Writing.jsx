import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Writing() {
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)

  const DRIVE_ARCHIVE_URL = 'https://drive.google.com/drive/folders/1Cpz_s_oKd9B40pPki9Ss-Gsa6FOIMuLL'

  const essays = [
    {
      title: '“Ma’loul Celebrates Its Destruction”: A 40-Year-Old Film on an Ongoing Displacement (Arabic)',
      category: 'Essay',
      date: '2026',
      desc: 'Exploring the intersections of music, architecture, and design — the frequencies that shape how we build and feel.',
      tags: ['Theory', 'Architecture', 'Music'],
      link: DRIVE_ARCHIVE_URL,
    },
    {
      title: 'A Beginner’s Guide to Palestinian Cinema as Resistance',
      category: 'Thesis',
      date: '2026',
      desc: 'An exploration of Palestinian Cinema and its historical phases as a medium of resistance and cultural preservation.',
      tags: ['Cinema', 'Archive', 'Resistance'],
      link: DRIVE_ARCHIVE_URL,
    },
    {
      title: 'Film Analysis: Ma’loul Celebrates Its Destruction',
      category: 'Feature',
      date: '2026',
      desc: 'An investigation into the documentary traditions and cinematic languages that record daily life.',
      tags: ['Documentary', 'Visual Culture'],
      link: DRIVE_ARCHIVE_URL,
    }
  ]

  useEffect(() => {
    // Only enable horizontal scroll on desktop (lg = 1024px+)
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const ctx = gsap.context(() => {
        const container = scrollContainerRef.current
        gsap.to(container, {
          x: () => -(container.scrollWidth - window.innerWidth + 64),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${container.scrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        })
      }, sectionRef)
      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <div id="writing" className="relative">
      {/* ── Mobile layout: vertical stack ── */}
      <section className="lg:hidden relative bg-paper border-b border-rule-paper">
        {/* Metadata */}
        <div className="h-12 flex items-center justify-between px-6 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-dark border-b border-rule-paper">
          <span>/ Selected Writing</span>
          <span>P. 004</span>
        </div>

        {/* THE ARCHIVE heading */}
        <div className="px-6 pt-12 pb-8 border-b border-rule-paper">
          <a href={DRIVE_ARCHIVE_URL} target="_blank" rel="noopener noreferrer" className="group block">
            <h2 className="font-display text-5xl leading-[0.9] text-text-dark tracking-tighter">
              THE<br />ARCHIVE
            </h2>
            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-px w-4 bg-gold" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-dark uppercase group-hover:text-gold transition-colors">
                Open Google Drive &#x2197;
              </span>
            </div>
          </a>
        </div>

        {/* Cards */}
        {essays.map((essay, index) => (
          <div key={index} className="px-6 py-10 border-b border-rule-paper last:border-b-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark mb-4 flex justify-between">
              <span>{essay.category}</span>
              <span>{essay.date}</span>
            </div>
            <h3 className="font-display text-3xl font-normal leading-tight text-text-dark mb-6">
              {essay.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {essay.tags.map(tag => (
                <span key={tag} className="border border-rule-paper px-3 py-1 font-mono text-[9px] text-muted-dark uppercase tracking-[0.1em]">
                  {tag}
                </span>
              ))}
            </div>
            <a href={essay.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] text-text-dark uppercase tracking-[0.15em] hover:text-gold transition-colors">
              Read Essay <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </section>

      {/* ── Desktop layout: GSAP horizontal scroll ── */}
      <section ref={sectionRef} className="hidden lg:block relative bg-paper h-screen overflow-hidden border-b border-rule-paper">
        {/* Corner Metadata */}
        <div className="absolute inset-x-0 top-0 h-12 flex items-center justify-between px-10 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-dark pointer-events-none z-30 border-b border-rule-paper">
          <span>/ Selected Writing</span>
          <span>P. 004</span>
        </div>

        <div className="flex h-full items-center">
          <div ref={scrollContainerRef} className="flex px-20 min-w-max h-full items-center">

            {/* Intro Slide */}
            <div className="w-[40vw] flex flex-col justify-center shrink-0 pr-20">
              <a href={DRIVE_ARCHIVE_URL} target="_blank" rel="noopener noreferrer" className="group block hover:opacity-60 transition-opacity">
                <h2 className="font-display text-[clamp(5rem,9vw,10rem)] leading-[0.9] text-text-dark tracking-tighter">
                  THE<br />ARCHIVE
                </h2>
                <div className="mt-8 flex items-center gap-2.5">
                  <span className="h-px w-4 bg-gold" aria-hidden="true" />
                  <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-muted-dark uppercase group-hover:text-gold transition-colors">
                    Open Google Drive &#x2197;
                  </span>
                </div>
              </a>
            </div>

            {/* Essay Slides */}
            {essays.map((essay, index) => (
              <div key={index} className="w-[45vw] min-h-[60vh] flex flex-col justify-center shrink-0 px-16 lg:px-20 border-l border-rule-paper">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-dark mb-5 flex justify-between">
                  <span>{essay.category}</span>
                  <span>{essay.date}</span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl xl:text-5xl font-normal leading-[1.1] text-text-dark mb-8">
                  {essay.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-10">
                  {essay.tags.map(tag => (
                    <span key={tag} className="border border-rule-paper px-3 py-1 font-mono text-[9px] text-muted-dark uppercase tracking-[0.1em]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={essay.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] text-text-dark uppercase tracking-[0.15em] hover:text-gold transition-colors">
                  Read Essay <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

