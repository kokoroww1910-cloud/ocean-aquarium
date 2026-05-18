import type { Fish } from "@/data/fish";

type FishCardProps = {
  fish: Fish | null;
  onClose: () => void;
};

export function FishCard({ fish, onClose }: FishCardProps) {
  return (
    <aside
      className={`fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-xl transform rounded-[2rem] border border-white/15 bg-slate-950/55 p-5 text-white shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl transition-all duration-500 sm:bottom-8 sm:right-8 sm:left-auto sm:p-6 ${
        fish ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
      aria-live="polite"
    >
      {fish ? (
        <div>
          <div className="mb-5 flex items-start justify-between gap-5">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/75">
                Species insight
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">{fish.name}</h2>
              <p className="mt-1 font-serif text-sm italic text-cyan-100/75">{fish.scientificName}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/80 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-100"
            >
              Close
            </button>
          </div>
          <p className="text-base leading-7 text-cyan-50/80">{fish.description}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs uppercase tracking-[0.22em] text-cyan-50/70">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3">Maldives</div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3">Reef</div>
            <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3">Tropical</div>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
