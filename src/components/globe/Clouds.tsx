"use client";

import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import * as THREE from "three";

export default function Clouds() {
  const cloudRef = useRef<THREE.Mesh>(null);

  const texture = useLoader(
    TextureLoader,
    "/textures/clouds.png"
  );

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.0018;
    }
  });

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[1.01, 128, 128]} />

      <meshPhongMaterial
        map={texture}
        transparent
        opacity={0.35}
        depthWrite={false}
      />
    </mesh>
  );
}