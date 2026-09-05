import { ArrowUpRight } from "lucide-react";
import HeroBackground from "./HeroBackground";
import InteractiveAvatarCard from "./InteractiveAvatarCard";

export default function BenjaminHero() {
  const scrollToWorks = () => {
    const el = document.getElementById("works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-28 pb-6 overflow-hidden">
      {/* 1. Full-Bleed Responsive Background Wallpaper (Auto-fits every screen ratio) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background Wallpaper"
          className="w-full h-full object-cover object-center sm:object-bottom select-none filter contrast-105"
        />

        {/* Atmospheric Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 2. Interactive Stardust & Floating Particles Overlay */}
      <HeroBackground />

      {/* 3. Hero Content Container (Exact Split Composition from reference image) */}
      <div className="site-container relative z-10 flex-1 flex flex-col justify-center my-auto py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Avatar with Beneath-Photo Reveal */}
          <div className="lg:col-span-4 max-w-sm lg:max-w-none">
            <InteractiveAvatarCard />
          </div>

          {/* Right Column: Glassmorphic Identity Card matching user reference */}
          <div className="lg:col-span-8 flex flex-col justify-center relative">
            {/* Ambient crimson orbs localized behind the glass card - subtle low opacity */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#df2531]/12 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-[#be1a25]/10 rounded-full blur-[70px] pointer-events-none" />

            {/* Glassmorphic Panel with lighter, more transparent opacity */}
            <div className="relative rounded-[26px] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-black/35 backdrop-blur-xl p-6 sm:p-8 md:p-9 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-300 hover:border-white/20">
              {/* Top ambient highlight line with softer opacity */}
              <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Top Row inside Card */}
              <div className="flex items-center justify-end mb-5 sm:mb-6 font-sans text-xs sm:text-sm text-white/70 select-none">
                <button
                  onClick={scrollToContact}
                  className="font-sans text-xs sm:text-sm text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  <span>Let’s create</span>
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </button>
              </div>

              {/* Huge Display Headline matching reference */}
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] xl:text-[3.2rem] font-bold tracking-tight text-white leading-[1.1] mb-4 drop-shadow-lg">
                Hello,<br />
                I’m Siddhant Tantarpale,<br />
                <span className="text-white">an AI &amp; Software Engineer</span><br />
                <span className="text-white/90">based in Mumbai, India.</span>
              </h1>

              {/* Student Bio */}
              <p className="font-sans text-xs sm:text-sm md:text-[15px] text-[#c4c6d4] max-w-xl leading-relaxed font-normal mb-6">
                Student at Dr. Homi Bhabha State University, diving deep into artificial intelligence and machine learning. I code in Python, C, Go, and React — and I care about building things that actually work well.
              </p>

              {/* Bottom Row inside Card */}
              <div className="flex items-center justify-end pt-4 border-t border-white/10 font-mono text-[11px] sm:text-xs text-white/40 select-none">
                <span className="tracking-wider">
                  MUMBAI, IN // 19.0760° N
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Status Bar (Exact Benjamin Layout from reference image) */}
      <div className="site-container relative z-10 pt-6 border-t border-white/10 flex items-center justify-between font-sans text-xs text-[#8b8d98] select-none">
        {/* Left */}
        <div>
          <span className="text-[#8b8d98] font-normal tracking-wider">/ 2026 /</span>
        </div>

        {/* Center */}
        <div>
          <button
            onClick={scrollToWorks}
            className="flex items-center gap-1.5 text-[#8b8d98] hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll down</span>
            <span className="text-xs">↓</span>
          </button>
        </div>

        {/* Right: Pill Button with circle arrow */}
        <div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-white/20 hover:border-white/40 text-white transition-all cursor-pointer font-sans text-[11px] sm:text-xs tracking-wider uppercase group bg-black/20 backdrop-blur-sm"
          >
            <span>START THE PROJECT</span>
            <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowUpRight size={10} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
