import type { Fish } from "@/data/fish";

type FishSwimmerProps = {
  fish: Fish;
  onSelect: (fish: Fish) => void;
};

const sizeClass = {
  small: "w-24 sm:w-32",
  medium: "w-32 sm:w-44",
  large: "w-40 sm:w-56",
};

export function FishSwimmer({ fish, onSelect }: FishSwimmerProps) {
  return (
    <button
      type="button"
      aria-label={`Open details for ${fish.name}`}
      className={`fish-path ${fish.route} ${fish.depth} absolute cursor-pointer outline-none transition duration-500 hover:scale-105 focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-cyan-100/70`}
      style={{ top: fish.top, animationDelay: fish.delay }}
      onClick={() => onSelect(fish)}
    >
      <span className={`fish-float block ${sizeClass[fish.size]}`}>
        <span className={`fish fish-${fish.palette}`}>
          <span className="fish-tail" />
          <span className="fish-body">
            <span className="fish-shimmer" />
            <span className="fish-eye" />
            <span className="fish-gill" />
            <span className="fish-fin fish-fin-top" />
            <span className="fish-fin fish-fin-bottom" />
          </span>
        </span>
      </span>
    </button>
  );
}
