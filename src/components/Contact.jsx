export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink-2 py-32 lg:py-48 overflow-hidden border-b border-ink-4">
      {/* Corner Metadata */}
      <div className="absolute inset-x-0 top-0 h-12 flex items-center justify-between px-6 lg:px-10 font-mono text-[9px] uppercase tracking-[0.2em] text-text-faint pointer-events-none">
        <span>/ Let's Talk</span>
        <span>P. 005</span>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[50vh] px-6">

        {/* Slate tag bookend */}
        <div className="mb-16">
          <span className="inline-block border border-ink-4 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase">
            Scene: Contact&ensp;—&ensp;Cut: Final
          </span>
        </div>

        {/* Giant Typography Link */}
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-[clamp(2.5rem,10vw,8rem)] leading-none tracking-tighter text-text hover:text-gold transition-colors duration-300 uppercase text-center"
        >
          Book A Meeting
        </a>

        {/* Small footer text */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <a href="mailto:hello@yara-a.com" className="font-mono text-[14px] lg:text-[16px] tracking-[0.25em] text-text-faint hover:text-gold transition-colors">
            HELLO@YARA-A.COM
          </a>
          <div className="font-mono text-[13px] lg:text-[15px] uppercase tracking-[0.25em] text-text-faint flex gap-10">
            <a href="https://www.linkedin.com/in/yarahere" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
