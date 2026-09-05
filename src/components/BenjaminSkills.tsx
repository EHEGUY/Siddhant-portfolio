import { ArrowUpRight } from "lucide-react";
import BlockReveal from "./BlockReveal";

export default function BenjaminSkills() {
  const categories = [
    {
      code: "(01)",
      name: "Model Training & Computer Vision",
      items: [
        { label: "Deep Learning & Neural Architectures", num: "1" },
        { label: "Convolutional Neural Networks (CNNs)", num: "2" },
        { label: "Transfer Learning & Fine-Tuning", num: "3" },
        { label: "Grad-CAM Visual Verification & XAI", num: "4" },
        { label: "Deepfake Detection & Media Forensics", num: "5" },
      ],
    },
    {
      code: "(02)",
      name: "Distributed Systems & Cloud Inference",
      items: [
        { label: "Python (FastAPI, NumPy, Pandas, scikit-learn)", num: "1" },
        { label: "Go / Golang (Concurrency & Goroutines)", num: "2" },
        { label: "C Language (Pointers & Memory Layout)", num: "3" },
        { label: "PostgreSQL & Atomic RPC Functions", num: "4" },
        { label: "Supabase Auth & Row-Level Security", num: "5" },
        { label: "Docker & Containerized Microservices", num: "6" },
      ],
    },
    {
      code: "(03)",
      name: "Acceleration & Hardware Optimization",
      items: [
        { label: "CUDA Dynamic Cache Management", num: "1" },
        { label: "LLaMA 3.3 70B Two-Pass Pipeline", num: "2" },
        { label: "HTML5 Canvas & Motion Physics", num: "3" },
        { label: "AWS & HuggingFace Spaces Deployment", num: "4" },
        { label: "B.Sc. AI/ML — Dr. Homi Bhabha State University", num: "5" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative w-full py-24 site-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading, (ML / SYS — 2026), Description, Arrow */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white mb-2 leading-[1.05]">
              <BlockReveal delay={0.1}>Engineering &amp;</BlockReveal><br />
              <BlockReveal delay={0.35}>
                <span className="text-[#8b8d98]">skill sets</span>
              </BlockReveal>
            </h2>

            <div className="w-full h-1 bg-white/20 my-6" />

            <span className="font-mono text-xs text-[#df2531] block mb-3 font-semibold">
              (ML / SYS — 2026)
            </span>

            <p className="font-sans text-xs sm:text-sm text-[#8b8d98] leading-relaxed max-w-sm">
              I propose an end-to-end ML &amp; systems engineering process that spans Artificial Intelligence, Computer Vision, and High-Throughput Cloud Deployments, with high-standard mathematical and architectural prudence.
            </p>
          </div>

          <div className="mt-12 hidden lg:block">
            <ArrowUpRight size={54} className="text-white/20" />
          </div>
        </div>

        {/* Right Column: Numbered Skill Categories (from frame_18s) */}
        <div className="lg:col-span-7 space-y-10">
          {categories.map((cat) => (
            <div key={cat.code} className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs text-[#df2531] font-semibold">{cat.code}</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {cat.name}
                </h3>
              </div>

              <div className="divide-y divide-white/5 font-mono text-xs text-[#a0a2ad]">
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    className="py-2.5 flex items-center justify-between hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-white/40">{item.num}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
