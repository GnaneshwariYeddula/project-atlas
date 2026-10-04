"use client";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Earth() {
  const [colorMap, normalMap, specularMap] = useLoader(
    TextureLoader,
    [
      "/textures/earth_day.jpg",
      "/textures/earth_normal.jpg",
      "/textures/earth_specular.jpg",
    ]
  );

  return (
    <mesh>
      <sphereGeometry args={[1, 128, 128]} />

      <meshPhongMaterial
        map={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
        shininess={15}
      />
    </mesh>
  );
}