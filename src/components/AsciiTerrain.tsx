import { useEffect, useRef } from "react";

export default function AsciiTerrain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const chars = [" ", ".", ":", "-", "+", "=", "%", "#", "$", "@"];

    let cols = 80;
    let rows = 28;
    const charW = 14;
    const charH = 16;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.clientWidth || 1000;
      canvas.height = 420;
      cols = Math.floor(canvas.width / charW);
      rows = Math.floor(canvas.height / charH);
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const render = () => {
      ctx.fillStyle = "#0c0d10";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '12px "JetBrains Mono", monospace';
      time += 0.03;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Compute undulating wavy elevation
          const nx = c / cols;
          const ny = r / rows;
          const wave1 = Math.sin(nx * 6 + time) * Math.cos(ny * 4 + time * 0.7);
          const wave2 = Math.sin((nx + ny) * 5 - time * 0.5);
          const val = (wave1 + wave2 + 2) / 4; // 0 to 1

          const charIdx = Math.floor(val * (chars.length - 1));
          const char = chars[charIdx];

          // Shade characters in crimson red palette (#df2531)
          const redIntensity = Math.sin(nx * 3 + ny * 3 + time) * 0.5 + 0.5;
          if (val > 0.65) {
            ctx.fillStyle = `rgba(223, 37, 49, ${0.45 + redIntensity * 0.45})`;
          } else if (val > 0.4) {
            ctx.fillStyle = `rgba(180, 25, 35, ${0.3 + redIntensity * 0.35})`;
          } else {
            ctx.fillStyle = `rgba(120, 20, 30, ${0.2 + redIntensity * 0.25})`;
          }

          ctx.fillText(char, c * charW, r * charH);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 my-8 shadow-2xl">
      <canvas ref={canvasRef} className="w-full block" />
      
      {/* Centered Typography Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 sm:p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-1.5 sm:space-y-3">
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl leading-none">
            I build things because
          </p>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#df2531] drop-shadow-2xl leading-none">
            I'm
          </p>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl leading-none">
            curious, and because
          </p>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl leading-none">
            I can't not <span className="text-[#df2531]">.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
