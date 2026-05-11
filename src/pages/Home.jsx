import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import "../styles/home.css";
import logo from "../assets/Logo.png";
import Menu from "../pages/Menu";
import Eventos from "../pages/Eventos";
import Reserva from "../pages/Reserva";

export default function Home() {
  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO / HOME */}
      <section id="home" className="home-section">
        <div className="logo-container">
          <img src={logo} alt="Manzo carnes y parrilla" />
        </div>
        <main className="main-content">
          <div className="home-address-glass">
            <p className="title-home">Nos encontre em:</p>
            <p className="subtitle-home">
              R. Xingu, 562
              <br />
              São Bento, Bento Gonçalves - RS
            </p>
          </div>


          <div className="buttons-container">
            <button
              className="btn primary"
              onClick={scrollToMenu}
            >
              Ver Cardápio
            </button>

            <a
              className="btn secondary"
              href="https://wa.me/5554933002802"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </main>
      </section>

      {/* MENU */}
      <Menu />

      {/* EVENTOS */}
      <Eventos />

      {/* RESERVA */}
      <Reserva />

      <BottomNav />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
