import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader() {
  const containerRef = useRef(null)
  const timecodeRef = useRef(null)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setIsFinished(true)
      }
    })

    // Blinking REC dot is handled by CSS animation (or we can let it blink naturally)

    // Timecode animation (Hours:Minutes:Seconds:Frames)
    const time = { frames: 0 }
    tl.to(time, {
      frames: 48, // 2 seconds of 24fps film
      duration: 1.8,
      ease: 'none',
      onUpdate: () => {
        if (timecodeRef.current) {
          const totalFrames = Math.floor(time.frames)
          const seconds = Math.floor(totalFrames / 24).toString().padStart(2, '0')
          const frames = (totalFrames % 24).toString().padStart(2, '0')
          timecodeRef.current.innerHTML = `01:00:${seconds}:${frames}`
        }
      }
    })

    // Shutter cut exit
    // The screen collapses horizontally to a thin vertical line, then disappears
    tl.to(containerRef.current, {
      scaleY: 0.005,
      duration: 0.3,
      ease: 'expo.in'
    }, "+=0.2")
    tl.to(containerRef.current, {
      scaleX: 0,
      duration: 0.3,
      ease: 'expo.out'
    })

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (isFinished) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink text-paper font-mono overflow-hidden origin-center"
    >
      {/* Viewfinder Crosshairs */}
      <div className="absolute inset-8 border-[0.5px] border-paper/20 pointer-events-none">
        {/* Top Left */}
        <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-paper" />
        {/* Top Right */}
        <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-paper" />
        {/* Bottom Left */}
        <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-paper" />
        {/* Bottom Right */}
        <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-paper" />
      </div>

      {/* REC Indicator */}
      <div className="absolute top-12 left-12 flex items-center gap-3 text-xs tracking-widest text-paper/70">
        <div className="w-3 h-3 rounded-full bg-red animate-pulse" />
        REC
      </div>

      {/* Format Metadata */}
      <div className="absolute bottom-12 right-12 text-[10px] tracking-widest text-paper/50 uppercase">
        16mm // 24FPS
      </div>

      {/* Central Timecode */}
      <div 
        ref={timecodeRef}
        className="text-[8vw] lg:text-[4vw] tracking-wider text-paper/90 font-light"
      >
        01:00:00:00
      </div>
    </div>
  )
}
