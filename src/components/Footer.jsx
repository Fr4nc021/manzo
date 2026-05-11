import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Convite */}
        <div className="footer-invite">
          <h3 className="footer-invite-title">Venha conhecer nossa casa</h3>
          <p className="footer-invite-text">
            Uma experiência única de sabores autênticos e momentos especiais
          </p>
        </div>

      
        {/* Direitos Reservados */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Manzo. Todos os direitos reservados.</p>
        </div>

        {/* Créditos do Desenvolvedor */}
        <div className="footer-credits">
          <p>
            Página desenvolvida por{" "}
            <a
              href="https://codebyfranco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credits-link"
            >
              <span className="credits-codeby">CodeBy</span>
              <span className="credits-franco">Franco</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

