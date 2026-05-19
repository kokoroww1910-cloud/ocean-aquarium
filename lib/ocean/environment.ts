export type OceanEnvironment = {
  name: string;
  region: string;
  waterTopColor: string;
  waterMidColor: string;
  waterDeepColor: string;
  fogColor: string;
  fogNear: number;
  fogFar: number;
  surfaceTransparency: number;
  currentStrength: number;
};

export const maldivesShallowReef: OceanEnvironment = {
  name: "Maldives shallow reef",
  region: "North Malé Atoll",
  waterTopColor: "#56d7e8",
  waterMidColor: "#0b7fa4",
  waterDeepColor: "#03172f",
  fogColor: "#0a6f91",
  fogNear: 8,
  fogFar: 34,
  surfaceTransparency: 0.72,
  currentStrength: 0.16,
};
