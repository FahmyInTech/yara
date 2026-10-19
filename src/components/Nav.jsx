import { useState, useEffect } from 'react'

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      for (const { href } of sections) {
        const el = document.getElementById(href.substring(1))
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) current = href.substring(1)
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Corner frame: fixed metadata ── */}
      {/* Top-left: Brand */}
      <div className="fixed top-5 left-[calc(32px+1.25rem)] lg:left-[calc(64px+2rem)] z-50 pointer-events-auto">
        <a href="#" className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold hover:text-text transition-colors duration-200">
          Yara Abdelaziz.
        </a>
      </div>

      {/* Top-right: Volume + Menu trigger */}
      <div className="fixed top-5 right-5 lg:right-10 z-50 flex items-center gap-6">
        <span className="hidden md:block font-mono text-[10px] tracking-[0.25em] uppercase text-text-faint">
          Vol. <span className="text-gold">1</span> / 2026
        </span>

        {/* Menu button — always visible */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-text-muted hover:text-gold transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hidden md:inline">{menuOpen ? 'Close' : 'Menu'}</span>
          <div className="flex flex-col gap-[4px] w-5">
            <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`} />
            <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* ── Full-screen overlay ── */}
      <div className={`fixed inset-0 z-40 bg-ink flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>

        {/* Centered editorial links */}
        <div className="flex-1 flex flex-col items-start justify-center px-8 lg:px-24">
          {sections.map(({ label, href }, i) => {
            const isActive = activeSection === href.substring(1)
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`group block py-4 lg:py-6 transition-all duration-400 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: menuOpen ? `${i * 100 + 150}ms` : '0ms' }}
              >
                <span className={`font-display italic text-[15vw] lg:text-[8vw] leading-[0.95] tracking-tight transition-colors duration-200 group-hover:text-gold ${isActive ? 'text-gold' : 'text-text'
                  }`}>
                  {label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Bottom strip */}
        <div className="px-8 lg:px-24 py-8 flex items-center justify-between border-t border-ink-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint">
            Multimedia Writer | Researcher | Visual Storyteller
          </span>
          <span className="font-display italic text-[13px] text-gold">
            Yara A.
          </span>
        </div>
      </div>
    </>
  )
}
