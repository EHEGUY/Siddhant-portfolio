import { useRef } from "react";
import { ArrowDown, Sparkles, Terminal, ShieldAlert, Cpu } from "lucide-react";
import { useScrollVideoScrubber } from "../hooks/useScrollVideoScrubber";

interface CinematicHeroProps {
  theme: "dark" | "light";
}

export default function CinematicHero({ theme }: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoDarkRef = useRef<HTMLVideoElement | null>(null);
  const videoLightRef = useRef<HTMLVideoElement | null>(null);

  const activeVideoRef = theme === "dark" ? videoDarkRef : videoLightRef;

  const { progress, activeScene, duration } = useScrollVideoScrubber({
    containerRef,
    videoRef: activeVideoRef,
    lerpFactor: 0.1,
    scenesCount: 4,
  });

  const totalFrames = theme === "dark" ? 250 : 159;
  const currentFrame = Math.min(totalFrames, Math.floor(progress * totalFrames));
  const currentSec = (progress * duration).toFixed(2);

  const jumpToScene = (sceneIndex: number) => {
    const container = containerRef.current;
    if (!container) return;
    const containerTop = container.offsetTop;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const targetY = containerTop + (sceneIndex / 4) * totalScrollable + 20;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // 4 Scenes from Resume
  const scenes = [
    {
      badge: "01 // PROFILE SUMMARY",
      icon: Sparkles,
      title: "SIDDHANT TANTARPALE",
      highlight: "AI & MACHINE LEARNING ENGINEER",
      bio: "Second-year B.Sc. AI/ML student at Dr. Homi Bhabha State University, Mumbai. Hands-on experience building and shipping end-to-end AI systems spanning medical imaging, deepfake detection, and LLM-powered SaaS.",
      tags: ["PyTorch", "FastAPI", "CUDA", "LLaMA 3.3 70B", "Go", "Docker", "Next.js"],
      statLabel: "CORE COMPETENCY",
      statValue: "Full ML Stack Deployment",
    },
    {
      badge: "02 // OMNIMED DIAGNOSTIC SUITE",
      icon: Cpu,
      title: "MEDICAL IMAGING & CUDA",
      highlight: "-57% PEAK VRAM USAGE",
      bio: "Engineered a multi-modal clinical diagnostic platform for Neurology (MRI), Orthopaedics (X-ray), and Dermatology (Skin). Uses a Singleton Model-Loading architecture to eliminate OOM crashes and enable high-fidelity inference on 6GB consumer GPUs with Grad-CAM visual heatmaps.",
      tags: ["PyTorch", "Next.js", "CUDA Cache Manager", "Grad-CAM", "FastAPI"],
      statLabel: "VERIFIED BENCHMARK",
      statValue: "6GB Consumer GPU Compatible",
    },
    {
      badge: "03 // SYNTHETIC MEDIA & LLMS",
      icon: ShieldAlert,
      title: "DEEPFAKE & SIDDWRITES",
      highlight: "SUB-3S INFERENCE & GAN FORENSICS",
      bio: "Fine-tuned EfficientNet binary classifiers extracting frequency-domain artifacts to detect synthetic GAN video frames. Developed SiddWrites: a production SaaS running LLaMA 3.3 70B with atomic PostgreSQL RPC batching and multi-layer prompt injection sanitization.",
      tags: ["EfficientNet", "Frequency Analysis", "LLaMA 3.3", "Supabase RLS", "PostgreSQL"],
      statLabel: "SaaS RESPONSE PROFILE",
      statValue: "<3.0s Two-Pass Pipeline",
    },
    {
      badge: "04 // COMPLETE ARCHIVE",
      icon: Terminal,
      title: "EXPLORE THE WORK",
      highlight: "VERIFIED CODE & LIVE SYSTEMS",
      bio: "Continue scrolling down to explore complete project breakdowns with full architecture notes, verified code on GitHub, education coursework, and direct contact signal.",
      tags: ["GitHub @EHEGUY", "Production Projects", "Coursework", "Technical Skills"],
      statLabel: "STATUS",
      statValue: "Open for AI/ML Roles",
    },
  ];

  const current = scenes[activeScene];

  return (
    <section
      ref={containerRef}
      id="hero-track"
      className="relative w-full"
      style={{ height: "450vh" }}
      aria-label="Cinematic Video Scrollytelling"
    >
      {/* Sticky Hero Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#090a0f]">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <video
            ref={videoDarkRef}
            src="/hero-bg-dark.mp4"
            playsInline
            muted
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              theme === "dark" ? "opacity-60" : "opacity-0 pointer-events-none"
            }`}
            style={{
              filter: "brightness(0.85) contrast(1.1)",
            }}
          />

          <video
            ref={videoLightRef}
            src="/hero-bg.mp4"
            playsInline
            muted
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              theme === "light" ? "opacity-60" : "opacity-0 pointer-events-none"
            }`}
            style={{
              filter: "brightness(1.05) contrast(1.05)",
            }}
          />

          {/* Gradients to guarantee high readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090a0f]/95 via-[#090a0f]/75 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#090a0f]/90 to-transparent z-10" />
        </div>

        {/* Top HUD Telemetry */}
        <div className="absolute top-20 sm:top-24 inset-x-0 z-20 px-6 sm:px-12 flex justify-between items-center text-xs font-mono-tech text-[#8b8e9b] select-none">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-white font-medium">MUMBAI, INDIA (19.0760° N, 72.8777° E)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="hidden md:flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10">
              <span className="text-[#8b8e9b]">SCRUB:</span>
              <span className="text-white font-bold">{currentSec}s</span>
              <span className="text-white/30">/</span>
              <span>{duration.toFixed(2)}s</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10">
              <span className="text-[#8b8e9b]">FRM:</span>
              <span className="text-[#df2531] font-bold">{currentFrame}</span>
              <span className="text-white/30">/</span>
              <span>{totalFrames}</span>
            </div>
          </div>
        </div>

        {/* Content Card (Guaranteed High Contrast & Perfect Readability) */}
        <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-center">
          <div className="max-w-2xl bg-[#0d0f16]/90 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300">
            {/* Act Badge & Icon */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#df2531]/15 border border-[#df2531]/30 text-[#df2531] font-mono-tech text-xs font-semibold">
                <current.icon size={13} />
                <span>{current.badge}</span>
              </div>
              <span className="font-mono-tech text-xs text-white/50">
                SCENE {activeScene + 1} OF 4
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-2 uppercase">
              {current.title}
            </h1>

            {/* Accent Sub-Highlight */}
            <div className="font-mono-tech text-xs sm:text-sm font-bold text-[#df2531] tracking-wider uppercase mb-4">
              ✦ {current.highlight}
            </div>

            {/* Bio / Project Copy */}
            <p className="text-[#d0d3de] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {current.bio}
            </p>

            {/* Tech Tags from Resume */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs font-mono-tech text-white font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono-tech text-[#8b8e9b] block uppercase">
                  {current.statLabel}
                </span>
                <span className="text-white font-mono-tech text-xs font-bold">
                  {current.statValue}
                </span>
              </div>

              {activeScene === 3 ? (
                <button
                  onClick={scrollToProjects}
                  className="px-5 py-2.5 rounded-full bg-[#df2531] hover:bg-[#ff5533] text-white font-mono-tech text-xs font-bold uppercase transition-all shadow-[0_0_15px_rgba(255,68,34,0.4)] flex items-center gap-2"
                >
                  <span>SEE PROJECTS</span>
                  <ArrowDown size={14} />
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono-tech text-white/60">
                  <span>SCROLL DOWN TO PROGRESS</span>
                  <ArrowDown size={12} className="text-[#df2531] animate-bounce" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Interactive Scrub Control Bar */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-30 px-6 flex justify-center select-none">
          <div className="bg-[#12141c]/90 backdrop-blur-xl border border-white/15 px-4 sm:px-6 py-2.5 rounded-full flex items-center gap-4 sm:gap-6 shadow-2xl">
            {/* Act Quick-Jump Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToScene(idx)}
                  className={`font-mono-tech text-xs px-2.5 py-1 rounded-full transition-all ${
                    activeScene === idx
                      ? "bg-[#df2531] text-white font-bold shadow-[0_0_10px_#df2531]"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  aria-label={`Jump to scene ${idx + 1}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Visual Timeline Scrub Bar */}
            <div className="w-24 sm:w-36 h-2 bg-white/15 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#df2531] to-amber-400 transition-all duration-75"
                style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }}
              />
            </div>

            {/* Hint */}
            <span className="text-[11px] font-mono-tech text-white/70 hidden sm:inline">
              SCROLL DRIVEN VIDEO TIMELINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
