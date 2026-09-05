import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Plus, Minus, CheckCircle2, Terminal } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import WireframeObject from "./WireframeObject";
import BlockReveal from "./BlockReveal";

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

interface Project {
  num: string;
  title: string;
  tag: string;
  category: string;
  year: string;
  image: string;
  summary: string;
  bullets: string[];
  techs: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    num: "(01)",
    title: "SIDDWRITES — AI Text Humanization SaaS",
    tag: "LIVE PRODUCTION",
    category: "AI Engineering // Full Stack SaaS",
    year: "2026",
    image: "/projects/siddwrites.png",
    summary:
      "A production LLM inference API using FastAPI and LLaMA 3.3 70B, delivering sub-3-second response times via a two-pass pipeline with atomic PostgreSQL RPC batching.",
    bullets: [
      "Engineered a production LLM inference API using FastAPI and LLaMA 3.3 70B, delivering sub-3-second response times via a two-pass pipeline with atomic PostgreSQL RPC batching.",
      "Deployed a Dockerized FastAPI backend on HuggingFace Spaces with a Vanilla JS frontend on Vercel; integrated Supabase auth, RLS-enforced data access, and usage-tracked free/premium tiers.",
      "Built a multi-layer prompt injection sanitization pipeline to ensure input integrity and output reliability at scale.",
      "Implemented dynamic burstiness and perplexity adjustment at inference time to produce stylistically natural output from large language models.",
    ],
    techs: ["LLaMA 3.3 70B", "FastAPI", "Supabase", "PostgreSQL", "Docker", "HuggingFace"],
    githubUrl: "https://github.com/EHEGUY/humanizer-frontend",
  },
  {
    num: "(02)",
    title: "Deepfake Detector",
    tag: "Forensics // EfficientNet",
    category: "Media Forensics / EfficientNet / Vision",
    year: "2026",
    image: "/projects/deepfake.png",
    summary:
      "Fine-tuned an EfficientNet-based binary classifier to detect GAN-manipulated video frames, achieving reliable classification of synthetic vs. genuine media on image and video inputs.",
    bullets: [
      "Fine-tuned an EfficientNet-based binary classifier to detect GAN-manipulated video frames, achieving reliable classification of synthetic vs. genuine media on image and video inputs.",
      "Built an end-to-end inference pipeline in Python that processes video frame-by-frame, extracting frequency-domain features to surface GAN artifacts invisible to the human eye.",
      "Designed a modular analysis architecture in TypeScript separating ingestion, feature extraction, and classification, enabling easy swapping of backbone models.",
    ],
    techs: ["Python", "EfficientNet", "TypeScript", "PyTorch", "OpenCV", "React.js"],
    githubUrl: "https://github.com/EHEGUY/deepfake-detector-app",
  },
  {
    num: "(03)",
    title: "OmniMed — Unified Diagnostic Suite",
    tag: "Medical AI // Multi-Modal",
    category: "Medical Imaging / PyTorch / CUDA",
    year: "2026",
    image: "/projects/omnimed.png",
    summary:
      "A multi-modal medical imaging platform supporting Neurology (MRI), Orthopaedics (X-ray), and Dermatology (Skin) using PyTorch and Next.js, enabling a single unified clinical inference interface.",
    bullets: [
      "Engineered a multi-modal medical imaging platform supporting Neurology (MRI), Orthopaedics (X-ray), and Dermatology (Skin) using PyTorch and Next.js.",
      "Implemented a Singleton Model-Loading architecture that reduced peak VRAM usage by 57%, enabling high-fidelity inference on standard 6 GB consumer GPUs.",
      "Eliminated OOM crashes through dynamic CUDA cache management, ensuring stable concurrent multi-model inference across specialties.",
      "Integrated Grad-CAM visual verification to deliver explainable AI heatmaps, improving clinical transparency and physician trust.",
    ],
    techs: ["PyTorch", "Next.js", "CUDA", "Grad-CAM", "FastAPI", "Python"],
    githubUrl: "https://github.com/EHEGUY/omnimedv1",
  },
  {
    num: "(04)",
    title: "Kalkutor — High-Precision Go Web App",
    tag: "Systems // Golang Concurrency",
    category: "Systems Engineering / Golang / Math",
    year: "2025",
    image: "/projects/kalkutor.png",
    summary:
      "A web-based computational app built with Golang, HTML5, and JavaScript. Focuses on optimised precision and speed for mathematical functions — a clean exercise in backend-driven computation.",
    bullets: [
      "Go backend ensures microsecond execution speed and precision over JavaScript's floating-point quirks.",
      "Lightweight goroutine concurrency and microsecond execution time.",
      "Clean decoupled API architecture with Docker containerization.",
    ],
    techs: ["Go (Golang)", "HTML5 Canvas", "JavaScript", "Docker", "REST API"],
    githubUrl: "https://github.com/EHEGUY/kalkutor",
  },
];

