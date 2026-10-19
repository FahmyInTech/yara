import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // GSAP quickTo for highly performant mouse following
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3' })

    const onMouseMove = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 3, duration: 0.3, ease: 'back.out(1.7)' })
    }

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
    }

    // Attach mouse move listener
    window.addEventListener('mousemove', onMouseMove)

    // Attach hover listeners to interactive elements
    const addListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, [role="button"]')
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }

    // Initial attach
    addListeners()

    // Setup MutationObserver to attach listeners to dynamically added elements
    const observer = new MutationObserver(() => {
      // Re-attach listeners when DOM changes (simple approach: remove old, add new)
      // For a robust implementation, you'd only add to new elements, but for this portfolio this is sufficient
      const interactives = document.querySelectorAll('a, button, input, [role="button"]')
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
      const interactives = document.querySelectorAll('a, button, input, [role="button"]')
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference hidden lg:block"
      style={{ willChange: 'transform' }}
    />
  )
}
