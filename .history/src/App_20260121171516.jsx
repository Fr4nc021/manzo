import Home from './pages/Home'

export default function App() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    document.body.style.setProperty(
      "--bg-image",
      isMobile
        ? "url('/src/assets/bg-mobile.jpg')"
        : "url('/src/assets/bg-desktop.jpg')"
    );
  }, []);
  
  return <Home />
}
