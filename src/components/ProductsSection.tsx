import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import productSteelImg from '../assets/images/product_steel.jpg';
import productScrapImg from '../assets/images/product_scrap.jpg';

export default function ProductsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.product-panel');
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (containerRef.current?.offsetWidth || 0) * 2,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-black relative">
      <div className="absolute top-12 left-12 z-10 text-white mix-blend-difference">
        <h2 className="text-3xl font-bold uppercase tracking-wide">Our Materials</h2>
      </div>
      
      <div ref={panelsRef} className="flex h-full w-[200vw]">
        
        {/* Panel 1: Steel */}
        <div className="product-panel w-screen h-full flex flex-col md:flex-row items-center justify-between px-12 md:px-24 py-24 md:py-0">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white">Premium Steel</h3>
            <p className="text-lg md:text-xl text-zinc-400 max-w-md">
              High-tensile, resilient steel manufactured to the most exacting global standards. Engineered for mega-structures and extreme applications.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] flex items-center justify-center">
            <img 
              src={productSteelImg} 
              alt="Premium Steel Ingot" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>

        {/* Panel 2: HMS 1 & 2 */}
        <div className="product-panel w-screen h-full flex flex-col md:flex-row items-center justify-between px-12 md:px-24 py-24 md:py-0">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h3 className="text-5xl md:text-7xl font-bold mb-6 text-white">HMS 1 & 2 Scrap</h3>
            <p className="text-lg md:text-xl text-zinc-400 max-w-md">
              Heavy Melting Scrap graded for optimal recycling. We source and process top-tier HMS 1 and 2 to fuel sustainable steel production worldwide.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] flex items-center justify-center">
            <img 
              src={productScrapImg} 
              alt="HMS 1 & 2 Scrap Metal" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
