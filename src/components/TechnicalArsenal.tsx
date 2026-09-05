import { Code2, Brain, Cloud, Terminal, Sparkles, Target } from "lucide-react";

interface SkillBlock {
  category: string;
  badge: string;
  icon: any;
  items: string[];
  description: string;
}

const skillBlocks: SkillBlock[] = [
  {
    category: "PROGRAMMING LANGUAGES",
    badge: "01 // CORE",
    icon: Code2,
    items: ["Python", "Go (Golang)", "C Language", "SQL", "HTML5"],
    description: "Deep procedural and object-oriented mastery, pointer arithmetic in C, and concurrent goroutines in Go.",
  },
  {
    category: "FRAMEWORKS & LIBRARIES",
    badge: "02 // STACK",
    icon: Terminal,
    items: ["PyTorch", "FastAPI", "NumPy", "Pandas", "scikit-learn", "React.js", "Next.js", "Node.js"],
    description: "High-performance scientific computing, deep learning neural models, and modern full-stack web applications.",
  },
  {
    category: "AI & MACHINE LEARNING",
    badge: "03 // INTELLIGENCE",
    icon: Brain,
    items: ["Deep Learning", "CNNs", "Transfer Learning", "Grad-CAM", "LLM Inference", "Prompt Engineering", "Deepfake Detection"],
    description: "Multi-modal vision backbones, frequency-domain media analysis, saliency mapping, and high-throughput LLM serving.",
  },
  {
    category: "CLOUD & DEVOPS",
    badge: "04 // INFRASTRUCTURE",
    icon: Cloud,
    items: ["AWS", "Docker", "HuggingFace Spaces", "Vercel", "Supabase", "PostgreSQL"],
    description: "Containerized deployment pipelines, edge CDN routing, row-level security (RLS), and atomic database RPC.",
  },
  {
    category: "TOOLS & HARDWARE",
    badge: "05 // ACCELERATION",
    icon: Sparkles,
    items: ["CUDA", "Git", "HTML5 Canvas", "Jupyter", "Linux", "Vite"],
    description: "GPU kernel memory profiling, dynamic cache purging, version control, and interactive graphic rendering.",
  },
  {
    category: "AREAS OF INTEREST",
    badge: "06 // R&D FOCUS",
    icon: Target,
    items: [
      "Artificial Intelligence & ML",
      "Explainable AI (XAI)",
      "Computer Vision",
      "LLM Engineering",
      "Cloud Platforms & MLOps",
      "Algorithm Optimization",
    ],
    description: "Active research frontiers in neural interpretability, model distillation, and production AI reliability.",
  },
];

export default function TechnicalArsenal() {
  return (
    <section id="arsenal" className="relative w-full py-20 sm:py-28 bg-[#0b0d13] hairline-t hairline-b text-[#ededef]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono-tech text-xs text-[#df2531] font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>VERIFIED CAPABILITIES // RESUME SPECIFICATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              TECHNICAL <span className="text-[#df2531]">SKILLS.</span>
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8b8e9b] max-w-md">
            Comprehensive breakdown of languages, frameworks, cloud platforms, and specialized research areas.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.category}
                className="rounded-2xl border border-white/10 bg-[#10121a] p-6 sm:p-8 hover:border-[#df2531]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono-tech text-xs text-[#df2531] font-semibold">
                      {block.badge}
                    </span>
                    <Icon size={18} className="text-white/60" />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase mb-2">
                    {block.category}
                  </h3>

                  <p className="text-xs text-[#8b8e9b] font-normal leading-relaxed mb-6">
                    {block.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {block.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-mono-tech text-xs text-white font-medium transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
