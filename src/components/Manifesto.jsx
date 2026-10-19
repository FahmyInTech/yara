import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const quote = "We write, therefore we exist."
const words = quote.split(' ')

export default function Manifesto() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-word',
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.09,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative bg-paper border-b border-rule-paper overflow-hidden">
      {/* Metadata strip */}
      <div className="absolute inset-x-0 top-0 h-12 z-10 flex items-center justify-between px-6 lg:px-10 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-dark pointer-events-none border-b border-rule-paper">
        <span>/ Manifesto</span>
        <span>P. 02</span>
      </div>

      {/* Faint opening quotation mark — watermark */}
      <div
        className="absolute left-4 top-8 font-display leading-none select-none pointer-events-none text-rule-paper"
        style={{ fontSize: 'clamp(10rem, 22vw, 20rem)', opacity: 0.45, lineHeight: 0.75 }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote body */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[65vh] px-6 pt-20 pb-16 lg:px-24">
        <blockquote className="max-w-4xl text-center font-display italic text-4xl leading-[1.45] tracking-tight md:text-5xl lg:text-[3.5rem] text-text-dark">
          {words.map((word, i) => (
            <span key={i} className="reveal-word inline-block mr-[0.22em]">
              {word}
            </span>
          ))}
        </blockquote>

        {/* Attribution */}
        <div className="mt-14 flex items-center gap-4">
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          <cite className="not-italic font-mono text-[10px] tracking-[0.25em] text-muted-dark uppercase">
            Refaat Alareer
          </cite>
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}


