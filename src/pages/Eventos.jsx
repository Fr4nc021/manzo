import BorderGlow from "../components/BorderGlow";
import "../styles/eventos.css";
import eventoExperiencia1 from "../assets/evento/1.webp";
import eventoExperiencia2 from "../assets/evento/2.webp";
import eventoExperiencia3 from "../assets/evento/3.webp";
import espacoCardapio from "../assets/espaço/cardapiomanzo-89.webp";
import espacoBar from "../assets/espaço/IMG_4634.webp";
import espacoSalao from "../assets/espaço/IMG_4658.webp";
import espacoInaugura from "../assets/espaço/inauguracaomanzo-30 (1).webp";
import espacoInaugura2 from "../assets/espaço/inauguracaomanzo-31.webp";
import espacoDrinks from "../assets/espaço/manzodrinksteste-26.webp";

const RODIZIO_GLOW = {
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

export default function Eventos() {
  const espacoFotos = [
    { src: espacoInaugura, alt: "Ambiente do Manzo — inauguração", layout: "large" },
    { src: espacoBar, alt: "Bar ao ar livre do Manzo à noite", layout: "tall" },
    { src: espacoSalao, alt: "Salão do restaurante Manzo", layout: "tall" },
    { src: espacoDrinks, alt: "Drinks e coquetéis no Manzo", layout: "large" },
    { src: espacoInaugura2, alt: "Espaço para eventos no Manzo", layout: "large" },
    { src: espacoCardapio, alt: "Experiência gastronômica Manzo", layout: "tall" },
  ];

  const features = [
    {
      title: "Parrilla Autêntica",
      description: "Carnes nobres grelhadas no fogo, com técnica e tradição das melhores parrillas"
    },
    {
      title: "Ambiente Sofisticado",
      description: "Espaço acolhedor e elegante para momentos especiais"
    },
    {
      title: "Experiência Única",
      description: "Gastronomia de qualidade, drinks autorais e atendimento diferenciado"
    }
  ];

  return (
    <>
      <section id="eventos" className="eventos-section">
        <div className="eventos-container">
          {/* Título */}
          <h1 className="eventos-title">Faça um evento conosco</h1>
          
          {/* Descrição */}
          <p className="eventos-description">
            Transforme seu evento em uma experiência gastronômica inesquecível
          </p>

          <div
            className="eventos-hero-photos"
            aria-label="Destaques do evento"
          >
            <div className="eventos-hero-photo-wrap">
              <img
                src={eventoExperiencia1}
                alt="Evento no Manzo"
                className="eventos-hero-photo"
                width={320}
                height={320}
              />
            </div>
            <div className="eventos-hero-photo-wrap">
              <img
                src={eventoExperiencia2}
                alt="Experiência gastronômica Manzo"
                className="eventos-hero-photo"
                width={320}
                height={320}
              />
            </div>
            <div className="eventos-hero-photo-wrap">
              <img
                src={eventoExperiencia3}
                alt="Ambiente para eventos Manzo"
                className="eventos-hero-photo"
                width={320}
                height={320}
              />
            </div>
          </div>

          {/* Cards de Features */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <BorderGlow className="rodizio-border-glow" {...RODIZIO_GLOW}>
            <div className="rodizio-section">
              <h2 className="rodizio-title">Rodízio de Carnes Especial</h2>
              <p className="rodizio-description">
                Temos um rodízio de carnes especial para o seu evento.
                Uma seleção cuidadosa dos melhores cortes, preparados com a
                técnica tradicional das parrillas, garantindo sabor e qualidade
                únicos.
              </p>
            </div>
          </BorderGlow>

          <div id="espaco" className="photos-section">
            <h2 className="photos-title">Nosso Espaço</h2>
            <div className="photos-grid photos-grid--bento" aria-label="Galeria do espaço">
              {espacoFotos.map(({ src, alt, layout }, i) => (
                <figure
                  key={`espaco-${i}`}
                  className={`photo-card photo-card--${layout}`}
                >
                  <img src={src} alt={alt} className="photo-card-img" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

