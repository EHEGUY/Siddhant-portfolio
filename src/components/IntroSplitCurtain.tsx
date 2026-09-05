import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface IntroSplitCurtainProps {
  onOpening?: () => void;
}

export default function IntroSplitCurtain({ onOpening }: IntroSplitCurtainProps) {
  const [stage, setStage] = useState<"intro" | "ready" | "opening" | "done">("intro");

  useEffect(() => {
    // 1. Name smoothly glides onto the screen
    const t1 = setTimeout(() => {
      setStage("ready");
    }, 700);

    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (stage !== "ready") return;

    let triggered = false;
    const triggerOpen = () => {
      if (triggered) return;
      triggered = true;
      setStage("opening");
      if (onOpening) onOpening();
      setTimeout(() => {
        setStage("done");
      }, 1200);
    };

    // Trigger on mouse scroll, touch swipe, keydown or click
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 4) triggerOpen();
    };

    const handleTouch = () => triggerOpen();
    const handleClick = () => triggerOpen();
    const handleKey = () => triggerOpen();

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("click", handleClick, { once: true });
    window.addEventListener("keydown", handleKey, { once: true });

    // Gentle auto-open fallback if user doesn't interact after 3.5 seconds
    const fallbackTimer = setTimeout(triggerOpen, 3500);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKey);
      clearTimeout(fallbackTimer);
    };
  }, [stage, onOpening]);

  if (stage === "done") return null;

  const isOpening = stage === "opening";

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden">
      {/* TOP 50% CURTAIN - Slides UP (Crimson Red #df2531) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "-100%" : 0 }}
        transition={{
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1], // cinematic cubic-bezier
        }}
        className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-[#be1a25] to-[#df2531] border-b border-black/30 flex flex-col justify-end items-center pointer-events-auto"
        style={{
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* Subtle highlight overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Top Half Content: First Name */}
        <div className="relative z-10 pb-1.5 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight select-none drop-shadow-md"
          >
            SIDDHANT
          </motion.h1>
        </div>
      </motion.div>

      {/* BOTTOM 50% CURTAIN - Slides DOWN (Crimson Red #df2531) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? "100%" : 0 }}
        transition={{
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute bottom-0 inset-x-0 h-[50vh] bg-gradient-to-b from-[#df2531] to-[#be1a25] border-t border-black/30 flex flex-col justify-start items-center pointer-events-auto"
        style={{
          boxShadow: "0 -25px 60px rgba(0, 0, 0, 0.7)",
        }}
      >
        {/* Subtle highlight overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Bottom Half Content: Surname & Role & Scroll hint */}
        <div className="relative z-10 pt-1.5 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.94, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 select-none drop-shadow-md"
          >
            TANTARPALE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-mono text-xs sm:text-sm text-white/90 tracking-wider mb-6 font-medium"
          >
            AI &amp; SOFTWARE ENGINEER <span className="text-white/50">//</span> MUMBAI
          </motion.p>

          {/* Prompt to scroll and enter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            className="inline-flex items-center justify-center gap-2 font-mono text-[10px] sm:text-[11px] text-white bg-black/25 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 cursor-pointer shadow-lg tracking-wider"
          >
            <span>SCROLL OR CLICK TO ENTER</span>
            <span className="text-xs">↓</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
