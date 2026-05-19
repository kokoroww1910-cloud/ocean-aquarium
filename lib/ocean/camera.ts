export type DiverCameraConfig = {
  position: [number, number, number];
  fov: number;
  near: number;
  far: number;
  target: [number, number, number];
  minDistance: number;
  maxDistance: number;
};

export const diverCamera: DiverCameraConfig = {
  position: [0, 1.7, 8],
  fov: 48,
  near: 0.1,
  far: 100,
  target: [0, 0.2, -2.5],
  minDistance: 4,
  maxDistance: 14,
};
