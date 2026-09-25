import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fake loading progress
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        
        // Outro animation
        gsap.to(textRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
          delay: 0.2
        });
        
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.6,
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
          }
        });
      }
      setProgress(current);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[99999] bg-zinc-950 flex flex-col items-center justify-center text-white"
    >
      <div ref={textRef} className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4">MMG Ispat</h1>
        <div className="text-8xl md:text-[150px] font-light font-mono leading-none">
          {progress}%
        </div>
        <div className="w-64 h-px bg-zinc-800 mt-12 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
