import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el) => {
        if (!el) return;
        const target = parseFloat(el.getAttribute('data-target') || '0');
        
        gsap.to(el, {
          innerHTML: target,
          duration: 2.5,
          ease: "power3.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          onUpdate: function () {
            // Format with commas if needed
            el.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toLocaleString();
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Tons of Steel Annually", target: 100000, suffix: "+" },
    { label: "Tons of Scrap Recycled", target: 50000, suffix: "+" },
    { label: "Global Partners", target: 23, suffix: "" },
    { label: "Years of Excellence", target: 3, suffix: "" },
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 bg-zinc-950 text-white border-t border-zinc-900 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-16 text-center">Impact at Scale</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-4 flex items-baseline">
                <span 
                  ref={(el) => { numbersRef.current[i] = el; }} 
                  data-target={stat.target}
                >
                  0
                </span>
                <span className="text-3xl md:text-5xl text-zinc-400 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
