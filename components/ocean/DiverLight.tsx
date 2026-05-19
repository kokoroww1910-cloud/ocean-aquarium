import { useEffect, useRef } from "react";
import { Object3D, SpotLight } from "three";
import { diverLight } from "@/lib/ocean/lighting";

type DiverLightProps = {
  enabled: boolean;
  distance: number;
};

export function DiverLight({ enabled, distance }: DiverLightProps) {
  const lightRef = useRef<SpotLight>(null);
  const target = useRef<Object3D>(new Object3D());

  useEffect(() => {
    target.current.position.set(...diverLight.targetPosition);
    lightRef.current?.target.updateMatrixWorld();
  }, []);

  return (
    <group>
      <primitive object={target.current} />
      <spotLight
        ref={lightRef}
        color={diverLight.color}
        intensity={enabled ? diverLight.intensity : 0}
        distance={distance}
        angle={diverLight.angle}
        penumbra={diverLight.penumbra}
        position={diverLight.position}
        target={target.current}
        castShadow={enabled}
      />
      {enabled ? (
        <mesh position={[0, 1.2, 1.35]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[1.05, 5.8, 48, 1, true]} />
          <meshBasicMaterial color={diverLight.color} transparent opacity={0.08} depthWrite={false} />
        </mesh>
      ) : null}
    </group>
  );
}
