import { useState, useRef, useEffect } from "react";
import GlassSurface from "./GlassSurface";
import "../styles/bottomNav.css";

const sections = ["Home", "Menu", "Eventos", "Espaço"];

/** IDs na página (ordem dos botões); devem existir no DOM. */
const SECTION_IDS = ["home", "menu", "eventos", "espaco"];

const MOBILE_NAV_MQ = "(max-width: 768px)";

function initialNavRevealed() {
  if (typeof window === "undefined") return true;
  return !window.matchMedia(MOBILE_NAV_MQ).matches;
}

export default function BottomNav() {
  const [navRevealed, setNavRevealed] = useState(initialNavRevealed);
  const [active, setActive] = useState(0);
  const indicatorRef = useRef(null);
  const buttonsRef = useRef([]);
  const labelsRef = useRef([]);

  const scrollToSection = (index) => {
    const id = SECTION_IDS[index];
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(index);
  };

  useEffect(() => {
    const updateIndicator = () => {
      const currentBtn = buttonsRef.current[active];
      const currentLabel = labelsRef.current[active];
      const indicator = indicatorRef.current;

      if (!currentBtn || !indicator) return;

      const nav = currentBtn.closest('.bottom-nav');
      if (!nav) return;

      // Alinha o fio dourado apenas com a largura do texto, não do botão inteiro
      const target = currentLabel ?? currentBtn;
      const navRect = nav.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      indicator.style.width = `${targetRect.width}px`;
      indicator.style.transform = `translateX(${targetRect.left - navRect.left}px)`;
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [active]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);

    const revealIfNeeded = () => {
      if (!mq.matches || window.scrollY > 16) setNavRevealed(true);
    };

    const onMqChange = () => {
      if (!mq.matches) setNavRevealed(true);
    };

    revealIfNeeded();
    window.addEventListener("scroll", revealIfNeeded, { passive: true });
    mq.addEventListener("change", onMqChange);
    return () => {
      window.removeEventListener("scroll", revealIfNeeded);
      mq.removeEventListener("change", onMqChange);
    };
  }, []);

  useEffect(() => {
    const docTop = (el) => {
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY;
    };

    const resolveActiveIndex = () => {
      const y = window.scrollY + window.innerHeight * 0.25;
      const home = document.getElementById("home");
      const menu = document.getElementById("menu");
      const eventos = document.getElementById("eventos");
      const espaco = document.getElementById("espaco");
      if (!home || !menu || !eventos || !espaco) return undefined;

      if (y < docTop(menu)) return 0;
      if (y < docTop(eventos)) return 1;
      if (y < docTop(espaco)) return 2;
      return 3;
    };

    const onScroll = () => {
      setActive((prev) => {
        const next = resolveActiveIndex();
        return next === undefined ? prev : next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrapperClass = [
    "bottom-nav-wrapper",
    navRevealed ? "bottom-nav-wrapper--visible" : "bottom-nav-wrapper--pre-scroll",
  ].join(" ");

  return (
    <GlassSurface
      className={wrapperClass}
      width="520px"
      height={64}
      borderRadius={999}
      blur={20}
      backgroundOpacity={0.15}
      saturation={1.4}
      brightness={0.85}
      padding="8px"
    >
      <nav className="bottom-nav">
        <span ref={indicatorRef} className="active-indicator" />
        
        {sections.map((section, index) => (
          <button
            key={section}
            ref={(el) => (buttonsRef.current[index] = el)}
            className={`nav-item ${active === index ? "active" : ""}`}
            onClick={() => scrollToSection(index)}
          >
            <span
              className="nav-item-label"
              ref={(el) => (labelsRef.current[index] = el)}
            >
              {section}
            </span>
          </button>
        ))}
      </nav>
    </GlassSurface>
  );
}
