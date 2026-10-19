import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import About from './components/About'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      
      <div className="relative pl-[32px] lg:pl-[64px]">
        {/* Structural Vertical Spine */}
        <div className="vertical-spine" aria-hidden="true">
          {/* Generate a series of marks to look like film perforation */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="vertical-spine__mark" />
          ))}
        </div>

        <Nav />
        <main>
          <Hero />
          <Manifesto />
          <About />
          <Writing />
          <Contact />
        </main>
        <Footer />

        {/* Film grain texture — fixed overlay */}
        <svg
          className="grain-overlay"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
    </SmoothScroll>
  )
}
