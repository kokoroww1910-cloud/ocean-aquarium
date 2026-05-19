export type SunLightConfig = {
  color: string;
  intensity: number;
  position: [number, number, number];
};

export type AmbientLightConfig = {
  color: string;
  intensity: number;
};

export type DiverLightConfig = {
  color: string;
  intensity: number;
  defaultDistance: number;
  minDistance: number;
  maxDistance: number;
  angle: number;
  penumbra: number;
  position: [number, number, number];
  targetPosition: [number, number, number];
};

export const ambientLight: AmbientLightConfig = {
  color: "#8ee7ff",
  intensity: 0.62,
};

export const sunLight: SunLightConfig = {
  color: "#dffcff",
  intensity: 2.4,
  position: [-6, 10, 4],
};

export const diverLight: DiverLightConfig = {
  color: "#e9fdff",
  intensity: 9,
  defaultDistance: 18,
  minDistance: 8,
  maxDistance: 30,
  angle: 0.42,
  penumbra: 0.78,
  position: [0, 1.2, 4.4],
  targetPosition: [0, -0.6, -6],
};
