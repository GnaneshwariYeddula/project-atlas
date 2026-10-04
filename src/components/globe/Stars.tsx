"use client";

import { Stars } from "@react-three/drei";

export default function StarField() {
  return (
    <Stars
      radius={200}
      depth={60}
      count={8000}
      factor={6}
      saturation={0}
      fade
      speed={1}
    />
  );
}