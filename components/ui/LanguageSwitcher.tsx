type LanguageSwitcherProps = {
  language: "zh" | "en";
  onChange: (language: "zh" | "en") => void;
};

export function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  return (
    <div className="pointer-events-auto fixed right-5 top-5 z-30 flex rounded-full border border-white/15 bg-white/10 p-1 text-xs font-medium text-white/80 shadow-2xl shadow-sky-950/30 backdrop-blur-2xl">
      {(["zh", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-2 transition duration-300 ${
            language === option ? "bg-white text-slate-950 shadow-lg" : "hover:bg-white/10 hover:text-white"
          }`}
          aria-pressed={language === option}
        >
          {option === "zh" ? "中文" : "EN"}
        </button>
      ))}
    </div>
  );
}
