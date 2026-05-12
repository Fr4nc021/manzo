import BorderGlow from "../components/BorderGlow";
import "../styles/reserva.css";
import whatsappIcon from "../assets/whatsapp.png";

/** Rotas no Google Maps até o restaurante (sem parâmetros de rastreio ?entry=…). */
const MANZO_MAPS_URL =
  "https://www.google.com/maps/dir//Manzo+Carnes+y+Parrilla,+R.+Xingu,+562+-+S%C3%A3o+Bento,+Bento+Gon%C3%A7alves+-+RS,+95703-108/@-29.1703857,-51.5255223,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x951c239c944be995:0xea0bd9b8fbf610f2!2m2!1d-51.5091207!2d-29.1708913";

const MANZO_INSTAGRAM_URL = "https://www.instagram.com/manzo_parrilla/";

/** Mesmo ícone do CTA "Acessar cardápio completo" em `Menu.jsx`. */
function ReservaExternalArrowIcon() {
  return (
    <svg
      className="reserva-info-link-hint-icon"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 15L15 5M15 5H5M15 5V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const INFO_GLOW_GOLD = {
  glowColor: "46 20 53",
  backgroundColor: "#1E1E1E",
  borderRadius: 12,
  glowRadius: 32,
  edgeSensitivity: 28,
  coneSpread: 22,
  glowIntensity: 1,
  fillOpacity: 0.42,
  animated: false,
  /** Brilho percorre a borda sozinho; não depende do mouse */
  autoLoop: true,
  loopDurationMs: 14000,
  colors: ["#A09570", "#C4B896", "#8B7D5C"],
};

export default function Reserva() {
  const infoCards = [
    {
      icon: "location",
      title: "Endereço",
      href: MANZO_MAPS_URL,
      linkHint: "Abrir rota no Google Maps",
      content: [
        "R. Xingu, 562 - São Bento",
        "Bento Gonçalves - RS",
        "95703-108"
      ]
    },
    {
      icon: "clock",
      title: "Horários",
      content: [
        "Almoço (terça a sexta): 11h30 às 13h30",
        "Almoço (sábados e domingos): 11h30 às 14h",
        "Jantar (terça a sábado): 18h30 às 22h30"
      ]
    },
    {
      icon: "instagram",
      title: "Instagram",
      href: MANZO_INSTAGRAM_URL,
      linkHint: "Abrir perfil no Instagram",
      content: [
        "@manzo_parrilla",
        "Siga-nos para novidades"
      ],
      highlight: true
    }
  ];

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "location":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#A09570"/>
          </svg>
        );
      case "clock":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#A09570"/>
          </svg>
        );
      case "instagram":
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#A09570"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="reserva" className="reserva-section">
      <div className="reserva-container">
        {/* Título */}
        <h1 className="reserva-title">Faça sua Reserva</h1>
        
        {/* Descrição */}
        <p className="reserva-description">
          Reserve sua mesa e venha viver a experiência Manzo. Estamos esperando você!
        </p>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5554933002802"
          target="_blank"
          rel="noopener noreferrer"
          className="reserva-whatsapp-button"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="reserva-whatsapp-icon"
            width={24}
            height={24}
          />
          <span>Reservar via WhatsApp</span>
        </a>

        {/* Cards de Informações */}
        <div className="reserva-info-grid">
          {infoCards.map((card, index) => {
            const CardTag = card.href ? "a" : "div";
            const linkProps = card.href
              ? {
                  href: card.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <BorderGlow
                key={index}
                className="reserva-info-border-glow"
                {...INFO_GLOW_GOLD}
                loopPhaseOffset={index * 120}
              >
                <CardTag
                  className={
                    "reserva-info-card" +
                    (card.href ? " reserva-info-card--link" : "")
                  }
                  {...linkProps}
                >
                  <div className="reserva-info-icon">{renderIcon(card.icon)}</div>
                  <h3 className="reserva-info-title">{card.title}</h3>
                  <div className="reserva-info-content">
                    {card.content.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className={
                          card.highlight && lineIndex === 0
                            ? "reserva-info-highlight"
                            : ""
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  {card.linkHint ? (
                    <p className="reserva-info-link-hint">
                      <span>{card.linkHint}</span>
                      <ReservaExternalArrowIcon />
                    </p>
                  ) : null}
                </CardTag>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}

