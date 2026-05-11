import { useState, useRef, useEffect } from 'react'
import GlassSurface from './GlassSurface'
import '../styles/bottomNav.css'

const sections = ['Home', 'Menu', 'Espaço', 'Eventos']

export default function BottomNav() {
  const [active, setActive] = useState(0)
  const indicatorRef = useRef(null)
  const buttonsRef = useRef([])

  useEffect(() => {
    const currentBtn = buttonsRef.current[active]
    if (!currentBtn || !indicatorRef.current) return

    indicatorRef.current.style.width = `${currentBtn.offsetWidth}px`
    indicatorRef.current.style.transform = `translateX(${currentBtn.offsetLeft}px)`
  }, [active])

  return (
    <div className="bottom-nav-wrapper">
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={999}
        blur={12}
        opacity={0.85}
        className="bottom-nav-glass"
      >
        <nav className="bottom-nav">
          <div ref={indicatorRef} className="active-indicator" />

          {sections.map((section, index) => (
            <button
              key={section}
              ref={(el) => (buttonsRef.current[index] = el)}
              className="nav-item"
              onClick={() => setActive(index)}
            >
              {section}
            </button>
          ))}
        </nav>
      </GlassSurface>
    </div>
  )
}
