import { useState, useRef, useEffect } from "react";
import GlassSurface from "./GlassSurface";
import "../styles/bottomNav.css";

const sections = ["Home", "Menu", "Espaço", "Eventos"];

export default function BottomNav() {
  const [active, setActive] = useState(0);
  const indicatorRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const currentBtn = buttonsRef.current[active];
    const indicator = indicatorRef.current;

    if (!currentBtn || !indicator) return;

    indicator.style.width = `${currentBtn.offsetWidth}px`;
    indicator.style.transform = `translateX(${currentBtn.offsetLeft}px)`;
  }, [active]);

  return (
    <GlassSurface
      className="bottom-nav-wrapper"
      width="520px"
      height={64}
      borderRadius={999}
      blur={14}
      backgroundOpacity={0.35}
      saturation={1.6}
      brightness={55}
      padding="8px"
    >
      <nav className="bottom-nav">
        <span ref={indicatorRef} className="active-indicator" />

        {sections.map((section, index) => (
          <button
            key={section}
            ref={(el) => (buttonsRef.current[index] = el)}
            className={`nav-item ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {section}
          </button>
        ))}
      </nav>
    </GlassSurface>
  );
}
