import React, { useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import PortfolioSection from './components/PortfolioSection.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import TopButton from './components/TopButton.jsx'
import TechMarquee from './components/TechMarquee.jsx'


function App() {
  // Botón para subir al top
  const [showTop, setShowTop] = useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Scroll animado lento al top
  const handleScrollTop = () => {
    const duration = 1200; // ms
    const start = window.scrollY;
    const startTime = performance.now();
    function animateScroll(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  };
  
  // Prevención de inspección y clic derecho
  React.useEffect(() => {
    const handleContextMenu = e => e.preventDefault();
    const handleKeyDown = e => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <main className="min-h-screen bg-[#f8f6f0] text-gray-900 font-sans">
      {/* Sección de Navbar */}
      <Navbar />
      {/* Sección de About y Hero */}
      <Hero webs={5} clientes={8} />
      {/* Sección de tecnologías */}
      <TechMarquee />
      {/* Sección de About */}
      <About />
      {/* Sección de Portfolio */}
      <PortfolioSection />
      <Footer />
      {/* Botón flotante para subir al top */}
      {showTop && (
        <TopButton onClick={handleScrollTop} />
      )}
    </main>
  )
}

export default App