export default function BenjaminWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse cursor tracking for smooth floating preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 450, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30 });

  const updateCardPosition = (e: React.MouseEvent, isInitial = false) => {
    if (typeof window === "undefined") return;
    const cardWidth = 380;
    const cardHeight = 315;

    // Position card directly to the right of cursor
    let targetX = e.clientX + 24;
    if (targetX + cardWidth > window.innerWidth - 20) {
      targetX = e.clientX - cardWidth - 24;
    }
    targetX = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, targetX));

    // Center card vertically near cursor
    let targetY = e.clientY - cardHeight / 2;
    targetY = Math.max(20, Math.min(window.innerHeight - cardHeight - 20, targetY));

    if (isInitial) {
      mouseX.jump(targetX);
      mouseY.jump(targetY);
      springX.jump(targetX);
      springY.jump(targetY);
    } else {
      mouseX.set(targetX);
      mouseY.set(targetY);
    }
  };

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="works" className="relative w-full py-24 site-container scroll-mt-24">
      {/* Big Title with Benjamin's Signature Orange Block Curtain Reveal */}
      <div className="mb-10">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-[1.08]">
          <BlockReveal delay={0.1}>My Recently</BlockReveal>
        </h2>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          <BlockReveal delay={0.3}>Selected Works</BlockReveal>
        </h2>
      </div>

      {/* Horizontal Divider Bar */}
      <div className="w-full h-1 bg-white/20 mb-12" />

      {/* Main Grid: Left 3D Wireframe Module / Right Interactive Project Rows with Floating PIP */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative">
        
        {/* Left Column: /From zero to one/ and Rotating 3D Satellite Wireframe (from detail_07s & detail_10s) */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div>
            <span className="font-mono text-xs text-[#8b8d98] tracking-wider block mb-4">
              /From zero to one/
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#8b8d98] leading-relaxed max-w-xs mb-8">
              A curated catalog of production systems engineered from scratch — verified through benchmark metrics, low latency, and deterministic reliability.
            </p>
          </div>

          {/* 3D Rotating Satellite / Module */}
          <div className="my-6">
            <WireframeObject />
          </div>

          <div className="hidden lg:block pt-6 border-t border-white/10 font-mono text-[11px] text-[#8b8d98]">
            <span className="text-white font-medium">[ 04 SELECTED PROJECTS ]</span>
            <p className="mt-1 text-[#6e7180]">Hover any row to trigger Picture-in-Picture system inspection.</p>
          </div>
        </div>

        {/* Right Column: Clean Project Table Rows */}
        <div className="lg:col-span-8 relative">
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {projects.map((proj, idx) => {
              const isHovered = hoveredIndex === idx;
              const isOpen = openIndex === idx;

              return (
                <div
                  key={proj.title}
                  onMouseEnter={(e) => {
                    updateCardPosition(e, true);
                    setHoveredIndex(idx);
                  }}
                  onMouseMove={(e) => {
                    updateCardPosition(e, false);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group transition-colors duration-200 cursor-pointer relative ${
                    isHovered ? "bg-white/[0.03]" : ""
                  }`}
                >
                  {/* Row Header */}
                  <div
                    onClick={() => toggle(idx)}
                    className="py-5 sm:py-7 flex items-center justify-between gap-4 select-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      {/* Number with red dot on hover (exact from Benjamin) */}
                      <div className="flex items-center gap-2 font-mono text-xs text-[#8b8d98] w-12 shrink-0">
                        <span>{proj.num}</span>
                        {isHovered && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#df2531] inline-block animate-pulse" />
                        )}
                      </div>

                      <div className="truncate">
                        <h3
                          className={`font-display text-lg sm:text-2xl tracking-tight transition-colors ${
                            isHovered ? "text-white font-bold" : "text-[#d1d3dc] font-normal"
                          }`}
                        >
                          {proj.title}
                        </h3>
                        <p className="font-mono text-xs text-[#8b8d98] truncate mt-0.5 sm:hidden">
                          {proj.tag}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 font-mono text-xs text-[#8b8d98]">
                      <span className="hidden sm:inline text-white/40">{proj.year}</span>

                      {/* Small GitHub Icon button that takes user directly to repo */}
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg text-[#8b8d98] hover:text-[#df2531] hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center group/gh"
                        title="Open GitHub repository"
                        aria-label={`Open ${proj.title} on GitHub`}
                      >
                        <GithubIcon size={16} className="transition-transform duration-150 group-hover/gh:scale-115" />
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggle(idx);
                        }}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white cursor-pointer"
                        aria-label="Toggle details"
                      >
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Technical Specifications */}
                  {isOpen && (
                    <div className="pb-8 pt-2 pl-4 sm:pl-16 pr-4 sm:pr-8 border-t border-white/5 font-sans">
                      <p className="text-sm sm:text-base text-[#c8c9d4] leading-relaxed mb-6 font-normal">
                        {proj.summary}
                      </p>

                      {/* Resume Specs Box */}
                      <div className="p-5 rounded-xl bg-black/60 border border-white/10 mb-6">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#df2531] font-semibold mb-3">
                          <Terminal size={14} />
                          <span>TECHNICAL SPECIFICATIONS &amp; ARCHITECTURE</span>
                        </div>
                        <ul className="space-y-2.5">
                          {proj.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a0a2ad]">
                              <CheckCircle2 size={14} className="text-[#df2531] mt-1 shrink-0" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack & Links */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                        <div className="flex flex-wrap gap-2">
                          {proj.techs.map((t) => (
                            <span key={t} className="tag-pill">
                              {t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-accent text-xs py-2 px-5 flex items-center gap-2"
                        >
                          <GithubIcon size={14} />
                          <span>VIEW CODE ON GITHUB</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Floating Cursor-Following PIP Preview Window (Rendered via Portal to document.body to track true viewport coordinates) */}
          {mounted &&
            createPortal(
              <AnimatePresence>
                {hoveredIndex !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.12 } }}
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      x: springX,
                      y: springY,
                      pointerEvents: "none",
                    }}
                    className="z-[9999] hidden lg:block w-[380px] rounded-2xl overflow-hidden border border-white/20 bg-[#0f1013]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] select-none"
                  >
                    {/* PIP Window Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-black/70 border-b border-white/10 font-mono text-[11px]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#df2531] inline-block animate-pulse" />
                        <span className="text-white font-medium tracking-tight">
                          {projects[hoveredIndex].num} PREVIEW
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="text-[#df2531] text-[10px] font-bold">
                          {projects[hoveredIndex].tag}
                        </span>
                      </div>
                    </div>

                    {/* Real Project Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={projects[hoveredIndex].image}
                        alt={projects[hoveredIndex].title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                      {/* Caption & Quick Info */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <div className="flex flex-col min-w-0 pr-2">
                          <span className="font-display text-xs text-white font-bold tracking-tight drop-shadow-md truncate">
                            {projects[hoveredIndex].title.split("—")[0].trim()}
                          </span>
                          <span className="font-mono text-[10px] text-[#9ea0ad] truncate">
                            {projects[hoveredIndex].category}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#df2531] text-white font-mono text-[10px] font-bold shadow-lg shrink-0">
                          <span>GITHUB</span>
                          <GithubIcon size={11} />
                        </div>
                      </div>
                    </div>

                    {/* PIP Footer Metadata */}
                    <div className="px-4 py-2 bg-black/80 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/60">
                      <span>SYSTEM // SIDDHANT.DEV</span>
                      <span className="text-[#df2531] font-semibold">{projects[hoveredIndex].year}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>,
              document.body
            )}
        </div>
      </div>
    </section>
  );
}
