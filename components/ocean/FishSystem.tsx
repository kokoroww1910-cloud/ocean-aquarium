"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import fishDatabase from "@/data/fishDatabase.json";
import { type OceanSpecies, toSimulatedFish } from "@/lib/ocean/species";

const fishPalette = ["#38bdf8", "#fb923c", "#facc15"];

export function FishSystem() {
  const fishes = useMemo(
    () => (fishDatabase as unknown as OceanSpecies[]).map((species, index) => toSimulatedFish(species, index)),
    [],
  );
  const groupRefs = useRef<(Group | null)[]>([]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    fishes.forEach((fish, index) => {
      const group = groupRefs.current[index];
      if (!group) return;

      const speed = fish.speed === "slow" ? 0.18 : fish.speed === "medium" ? 0.28 : 0.4;
      const time = elapsed * speed + fish.phaseOffset;
      const radius = fish.swimRadius;

      group.position.set(Math.cos(time) * radius, fish.swimHeight + Math.sin(time * 0.7) * 0.22, -4 + Math.sin(time) * 1.2);
      group.rotation.set(0, -time + Math.PI / 2, Math.sin(time * 1.3) * 0.08);
    });
  });

  return (
    <group name="FishSystem">
      {fishes.map((fish, index) => (
        <group
          key={fish.id}
          ref={(node) => {
            groupRefs.current[index] = node;
          }}
          scale={Math.max(fish.scaleMeters * 2.8, 0.35)}
          userData={{ speciesName: fish.name_en, scaleMeters: fish.scaleMeters, movement: "orbital-placeholder" }}
        >
          <mesh castShadow>
            <sphereGeometry args={[0.42, 24, 16]} />
            <meshStandardMaterial color={fishPalette[index % fishPalette.length]} roughness={0.38} metalness={0.08} />
          </mesh>
          <mesh position={[-0.42, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <coneGeometry args={[0.28, 0.58, 3]} />
            <meshStandardMaterial color={fishPalette[index % fishPalette.length]} roughness={0.44} />
          </mesh>
          <mesh position={[0.18, 0.18, 0]} rotation={[0, 0, 0.35]}>
            <coneGeometry args={[0.12, 0.36, 3]} />
            <meshStandardMaterial color="#dffcff" transparent opacity={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
