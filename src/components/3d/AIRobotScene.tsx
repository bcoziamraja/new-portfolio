import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Stylized 3D AI Robot at Modern Cyber Desk
const RobotFigure = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const hologramRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { pointer, clock } = state;
    const t = clock.getElapsedTime();

    // Robot head tracks mouse smoothly with lerp
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        pointer.x * 0.7,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -pointer.y * 0.4,
        0.08
      );
    }

    // Whole body subtle breathing & floating sway
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.04 - 0.2;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.15,
        0.05
      );
    }

    // Typing simulation on keyboard
    if (leftArmRef.current && rightArmRef.current) {
      leftArmRef.current.rotation.x = -0.35 + Math.sin(t * 8) * 0.03;
      rightArmRef.current.rotation.x = -0.35 + Math.cos(t * 8.5) * 0.03;
    }

    // Holographic neural core rotation
    if (hologramRef.current) {
      hologramRef.current.rotation.y = t * 0.8;
      hologramRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.6;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.5;
    }
  });

  // Materials
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#1a1a1a',
        metalness: 0.85,
        roughness: 0.2,
      }),
    []
  );

  const whiteCeramicMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#f5f5f4',
        metalness: 0.2,
        roughness: 0.15,
      }),
    []
  );

  const deskMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0f0e0e',
        metalness: 0.4,
        roughness: 0.3,
      }),
    []
  );

  const screenMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0369a1',
        emissive: '#0284c7',
        emissiveIntensity: 1.2,
        roughness: 0.2,
      }),
    []
  );

  const visorGlowMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#38bdf8',
        emissive: '#38bdf8',
        emissiveIntensity: 2.0,
      }),
    []
  );

  const holoWireMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#38bdf8',
        wireframe: true,
        transparent: true,
        opacity: 0.65,
        emissive: '#0284c7',
        emissiveIntensity: 0.8,
      }),
    []
  );

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* ================= DESK & WORKSTATION ================= */}
      <mesh position={[0, -1.0, 0.4]} material={deskMaterial} receiveShadow>
        <boxGeometry args={[3.2, 0.1, 1.8]} />
      </mesh>

      {/* Desk edge bevel */}
      <mesh position={[0, -0.98, 1.28]} material={bodyMaterial}>
        <boxGeometry args={[3.22, 0.05, 0.04]} />
      </mesh>

      {/* Desk cylindrical legs */}
      <mesh position={[-1.4, -1.9, 0.4]} material={bodyMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 1.7]} />
      </mesh>
      <mesh position={[1.4, -1.9, 0.4]} material={bodyMaterial}>
        <cylinderGeometry args={[0.06, 0.06, 1.7]} />
      </mesh>

      {/* ================= LAPTOP ================= */}
      <group position={[0, -0.92, 0.6]}>
        {/* Laptop Base & Keyboard */}
        <mesh position={[0, 0, 0]} material={bodyMaterial}>
          <boxGeometry args={[1.0, 0.03, 0.7]} />
        </mesh>
        {/* Keyboard Trackpad */}
        <mesh position={[0, 0.018, 0.2]} material={deskMaterial}>
          <boxGeometry args={[0.35, 0.005, 0.2]} />
        </mesh>
        {/* Keyboard Area */}
        <mesh position={[0, 0.018, -0.08]} material={deskMaterial}>
          <boxGeometry args={[0.85, 0.005, 0.32]} />
        </mesh>

        {/* Laptop Screen Hinged */}
        <group position={[0, 0.02, -0.34]} rotation={[-0.26, 0, 0]}>
          {/* Screen Lid Backing */}
          <mesh position={[0, 0.35, 0]} material={bodyMaterial}>
            <boxGeometry args={[1.0, 0.7, 0.02]} />
          </mesh>
          {/* Screen Display (Emissive Glow) */}
          <mesh position={[0, 0.35, 0.012]} material={screenMaterial}>
            <boxGeometry args={[0.92, 0.62, 0.005]} />
          </mesh>
          {/* Subtle Screen Light casting on face */}
          <pointLight
            position={[0, 0.35, 0.25]}
            color="#38bdf8"
            intensity={1.8}
            distance={2.5}
          />
        </group>
      </group>

      {/* ================= FLOATING NEURAL HOLOGRAM ABOVE LAPTOP ================= */}
      <group ref={hologramRef} position={[0, -0.2, 0.5]}>
        {/* Holographic Wireframe Brain / Core */}
        <mesh material={holoWireMaterial}>
          <icosahedronGeometry args={[0.26, 1]} />
        </mesh>
        {/* Inner Glowing AI Kernel */}
        <mesh>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={2.5}
          />
        </mesh>
        {/* Orbiting Tech Rings */}
        <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[0.38, 0.008, 8, 32]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
        </mesh>
        <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[0.44, 0.006, 8, 32]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* ================= ROBOT CHARACTER ================= */}
      <group position={[0, -0.4, -0.1]}>
        {/* Torso Base */}
        <mesh position={[0, -0.15, 0]} material={whiteCeramicMaterial}>
          <cylinderGeometry args={[0.35, 0.28, 0.65, 32]} />
        </mesh>

        {/* Chest Plate with AI Core Light */}
        <mesh position={[0, 0.02, 0.28]} material={bodyMaterial}>
          <boxGeometry args={[0.36, 0.24, 0.08]} />
        </mesh>
        <mesh position={[0, 0.02, 0.33]}>
          <circleGeometry args={[0.05, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={2.5}
          />
        </mesh>

        {/* Neck Column */}
        <mesh position={[0, 0.25, 0]} material={bodyMaterial}>
          <cylinderGeometry args={[0.12, 0.14, 0.18, 24]} />
        </mesh>

        {/* Articulated Head (Tracks Mouse) */}
        <group ref={headRef} position={[0, 0.48, 0]}>
          {/* Main Helmet / Cranium */}
          <mesh material={whiteCeramicMaterial}>
            <sphereGeometry args={[0.34, 32, 32]} />
          </mesh>

          {/* Visor Cutout */}
          <mesh position={[0, 0.02, 0.22]} rotation={[0.05, 0, 0]}>
            <boxGeometry args={[0.44, 0.16, 0.16]} />
            <meshStandardMaterial color="#0c0a09" roughness={0.1} />
          </mesh>

          {/* Visor Cyan Glowing Optic Eyes */}
          <mesh position={[0, 0.02, 0.31]} material={visorGlowMaterial}>
            <boxGeometry args={[0.34, 0.05, 0.02]} />
          </mesh>

          {/* Cyber Antenna / Neural Sensor */}
          <mesh position={[0.34, 0.02, 0]} rotation={[0, 0, -Math.PI / 2]} material={bodyMaterial}>
            <cylinderGeometry args={[0.06, 0.06, 0.06, 16]} />
          </mesh>
          <mesh position={[-0.34, 0.02, 0]} rotation={[0, 0, Math.PI / 2]} material={bodyMaterial}>
            <cylinderGeometry args={[0.06, 0.06, 0.06, 16]} />
          </mesh>
        </group>

        {/* Shoulders */}
        <mesh position={[-0.42, 0.12, 0]} material={whiteCeramicMaterial}>
          <sphereGeometry args={[0.13, 24, 24]} />
        </mesh>
        <mesh position={[0.42, 0.12, 0]} material={whiteCeramicMaterial}>
          <sphereGeometry args={[0.13, 24, 24]} />
        </mesh>

        {/* Left Arm & Hand reaching to keyboard */}
        <group ref={leftArmRef} position={[-0.42, 0.12, 0]}>
          <mesh position={[0.06, -0.28, 0.22]} rotation={[-0.6, 0.2, -0.3]} material={bodyMaterial}>
            <cylinderGeometry args={[0.06, 0.05, 0.42, 16]} />
          </mesh>
          {/* Hand on keyboard */}
          <mesh position={[0.15, -0.5, 0.55]} material={whiteCeramicMaterial}>
            <boxGeometry args={[0.1, 0.04, 0.14]} />
          </mesh>
        </group>

        {/* Right Arm & Hand reaching to keyboard */}
        <group ref={rightArmRef} position={[0.42, 0.12, 0]}>
          <mesh position={[-0.06, -0.28, 0.22]} rotation={[-0.6, -0.2, 0.3]} material={bodyMaterial}>
            <cylinderGeometry args={[0.06, 0.05, 0.42, 16]} />
          </mesh>
          {/* Hand on keyboard */}
          <mesh position={[-0.15, -0.5, 0.55]} material={whiteCeramicMaterial}>
            <boxGeometry args={[0.1, 0.04, 0.14]} />
          </mesh>
        </group>
      </group>
    </group>
  );
};

export const AIRobotScene: React.FC = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0.5, 4.0], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={1024}
        />
        <directionalLight position={[-4, 3, -3]} intensity={0.5} color="#e0f2fe" />
        <pointLight position={[0, -0.2, 2.0]} intensity={0.4} color="#38bdf8" />

        {/* Interactive Robot Float Group */}
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.3}>
          <RobotFigure />
        </Float>

        {/* Ambient Neural Data Dust Particles */}
        <Sparkles
          count={45}
          scale={5.5}
          size={1.8}
          speed={0.4}
          opacity={0.5}
          color="#0ea5e9"
        />

        {/* Subtle Orbit Controls with restricted angle for natural feel */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.6}
          maxAzimuthAngle={Math.PI / 6}
          minAzimuthAngle={-Math.PI / 6}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
