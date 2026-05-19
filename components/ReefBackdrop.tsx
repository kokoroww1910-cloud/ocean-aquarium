export function ReefBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(110,231,255,0.46),transparent_30%),linear-gradient(180deg,#041b3d_0%,#062f55_35%,#02162f_72%,#020817_100%)]" />
      <div className="caustics absolute inset-[-15%] opacity-55 mix-blend-screen" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(125,211,252,0.22),transparent_22%),radial-gradient(circle_at_82%_24%,rgba(45,212,191,0.18),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(8,47,73,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.54),transparent_26%,transparent_70%,rgba(2,6,23,0.62)),linear-gradient(180deg,transparent_0%,rgba(1,8,24,0.45)_80%,rgba(1,4,15,0.88)_100%)]" />

      <div className="light-column left-[12%] h-[78vh] rotate-[16deg]" />
      <div className="light-column left-[46%] h-[88vh] rotate-[7deg] animation-delay-slow" />
      <div className="light-column left-[75%] h-[70vh] rotate-[-12deg] animation-delay-slower" />

      <div className="reef-floor absolute bottom-0 left-0 right-0 h-[34vh]" />
      <div className="coral coral-a left-[6%] h-36 w-48 sm:h-52 sm:w-72" />
      <div className="coral coral-b left-[34%] h-28 w-44 sm:h-44 sm:w-64" />
      <div className="coral coral-c right-[8%] h-40 w-56 sm:h-60 sm:w-80" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
    </div>
  );
}
