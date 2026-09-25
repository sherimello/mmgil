import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import imgSustain from '../assets/images/sustainability.jpg';

export default function SustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src={imgSustain} 
          alt="Sustainable steel production" 
          className="w-full h-[120%] object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">Sustainability Focus</h2>
        <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          BREATHING NEW LIFE <br className="hidden md:block"/> INTO SCRAP METAL
        </h3>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed">
          Our commitment goes beyond manufacturing. By sourcing and refining premium HMS 1 & 2 scrap, we drastically reduce our carbon footprint, creating a closed-loop ecosystem that powers tomorrow's infrastructure without exhausting today's resources.
        </p>
      </div>
    </section>
  );
}
