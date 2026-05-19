import { useMemo } from "react";
import { Color, DoubleSide } from "three";
import { maldivesShallowReef } from "@/lib/ocean/environment";

export function Water() {
  const surfaceColor = useMemo(() => new Color(maldivesShallowReef.waterTopColor), []);
  const reefColor = useMemo(() => new Color("#0f766e"), []);

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 2.55, -3]}>
        <planeGeometry args={[34, 34, 64, 64]} />
        <meshPhysicalMaterial
          color={surfaceColor}
          transparent
          opacity={0.2}
          roughness={0.08}
          metalness={0}
          transmission={0.3}
          side={DoubleSide}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.05, -4]} receiveShadow>
        <circleGeometry args={[18, 96]} />
        <meshStandardMaterial color={reefColor} roughness={0.92} metalness={0.02} />
      </mesh>

      {[-4.8, -2.2, 1.5, 4.4].map((x, index) => (
        <mesh key={x} position={[x, -1.55 + index * 0.06, -5.8 - index * 0.9]} rotation={[0.16, 0.2 * index, -0.08]}>
          <dodecahedronGeometry args={[0.72 + index * 0.12, 1]} />
          <meshStandardMaterial color={index % 2 === 0 ? "#155e75" : "#134e4a"} roughness={0.86} />
        </mesh>
      ))}
    </group>
  );
}
