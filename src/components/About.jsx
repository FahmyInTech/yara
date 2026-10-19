export default function About() {
  return (
    <section id="about" className="relative bg-ink py-0 border-b border-ink-4">
      {/* Editorial split: strict 50/50 on desktop with a vertical border */}
      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-ink-4">
        
        {/* Left Column: The Background */}
        <div className="px-6 py-20 lg:px-16 lg:py-32">
          {/* Section label */}
          <div className="mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-normal tracking-tight text-text">
              Who I Am
            </h2>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="h-px w-4 bg-gold" aria-hidden="true" />
              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                / The Background / P. 003
              </span>
            </div>
          </div>

          <div className="max-w-xl space-y-6">
            <p className="drop-cap font-body text-[15px] font-light leading-[1.85] text-text lg:text-base">
              Yara holds an MA in Film and Television from Bahçeşehir University, where she studied film history, theory, and criticism alongside film analysis, documentary production, and visual storytelling, examining how narrative, cinematography, editing, and sound shape the way stories are told. Her thesis, <em>Palestinian Cinema as a Cinema of Resistance: The Historical Phases of the Palestinian Cause</em>, traced how Palestinian cinema evolved alongside the historical phases of the Palestinian cause, combining historical research with close film analysis.
            </p>
            <p className="font-body text-[15px] font-light leading-[1.85] text-text lg:text-base">
              That same instinct (research in service of a story) carries into her work beyond the thesis. She volunteers with Al Sharq Youth Network on research, media, and knowledge-driven initiatives, and writes across registers: analytical, journalistic, and digital, always asking how ideas find the audience that needs them.
            </p>
          </div>
        </div>

        {/* Right Column: The Focus */}
        <div className="px-6 py-20 lg:px-16 lg:py-32 bg-ink-2">
          {/* Section label */}
          <div className="mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-normal tracking-tight text-text">
              How I Trained
            </h2>
            <div className="mt-4 flex items-center gap-2.5">
              <span className="h-px w-4 bg-gold" aria-hidden="true" />
              <span className="font-mono text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                / Training & Courses
              </span>
            </div>
          </div>

          <ol className="divide-y divide-ink-4">
            {[
              { course: 'Multimedia Content Writing', org: 'Al Jazeera Media Institute' },
              { course: 'Creative Writing',           org: 'Al Jazeera Media Institute' },
              { course: 'Scriptwriting',              org: 'Al Jazeera Media Institute' },
              { course: 'AI Filmmaking',              org: 'Skillshare' },
              { course: 'Digital Marketing',          org: "Learn n' Digital" },
            ].map(({ course, org }, i) => (
              <li key={course} className="flex items-start gap-5 py-5 group">
                {/* Index */}
                <span className="font-mono text-[10px] tracking-widest text-gold mt-1 shrink-0 w-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Content */}
                <div>
                  <p className="font-body text-[14px] font-normal leading-snug text-text group-hover:text-gold-bright transition-colors duration-200">
                    {course}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-text-faint uppercase mt-1">
                    {org}
                  </p>
                </div>
              </li>
            ))}
          </ol>

        </div>

      </div>
    </section>
  )
}
