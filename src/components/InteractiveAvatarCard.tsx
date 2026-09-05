import { useState, useRef, useEffect } from "react";
import { useSpring, useMotionValue } from "framer-motion";

export default function InteractiveAvatarCard() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for cursor position (percentage coordinates)
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springConfig = { damping: 26, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const [maskPos, setMaskPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const unsubX = smoothX.on("change", (latest) => {
      setMaskPos((prev) => ({ ...prev, x: latest }));
    });
    const unsubY = smoothY.on("change", (latest) => {
      setMaskPos((prev) => ({ ...prev, y: latest }));
    });
    return () => {
      unsubX();
      unsubY();
    };
  }, [smoothX, smoothY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      mouseX.jump(xPct);
      mouseY.jump(yPct);
      setMaskPos({ x: xPct, y: yPct });
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Radial mask radius: generous 165px circle with smooth 60px feathering
  const maskRadius = isHovered ? 165 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm mx-auto aspect-[3.3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#090a0d] select-none cursor-crosshair group"
    >
      {/* 1. Underlying Layer: Siddhant's Black & White Portrait */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/avatar-bw.jpg"
          alt="Siddhant Tantarpale"
          className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* Cinematic dark vignette on underlying photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
      </div>

      {/* 2. Top Layer: Orange Stylized Character with Dynamic Inverted Mask Hole */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${maskRadius}px at ${maskPos.x}% ${maskPos.y}%, transparent 0%, transparent 60%, black 100%)`,
          maskImage: `radial-gradient(circle ${maskRadius}px at ${maskPos.x}% ${maskPos.y}%, transparent 0%, transparent 60%, black 100%)`,
          transition: "WebkitMaskImage 0.4s ease-out, maskImage 0.4s ease-out",
        }}
      >
        <img
          src="/avatar-orange.jpg"
          alt="Avatar Character"
          className="w-full h-full object-cover object-top filter saturate-110 contrast-105 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* Subtle dark gradient overlay on character */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 3. Soft Flashlight Glow / Portal Edge Ring when Hovered */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle ${maskRadius + 15}px at ${maskPos.x}% ${maskPos.y}%, rgba(223,37,49,0.18) 0%, rgba(255,255,255,0.06) 55%, transparent 100%)`,
        }}
      />

      {/* Bottom Technical Overlay Bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] select-none z-10 pointer-events-none">
        <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white font-medium tracking-wider">
          {isHovered ? "SIDDHANT TANTARPALE" : "IDENTITY"}
        </span>
        <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[#df2531] font-medium flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#df2531]" />
          {isHovered ? "REVEALED" : "HOVER TO DISCOVER"}
        </span>
      </div>

      {/* 6. Subtle glass highlight border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none transition-colors duration-300 group-hover:border-white/20" />
    </div>
  );
}
