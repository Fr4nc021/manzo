import Home from './pages/Home'
import { useEffect } from 'react';
import bgDesktop from './assets/bg-desktop.webp'
import bgMobile from './assets/bg-mobile.webp'

export default function App() {
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      document.documentElement.style.setProperty(
        "--bg-image",
        isMobile ? `url(${bgMobile})` : `url(${bgDesktop})`
      );
      
    };

    // Definir a imagem inicial
    handleResize();

    // Atualizar ao redimensionar a janela
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <Home />
}
