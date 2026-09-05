export default function WireframeObject() {
  return (
    <div className="relative flex flex-col items-center justify-center p-3 select-none">
      {/* Ambient Crimson / Cyan Soft Glow Behind the 3D Star */}
      <div className="absolute w-44 h-44 bg-[#df2531]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* 3D Rotating Transparent Star Model Animation */}
      <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] flex items-center justify-center">
        <img
          src="/rotating-star.webp"
          alt="3D Rotating Glass Star"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] brightness-105"
        />
      </div>
    </div>
  );
}
