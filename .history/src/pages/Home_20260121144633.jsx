import BottomNav from "../components/BottomNav";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <main className="main-content">
        <p className="title-home">Nos encontre em:</p>
        <p className="subtitle-home">
          R. Xingu, 562 - São Bento Bento Gonçalves - RS
        </p>
      </main>

      <div className="logo-container">
        <img
          src="/src/assets/logo.png"
          alt="Manzo carnes y parrilla"
        />
      </div>

      <div className="buttons-container">
        <button className="bnt.primary">
          Ver Cardápio
          </button>

        <button className="bnt.secondary">
          WhatsApp
        </button>
      </div>

      <BottomNav />
    </>
  );
}
