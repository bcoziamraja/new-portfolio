import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const NeuralCluster = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  // Generate spherical fibonacci neural points
  const [positions, colors] = useMemo(() => {
    const count = 400;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#0ea5e9'); // Cyan
    const colorB = new THREE.Color('#10b981'); // Emerald
    const colorC = new THREE.Color('#8b5cf6'); // Violet

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const radius = 1.3 + (Math.sin(i * 0.2) * 0.15);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const chosenColor = i % 3 === 0 ? colorA : i % 3 === 1 ? colorB : colorC;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    const { pointer, clock } = state;
    const t = clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.15 + pointer.x * 0.5;
      pointsRef.current.rotation.x = Math.sin(t * 0.2) * 0.2 - pointer.y * 0.5;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.3;
      coreRef.current.rotation.z = Math.sin(t * 0.4) * 0.3;
      const scale = 1 + Math.sin(t * 2) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 3 + t * 0.1;
      ringRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group>
      {/* Central Pulsing Holographic Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color="#0c0a09"
          wireframe
          transparent
          opacity={0.35}
          roughness={0.2}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Orbiting Equatorial Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.55, 0.012, 12, 64]} />
        <meshBasicMaterial color="#0c0a09" transparent opacity={0.3} />
      </mesh>

      {/* Neural Point Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

export const NeuralSphereScene: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[350px] relative pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          <NeuralCluster />
        </Float>
      </Canvas>
    </div>
  );
};
