import { LanguageProvider } from './contexts/LanguageContext';
import Navbar         from './components/Navbar/Navbar';
import Footer         from './components/Footer/Footer';
import LangToggle     from './components/LangToggle/LangToggle';
import Hero           from './sections/Hero/Hero';
import About          from './sections/About/About';
import Projects       from './sections/Projects/Projects';
import Experience     from './sections/Experience/Experience';
import Contact        from './sections/Contact/Contact';
import MouseTrail     from './components/MouseTrail/MouseTrail';

export default function App() {
  return (
    <LanguageProvider>
      {/* Fondos decorativos fijos */}
      <div className="bg-grid"   aria-hidden="true" />
      <div className="bg-glow-1" aria-hidden="true" />
      <div className="bg-glow-2" aria-hidden="true" />

      {/* Efecto cursor */}
      <MouseTrail />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <LangToggle />
    </LanguageProvider>
  );
}
