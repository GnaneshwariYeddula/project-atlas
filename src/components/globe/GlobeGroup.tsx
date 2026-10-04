"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import Earth from "./Earth";
import Clouds from "./Clouds";
import Atmosphere from "./Atmosphere";
import Markers from "./Markers";

export default function GlobeGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      <Earth />
      <Clouds />
      <Atmosphere />
      <Markers />
    </group>
  );
}