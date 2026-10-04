"use client";

import * as THREE from "three";

export default function Atmosphere() {
  return (
    <mesh scale={1.08}>
      <sphereGeometry args={[1, 128, 128]} />

      <meshPhongMaterial
        color="#4fc3f7"
        transparent
        opacity={0.15}
        side={THREE.BackSide}
      />
    </mesh>
  );
}