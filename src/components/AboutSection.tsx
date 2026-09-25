import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current?.querySelectorAll('.word');
      
      if (chars) {
        gsap.fromTo(chars, 
          { opacity: 0.1, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 1,
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const text = "We transform raw elements into enduring strength. Specializing in high-grade steel and premium scrap like HMS 1 & 2, MMG Ispat Ltd. delivers the backbone of modern infrastructure with uncompromising precision and scale.";
  const words = text.split(' ');

  return (
    <section ref={sectionRef} className="py-32 md:py-64 px-6 md:px-12 bg-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12">Who We Are</h2>
        <div ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight">
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
