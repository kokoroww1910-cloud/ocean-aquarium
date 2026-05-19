"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { diverCamera } from "@/lib/ocean/camera";
import { maldivesShallowReef } from "@/lib/ocean/environment";
import { ambientLight, diverLight, sunLight } from "@/lib/ocean/lighting";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { DiverLight } from "./DiverLight";
import { FishSystem } from "./FishSystem";
import { Water } from "./Water";

export function OceanScene() {
  const [diverLightEnabled, setDiverLightEnabled] = useState(false);
  const [lightDistance, setLightDistance] = useState(diverLight.defaultDistance);
  const [language, setLanguage] = useState<"zh" | "en">("zh");

  const copy = {
    title: language === "zh" ? "马尔代夫浅海仿真" : "Maldives Shallow Reef Simulation",
    subtitle:
      language === "zh"
        ? "引擎级 3D 海洋系统基础版本 · 可扩展生物、环境与潜水员视角"
        : "Engine-grade 3D ocean foundation · extensible species, environment, and diver camera",
    light: language === "zh" ? "潜水灯" : "Diver Light",
    range: language === "zh" ? "范围" : "Range",
    off: language === "zh" ? "关闭" : "Off",
    on: language === "zh" ? "开启" : "On",
  };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#03172f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-15%,rgba(123,244,255,0.5),transparent_28%),linear-gradient(180deg,#48c7d6_0%,#0a6f91_34%,#063b63_66%,#03172f_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.48),transparent_32%,transparent_68%,rgba(2,6,23,0.52))]" />

      <Canvas
        shadows
        camera={{ position: diverCamera.position, fov: diverCamera.fov, near: diverCamera.near, far: diverCamera.far }}
        className="relative z-10"
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={[maldivesShallowReef.waterDeepColor]} />
        <fog attach="fog" args={[maldivesShallowReef.fogColor, maldivesShallowReef.fogNear, maldivesShallowReef.fogFar]} />
        <ambientLight color={ambientLight.color} intensity={ambientLight.intensity} />
        <directionalLight color={sunLight.color} intensity={sunLight.intensity} position={sunLight.position} castShadow />
        <DiverLight enabled={diverLightEnabled} distance={lightDistance} />
        <Water />
        <FishSystem />
        <OrbitControls
          target={diverCamera.target}
          enablePan={false}
          minDistance={diverCamera.minDistance}
          maxDistance={diverCamera.maxDistance}
          maxPolarAngle={Math.PI * 0.62}
          minPolarAngle={Math.PI * 0.28}
        />
      </Canvas>

      <section className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-cyan-50/80 shadow-2xl shadow-sky-950/30 backdrop-blur-2xl">
              Ocean Simulation Foundation
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-cyan-50/75 sm:text-base">{copy.subtitle}</p>
          </div>
          <LanguageSwitcher language={language} onChange={setLanguage} />
        </div>

        <div className="pointer-events-auto w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-sky-950/30 backdrop-blur-2xl sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/70">{copy.light}</p>
              <p className="mt-1 text-sm text-white/70">{diverLightEnabled ? copy.on : copy.off}</p>
            </div>
            <button
              type="button"
              onClick={() => setDiverLightEnabled((current) => !current)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                diverLightEnabled ? "bg-cyan-100 text-slate-950 shadow-lg shadow-cyan-200/30" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {diverLightEnabled ? copy.on : copy.off}
            </button>
          </div>
          <label className="block text-xs uppercase tracking-[0.28em] text-cyan-100/70" htmlFor="light-distance">
            {copy.range}: {lightDistance}m
          </label>
          <input
            id="light-distance"
            type="range"
            min={diverLight.minDistance}
            max={diverLight.maxDistance}
            value={lightDistance}
            onChange={(event) => setLightDistance(Number(event.target.value))}
            className="mt-3 w-full accent-cyan-100"
          />
        </div>
      </section>
    </main>
  );
}
