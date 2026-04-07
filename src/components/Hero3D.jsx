"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";
import { useRef } from "react";

function ToothModel() {
  const { scene } = useGLTF("/tooth.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive ref={ref} object={scene} scale={2.2} />
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-[500px] lg:h-[650px]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      </div>

      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />
        <pointLight position={[-2, -2, -2]} intensity={1} />

        <ToothModel />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}