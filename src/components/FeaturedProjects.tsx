import { ExternalLink, Sparkles, CheckCircle2, Zap } from "lucide-react";

interface ProjectItem {
  id: string;
  badge: string;
  name: string;
  role: string;
  year: string;
  headline: string;
  bullets: string[];
  techs: string[];
  highlight: string;
  githubUrl: string;
  liveUrl?: string;
}

const resumeProjects: ProjectItem[] = [
  {
    id: "omnimed",
    badge: "MEDICAL IMAGING // CLINICAL AI",
    name: "OmniMed — Unified Diagnostic Suite",
    role: "Personal Project",
    year: "2026",
    headline: "Multi-modal diagnostic suite for Neurology, Orthopaedics, and Dermatology with explainable AI.",
    bullets: [
      "Engineered a multi-modal medical imaging platform supporting Neurology (MRI), Orthopaedics (X-ray), and Dermatology (Skin) using PyTorch and Next.js, enabling a single unified clinical inference interface.",
      "Implemented a Singleton Model-Loading architecture that reduced peak VRAM usage by 57%, enabling high-fidelity inference on standard 6 GB consumer GPUs.",
      "Eliminated OOM crashes through dynamic CUDA cache management, ensuring stable concurrent multi-model inference across specialties.",
      "Integrated Grad-CAM visual verification to deliver explainable AI heatmaps, improving clinical transparency and supporting physician decision-making.",
    ],
    techs: ["PyTorch", "Next.js", "CUDA", "Grad-CAM", "FastAPI", "Python"],
    highlight: "57% Peak VRAM Reduction · Standard 6GB GPU Compatible",
    githubUrl: "https://github.com/EHEGUY/omnimedv1",
  },
  {
    id: "deepfake",
    badge: "COMPUTER VISION // FORENSICS",
    name: "Deepfake Detector",
    role: "Personal Project",
    year: "2026",
    headline: "Frame-by-frame frequency domain analysis detecting subtle GAN manipulation signatures.",
    bullets: [
      "Fine-tuned an EfficientNet-based binary classifier to detect GAN-manipulated video frames, achieving reliable classification of synthetic vs. genuine media on image and video inputs.",
      "Built an end-to-end inference pipeline in Python that processes video frame-by-frame, extracting frequency-domain features to surface GAN artifacts invisible to the human eye.",
      "Designed a modular analysis architecture in TypeScript separating ingestion, feature extraction, and classification, enabling easy swapping of backbone models.",
    ],
    techs: ["Python", "EfficientNet", "TypeScript", "OpenCV", "PyTorch", "React.js"],
    highlight: "Sub-pixel Artifact Classification · Frame-by-Frame Pipeline",
    githubUrl: "https://github.com/EHEGUY/deepfake-detector-app",
  },
  {
    id: "siddwrites",
    badge: "LLM INFERENCE // PRODUCTION SAAS",
    name: "SIDDWRITES — AI Text Humanization SaaS",
    role: "Personal Project",
    year: "2026",
    headline: "Production LLaMA 3.3 70B SaaS bypassing detection via dynamic burstiness and perplexity adjustment.",
    bullets: [
      "Engineered a production LLM inference API using FastAPI and LLaMA 3.3 70B, delivering sub-3-second response times via a two-pass pipeline with atomic PostgreSQL RPC batching.",
      "Deployed a Dockerized FastAPI backend on HuggingFace Spaces with a Vanilla JS frontend on Vercel; integrated Supabase auth, RLS-enforced data access, and usage-tracked free/premium tiers.",
      "Built a multi-layer prompt injection sanitization pipeline to ensure input integrity and output reliability at scale.",
      "Implemented dynamic burstiness and perplexity adjustment at inference time to produce stylistically natural output from large language models.",
    ],
    techs: ["LLaMA 3.3 70B", "FastAPI", "Supabase", "PostgreSQL", "Docker", "HuggingFace Spaces"],
    highlight: "Sub-3s Response Time · Atomic RPC Batching · RLS Security",
    githubUrl: "https://github.com/EHEGUY",
  },
  {
    id: "kalkutor",
    badge: "SYSTEMS ENGINEERING // CONCURRENCY",
    name: "Kalkutor — High-Precision Go Web App",
    role: "Personal Project",
    year: "2024",
    headline: "High-speed backend-driven web computation designed to eliminate client-side floating point drift.",
    bullets: [
      "Constructed a high-precision calculation engine utilizing Golang, HTML5, and JavaScript.",
      "Deliberately engineered backend mathematical processing to guarantee arbitrary precision and zero floating-point calculation errors.",
      "Built with lightweight goroutine concurrency and microsecond execution benchmarks.",
    ],
    techs: ["Go (Golang)", "HTML5 Canvas", "JavaScript", "Docker", "REST API"],
    highlight: "Zero Floating Point Drift · Microsecond Concurrency",
    githubUrl: "https://github.com/EHEGUY/kalkutor",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative w-full py-20 sm:py-28 bg-[#090a0f] text-[#ededef]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono-tech text-xs text-[#df2531] font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>PRODUCTION & RESEARCH CODEBASE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              FEATURED <span className="text-[#df2531]">PROJECTS.</span>
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8b8e9b] max-w-md">
            All projects built and shipped end-to-end spanning medical imaging, synthetic media forensics, LLM pipelines, and low-level concurrency.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {resumeProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl border border-white/10 bg-[#0f1118] p-6 sm:p-10 hover:border-[#df2531]/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono-tech text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#df2531]/15 text-[#df2531] font-semibold border border-[#df2531]/30">
                      {p.badge}
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/60">{p.role}</span>
                    <span className="text-white/40">·</span>
                    <span className="text-[#8b8e9b]">{p.year}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-2">
                    {p.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#a0a3b1] font-normal max-w-3xl">
                    {p.headline}
                  </p>
                </div>

                {/* GitHub & Live Links */}
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#df2531] text-white font-mono-tech text-xs font-semibold uppercase transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>SOURCE CODE</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Verified Technical Bullets from Resume */}
              <div className="space-y-3 mb-6 p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/5">
                <span className="font-mono-tech text-[11px] text-[#df2531] font-semibold uppercase tracking-wider block mb-1">
                  // VERIFIED RESUME SPECIFICATIONS:
                </span>
                {p.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-sm text-[#d4d6e0] leading-relaxed">
                    <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Tech Pills & Highlight */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {p.techs.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono-tech text-xs text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <Zap size={13} />
                  <span>{p.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
