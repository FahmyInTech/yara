export default function Footer() {
  return (
    <footer className="border-t border-ink-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 sm:flex-row sm:items-center lg:px-10">
        <span className="font-mono text-[12px] tracking-[0.1em] text-text-faint">
          &copy; {new Date().getFullYear()} Yara A.
        </span>
        <span className="font-mono text-[12px] tracking-[0.1em] text-text-faint">
          Amman, Jordan
        </span>
      </div>
    </footer>
  )
}
