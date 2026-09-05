import { useEffect, useRef } from "react";

export default function FilmGrain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = 256);
    let height = (canvas.height = 256);
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    let frameCount = 0;

    const renderNoise = () => {
      // Throttle noise generation to every 3rd frame (~20-25fps) to keep CPU <0.1%
      frameCount++;
      if (frameCount % 3 === 0) {
        for (let i = 0; i < data.length; i += 4) {
          const val = (Math.random() * 255) | 0;
          data[i] = val;
          data[i + 1] = val;
          data[i + 2] = val;
          data[i + 3] = 16; // ultra-subtle opacity
        }
        ctx.putImageData(imgData, 0, 0);
      }
      animId = requestAnimationFrame(renderNoise);
    };

    renderNoise();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-35 mix-blend-overlay"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "repeat",
      }}
      aria-hidden="true"
    />
  );
}
