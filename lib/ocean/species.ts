export type FishSpeed = "slow" | "medium" | "fast";

export type OceanSpecies = {
  id: string;
  name_en: string;
  name_zh: string;
  length_cm: number;
  depth_range_m: [number, number];
  speed: FishSpeed;
  reef: boolean;
};

export type SimulatedFish = OceanSpecies & {
  scaleMeters: number;
  swimRadius: number;
  swimHeight: number;
  phaseOffset: number;
};

export function toSimulatedFish(species: OceanSpecies, index: number): SimulatedFish {
  return {
    ...species,
    scaleMeters: species.length_cm / 100,
    swimRadius: 2.6 + index * 1.15,
    swimHeight: -0.25 + index * 0.34,
    phaseOffset: index * 1.9,
  };
}
