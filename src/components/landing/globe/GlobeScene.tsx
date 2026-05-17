"use client";

import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";

const GlobeMesh = dynamic(
  () => import("./GlobeMesh").then((mod) => mod.GlobeMesh),
  { ssr: false },
);

/**
 * Full-viewport WebGL canvas hosting the hero globe.
 * Loaded client-only to avoid SSR issues with Three.js.
 */
export function GlobeScene() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#67e8f9" />
        <pointLight position={[-8, -4, -6]} intensity={0.3} color="#334155" />
        <GlobeMesh />
      </Canvas>
    </div>
  );
}

