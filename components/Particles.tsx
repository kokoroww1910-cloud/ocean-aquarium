const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 19) % 101}%`,
  top: `${(index * 37) % 100}%`,
  size: `${2 + (index % 5)}px`,
  delay: `${-(index * 1.7)}s`,
  duration: `${14 + (index % 9)}s`,
}));

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle absolute rounded-full bg-cyan-100/55 shadow-[0_0_18px_rgba(186,240,255,0.65)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
