"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.001;
    }
  });
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial color="#7c3aed" emissive="#6d28d9" emissiveIntensity={0.45} metalness={0.2} roughness={0.3} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.18, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.07} wireframe />
      </mesh>
      <points>
        <sphereGeometry args={[1.45, 16, 16]} />
        <pointsMaterial size={0.03} color="#a78bfa" transparent opacity={0.35} />
      </points>
    </group>
  );
}

export default function ContactOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 2, 2]} intensity={0.9} />
      <pointLight position={[-2, -1, -2]} intensity={0.6} color="#06b6d4" />
      <Orb />
    </Canvas>
  );
}
