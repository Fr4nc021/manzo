import "../styles/menu.css";
import BorderGlow from "../components/BorderGlow";
import menuCarne from "../assets/menu/carne.jpg";
import menuMassa from "../assets/menu/massa.jpg";
import menuHamburguer from "../assets/menu/haburguer.jpg";

const CARDAPIO_URL =
  "https://drive.google.com/file/d/1sfFk_r_ymmcfbNHkG0H39qrSakSPHlgL/view";

/** Mesmos parâmetros do bloco "Rodízio de Carnes Especial" em Eventos */
const MENU_RODIZIO_GLOW = {
  glowColor: "46 20 53",
  backgroundColor: "#1E1E1E",
  borderRadius: 22,
  glowRadius: 36,
  edgeSensitivity: 28,
  coneSpread: 22,
  glowIntensity: 1,
  fillOpacity: 0.42,
  animated: false,
  autoLoop: true,
  loopDurationMs: 14000,
  colors: ["#A09570", "#C4B896", "#8B7D5C"],
};

const MENU_PHOTOS = [
  { src: menuHamburguer, alt: "Hambúrguer Manzo" },
  { src: menuMassa, alt: "Massa no cardápio Manzo" },
  { src: menuCarne, alt: "Carne na parrilla Manzo" },
];

export default function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h1 className="menu-title">Nosso Menu</h1>
        <p className="menu-description">
          Seleção especial de carnes nobres e pratos tradicionais da parrilla,
          preparados com técnica e paixão.
        </p>
        <a
          href={CARDAPIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-cta-button"
        >
          <span>Acessar cardápio completo</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15L15 5M15 5H5M15 5V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="menu-photo-block">
          <div className="menu-photo-row">
            {MENU_PHOTOS.map(({ src, alt }, index) => {
              const isLast = index === MENU_PHOTOS.length - 1;
              return (
                <div
                  key={src}
                  className={
                    isLast
                      ? "menu-photo-square menu-photo-square--with-sticker"
                      : "menu-photo-square"
                  }
                >
                  <div className="menu-photo-square__crop">
                    <img src={src} alt={alt} loading="lazy" />
                  </div>
                  {isLast && (
                    <a
                      href="#reserva"
                      className="menu-rodizio-sticker-link"
                      title="Consultar disponibilidade do rodízio na reserva"
                    >
                      <BorderGlow
                        className="menu-rodizio-border-glow"
                        {...MENU_RODIZIO_GLOW}
                      >
                        <div className="menu-rodizio-sticker">
                          <span className="menu-rodizio-sticker__title">
                            Sequência
                          </span>
                          <span className="menu-rodizio-sticker__line">
                            Consulte disponibilidade
                          </span>
                        </div>
                      </BorderGlow>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
