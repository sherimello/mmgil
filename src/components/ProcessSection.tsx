import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import imgScrap from '../assets/images/process_scrap.jpg';
import imgMelt from '../assets/images/process_melt.jpg';
import imgCast from '../assets/images/process_cast.jpg';
import imgRoll from '../assets/images/process_roll.jpg';

const steps = [
  {
    title: "Sourcing & Grading",
    desc: "We rigorously source premium HMS 1 & 2 scrap from certified global channels. Each batch undergoes intense radiometric and metallurgical grading.",
    img: imgScrap
  },
  {
    title: "Electric Arc Melting",
    desc: "The scrap is superheated in state-of-the-art Electric Arc Furnaces (EAF). This highly efficient process ensures maximum purity while minimizing emissions.",
    img: imgMelt
  },
  {
    title: "Continuous Casting",
    desc: "Molten steel is continuously cast into solid billets. Advanced magnetic stirring ensures a homogeneous internal structure, free of defects.",
    img: imgCast
  },
  {
    title: "Precision Rolling",
    desc: "Billets are reheated and passed through automated rolling mills, forging them into high-tensile TMT bars and structural steel with exact tolerances.",
    img: imgRoll
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      // Animate each step
      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item,
          { opacity: 0.2, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 60%",
              end: "top 40%",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-zinc-950 text-white relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-24 text-center">The Alchemy of Steel</h2>
        
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-48 bottom-0 w-px bg-zinc-800 -translate-x-1/2">
          <div ref={lineRef} className="w-full h-full bg-white origin-top"></div>
        </div>

        <div className="flex flex-col gap-24 relative">
          {steps.map((step, i) => (
            <div 
              key={i} 
              ref={(el) => { itemsRef.current[i] = el; }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center pl-12 md:pl-0">
                <div className="w-full max-w-md aspect-[4/3] overflow-hidden rounded-xl relative group">
                  <div className="absolute inset-0 bg-zinc-900 animate-pulse -z-10"></div>
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
                </div>
              </div>
              
              {/* Node on the line */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-zinc-950 bg-white -translate-x-1/2 z-10 hidden md:block"></div>

              {/* Text Side */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Phase {i + 1}</h3>
                <h4 className="text-3xl md:text-4xl font-bold mb-6">{step.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
