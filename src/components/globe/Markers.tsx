"use client";

import { useEffect, useState } from "react";
import { Sphere } from "@react-three/drei";
import { GlobeMarker } from "@/types/globe";
import { getSites } from "@/services/site";

function latLngToVector3(
  lat: number,
  lng: number,
  radius = 1.02
) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return {
    x: -(radius * Math.sin(phi) * Math.cos(theta)),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  };
}

export default function Markers() {
  const [markers, setMarkers] = useState<GlobeMarker[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await getSites();

        setMarkers(
          (res.data.sites ?? []).map((site: any) => ({
            id: site._id,
            name: site.name,
            country: site.country,
            city: site.city,
            description: site.description,
            latitude: site.latitude,
            longitude: site.longitude,
            thumbnail: site.thumbnail,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    }

    void load();
  }, []);

  return (
    <>
      {markers.map((marker) => {
        const pos = latLngToVector3(
          marker.latitude,
          marker.longitude
        );

        return (
          <Sphere
            key={marker.id}
            args={[0.02, 16, 16]}
            position={[pos.x, pos.y, pos.z]}
          >
            <meshStandardMaterial color="#ff3b30" />
          </Sphere>
        );
      })}
    </>
  );
}