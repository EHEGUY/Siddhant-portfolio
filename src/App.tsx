import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import BenjaminNav from "./components/BenjaminNav";
import BenjaminHero from "./components/BenjaminHero";
import BenjaminWorks from "./components/BenjaminWorks";
import BenjaminManifesto from "./components/BenjaminManifesto";
import BenjaminSkills from "./components/BenjaminSkills";
import BenjaminFooter from "./components/BenjaminFooter";
import IntroSplitCurtain from "./components/IntroSplitCurtain";

export default function App() {
  const [isOpening, setIsOpening] = useState(false);

  // Initialize ultra-smooth inertial momentum scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85, // Snappy & fluid without sluggish drag
      easing: (t) => 1 - Math.pow(1 - t, 3.5), // Gentle cubic deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05, // Eliminates notched mouse wheel stiffness
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] selection:bg-[#df2531] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* 50-50 Split Curtain Intro Overlay */}
      <IntroSplitCurtain onOpening={() => setIsOpening(true)} />

      {/* 1. Top Fixed Navigation */}
      <BenjaminNav />

      {/* Main Flow with Cinematic Zoom-In on Curtain Split */}
      <motion.main
        initial={{ scale: 0.9, opacity: 0.7, filter: "blur(4px)" }}
        animate={{
          scale: isOpening ? 1 : 0.9,
          opacity: isOpening ? 1 : 0.7,
          filter: isOpening ? "blur(0px)" : "blur(4px)",
        }}
        transition={{
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="origin-center"
      >
        {/* 2. Hero Section with Cyber Inset Video & Display Headline */}
        <BenjaminHero />

        {/* 3. Selected Works Section with 3D Wireframe Satellite & Hover Preview */}
        <BenjaminWorks />

        {/* 5. Editorial Manifesto & ASCII Terrain Canvas */}
        <BenjaminManifesto />

        {/* 6. Skill Sets Categorized Breakdown */}
        <BenjaminSkills />

        {/* 7. Final Callout, Connect Marquee Ribbon & Technical Colophon */}
        <BenjaminFooter />
      </motion.main>
    </div>
  );
}
