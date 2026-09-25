import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import gsap from 'gsap';
import logoImg from '../assets/images/logo.png';

const FloatingShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[3, 1, -2]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-3, -1, -3]}>
          <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
          <meshStandardMaterial color="#666" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[0, -2, -5]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshDistortMaterial color="#222" envMapIntensity={1} metalness={1} roughness={0.1} distort={0.4} speed={2} />
        </mesh>
      </Float>
    </>
  );
};

export default function HeroSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
      );
      gsap.fromTo(subRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.8 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <FloatingShapes />
          <Environment preset="city" />
        </Canvas>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo only */}
        <div
          ref={headingRef}
          className="flex items-center justify-center"
          aria-label="MMG Ispat Ltd."
        >
          <img
            src={logoImg}
            alt="MMG"
            className="flex-shrink-0 object-contain w-[90vw] max-w-[1200px] h-auto mix-blend-normal"
          />
        </div>

        <p ref={subRef} className="mt-8 text-xl md:text-2xl font-light tracking-widest text-zinc-400 max-w-2xl">
          FORGING THE FUTURE WITH PREMIUM STEEL & REFINED SCRAP
        </p>
      </div>
    </section>
  );
}
