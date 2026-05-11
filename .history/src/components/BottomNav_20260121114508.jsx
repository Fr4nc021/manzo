import GlassSurface from "./GlassSurface";

return (
  <GlassSurface className="bottom-nav-glass">
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
