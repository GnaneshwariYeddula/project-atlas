"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import GlobeGroup from "./GlobeGroup";
import StarField from "./Stars";

export default function Globe() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
    >
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 3, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-5, -3, -5]}
        intensity={0.5}
      />

      <StarField />

<GlobeGroup />
      <OrbitControls
        enablePan={false}
        enableZoom
        enableDamping
        autoRotate={false}
      />
    </Canvas>
  );
}