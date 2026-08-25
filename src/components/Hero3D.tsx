"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function FloatingLaptop({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.25) * 0.2 + mouse.x * 0.4;
    group.current.rotation.x = -0.18 + mouse.y * 0.2;
    group.current.position.y = Math.sin(t * 0.6) * 0.12;
  });
  return (
    <group ref={group} rotation={[ -0.15, 0.4, 0]}>
      {/* base glow */}
      <mesh position={[0, -0.95, 0]} rotation={[-Math.PI/2,0,0]}>
        <circleGeometry args={[1.55, 64]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.18} />
      </mesh>
      <mesh position={[0, -0.96, 0]} rotation={[-Math.PI/2,0,0]}>
        <ringGeometry args={[1.6,1.75,64]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.12} />
      </mesh>

      {/* laptop base */}
      <group position={[0, -0.15, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 0.08, 1.35]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.4} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.04, 0.08]}>
          <boxGeometry args={[2.05, 0.02, 1.0]} />
          <meshStandardMaterial color="#2a2a4a" />
        </mesh>
        {/* keyboard */}
        {Array.from({length: 28}).map((_,i)=>(
          <mesh key={i} position={[(i%7-3)*0.22, 0.065, Math.floor(i/7)*0.18 -0.22]}>
            <boxGeometry args={[0.16,0.02,0.12]} />
            <meshStandardMaterial color="#0f0f1a" />
          </mesh>
        ))}
      </group>

      {/* screen */}
      <group position={[0, 0.62, -0.62]} rotation={[ -0.18, 0, 0]}>
        <mesh>
          <boxGeometry args={[2.2, 1.35, 0.07]} />
          <meshStandardMaterial color="#0f0f1a" metalness={0.6} roughness={0.2}/>
        </mesh>
        <mesh position={[0,0,0.04]}>
          <planeGeometry args={[2.08,1.22]} />
          <meshStandardMaterial color="#09090b" emissive="#1e1b4b" emissiveIntensity={0.2} />
        </mesh>
        {/* fake code */}
        <mesh position={[-0.35, 0.22, 0.05]}>
          <planeGeometry args={[0.9,0.05]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.9}/>
        </mesh>
        <mesh position={[-0.2, 0.08, 0.05]}>
          <planeGeometry args={[1.2,0.04]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6}/>
        </mesh>
        <mesh position={[-0.15,-0.05,0.05]}>
          <planeGeometry args={[1.1,0.04]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.45}/>
        </mesh>
        <mesh position={[-0.3,-0.18,0.05]}>
          <planeGeometry args={[0.8,0.04]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.5}/>
        </mesh>
      </group>

      {/* floating cubes */}
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[1.55,0.9,0.4]}>
          <boxGeometry args={[0.28,0.28,0.28]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.6} />
        </mesh>
      </Float>
      <Float speed={1.0} rotationIntensity={0.9} floatIntensity={0.9}>
        <mesh position={[-1.4,0.55,0.6]}>
          <octahedronGeometry args={[0.22,0]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <mesh position={[1.2,-0.55,0.7]}>
        <dodecahedronGeometry args={[0.14,0]} />
        <meshStandardMaterial color="#a78bfa" />
      </mesh>
      <mesh position={[-1.1,-0.45,0.5]}>
        <tetrahedronGeometry args={[0.12,0]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180;
  const positions = useMemo(() => {
    const arr = new Float32Array(count*3);
    for(let i=0;i<count*3;i++) arr[i] = (Math.random()-0.5)*6;
    return arr;
  }, []);
  useFrame((state)=>{
    if(!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0006;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime*0.08)*0.06;
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions,3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#8b5cf6" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function Hero3D({ mouse }: { mouse: { x:number; y:number } }) {
  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1,1.8]} gl={{ antialias: true, alpha: true }} style={{ background:"transparent" }}>
        <PerspectiveCamera makeDefault position={[0,0.55,4.2]} fov={38} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4,5,3]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3,2,-2]} intensity={0.6} color="#8b5cf6" />
        <pointLight position={[3,-1,2]} intensity={0.5} color="#06b6d4" />
        <FloatingLaptop mouse={mouse} />
        <ParticleField />
        <Environment preset="city" />
        {/* subtle grid */}
        <gridHelper args={[10,20, "#ffffff", "#1f1f2e"]} position={[0,-1.05,0]} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050508]/40 via-transparent to-transparent md:hidden" />
    </div>
  );
}
