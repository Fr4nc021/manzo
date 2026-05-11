import { useState } from 'react'
import '../styles/bottomNav.css'

const sections = [
    'Home', 
    'Menu', 
    'Espaço', 
    'Eventos'
]

export default function BottomNav() {
  const [active, setActive] = useState(0)

  return (
    <nav className="bottom-nav">
      <div
        className="active-indicator"
        style={{ transform: `translateX(${active * 100}%)` }}
      />

      {sections.map((section, index) => (
        <button
          key={section}
          className={`nav-item ${active === index ? 'active' : ''}`}
          onClick={() => setActive(index)}
        >
          {section}
        </button>
      ))}
    </nav>
  )
}
