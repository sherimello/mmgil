import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const sectors = [
  "MEGA-STRUCTURES",
  "AEROSPACE ENGINEERING",
  "DEFENSE & BALLISTICS",
  "RENEWABLE ENERGY GRIDS",
  "MARINE VESSELS",
  "AUTOMOTIVE MANUFACTURING",
  "HIGH-SPEED RAIL NETWORKS",
  "HEAVY MACHINERY"
];

export default function ProjectsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Endless scroll logic
      const marquee = marqueeRef.current;
      if (!marquee) return;
      
      const contentWidth = marquee.scrollWidth / 2;
      
      gsap.to(marquee, {
        x: -contentWidth,
        ease: "none",
        duration: 40,
        repeat: -1,
      });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800 overflow-hidden relative z-10 flex flex-col items-center">
      <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-12">Empowering Global Sectors</h2>
      <div className="w-full flex whitespace-nowrap overflow-hidden">
        <div ref={marqueeRef} className="flex gap-16 items-center">
          {[...sectors, ...sectors].map((sector, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-white opacity-40" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                {sector}
              </span>
              <div className="w-4 h-4 bg-white rotate-45 opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
