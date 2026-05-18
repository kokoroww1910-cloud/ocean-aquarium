"use client";

import { useMemo, useState } from "react";
import { fish, type Fish } from "@/data/fish";
import { FishCard } from "./FishCard";
import { FishSwimmer } from "./FishSwimmer";
import { Particles } from "./Particles";
import { ReefBackdrop } from "./ReefBackdrop";

export function AquariumScene() {
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null);
  const featuredFish = useMemo(() => fish, []);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-slate-950 text-white selection:bg-cyan-200/30">
      <ReefBackdrop />
      <Particles />

      <section className="pointer-events-none absolute inset-0 z-50 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 w-fit rounded-full border border-cyan-100/20 bg-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-cyan-100/80 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
              Maldives Reef No. 01
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              A private window into the Indian Ocean.
            </h1>
          </div>
          <div className="hidden rounded-3xl border border-white/15 bg-white/10 p-4 text-right text-xs uppercase tracking-[0.32em] text-cyan-50/80 shadow-2xl shadow-blue-950/20 backdrop-blur-xl md:block">
            <p>Depth 14m</p>
            <p className="mt-2 text-cyan-200/70">North Malé Atoll</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-cyan-50/75 sm:text-base">
            Click a tropical fish to reveal a refined species card. Slow currents, caustic light, and reef particles are choreographed for a calm cinematic aquarium.
          </p>
          <div className="grid grid-cols-3 gap-2 rounded-full border border-white/10 bg-slate-950/20 p-2 text-center text-[0.62rem] uppercase tracking-[0.25em] text-white/65 backdrop-blur-md">
            <span className="rounded-full bg-white/10 px-3 py-2">Reef</span>
            <span className="rounded-full bg-cyan-200/15 px-3 py-2">Lagoon</span>
            <span className="rounded-full bg-white/10 px-3 py-2">Calm</span>
          </div>
        </div>
      </section>

      <div className="absolute inset-0 z-20">
        {featuredFish.map((item) => (
          <FishSwimmer key={item.id} fish={item} onSelect={setSelectedFish} />
        ))}
      </div>

      <FishCard fish={selectedFish} onClose={() => setSelectedFish(null)} />
    </main>
  );
}
