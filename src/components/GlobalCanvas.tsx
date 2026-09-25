import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const count = 3000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const mouse = useRef(new THREE.Vector2());

  // Generate random positions
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Smooth mouse position
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.pointer.x * state.viewport.width) / 2, 0.1);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.pointer.y * state.viewport.height) / 2, 0.1);

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(0.1, Math.cos(t));

      // Update particle positions based on time and mouse
      particle.mx += (mouse.current.x - particle.mx) * 0.01;
      particle.my += (mouse.current.y - particle.my) * 0.01;

      dummy.position.set(
        (particle.mx / 10) + a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) + b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshStandardMaterial color="#fff" roughness={0.1} metalness={0.8} transparent opacity={0.3} />
    </instancedMesh>
  );
};

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#aa3bff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff3b3b" />
        <Particles />
      </Canvas>
    </div>
  );
}
