import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import ProductsSection from './components/ProductsSection';
import SustainabilitySection from './components/SustainabilitySection';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProjectsMarquee from './components/ProjectsMarquee';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import GlobalCanvas from './components/GlobalCanvas';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen selection:bg-zinc-100 selection:text-zinc-900 overflow-x-hidden cursor-none">
      <Preloader />
      <CustomCursor />
      <GlobalCanvas />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProcessSection />
      <ProductsSection />
      <SustainabilitySection />
      <CapabilitiesSection />
      <ProjectsMarquee />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
