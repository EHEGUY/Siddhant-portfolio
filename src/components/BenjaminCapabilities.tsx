export default function BenjaminCapabilities() {
  const capabilities = [
    {
      title: "OmniMed Diagnostic Suite",
      type: "Computer Vision & Medical AI",
      metric: "-57% VRAM",
      desc: "Multi-modal PyTorch diagnostic platform with dynamic CUDA cache management and Grad-CAM explainable AI heatmaps.",
      tags: ["PyTorch", "Grad-CAM", "Next.js"],
    },
    {
      title: "SIDDWRITES Inference Engine",
      type: "Production LLM Serving",
      metric: "< 3.0s Latency",
      desc: "FastAPI and LLaMA 3.3 70B two-pass humanization pipeline with atomic PostgreSQL RPC transaction batching.",
      tags: ["LLaMA 3.3 70B", "FastAPI", "Supabase"],
    },
  ];

  return (
    <section className="relative w-full py-24 site-container overflow-hidden">
      {/* Top Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left: Large Orange Rounded Card (Exact from Benjamin Creative detail_29s) */}
        <div className="lg:col-span-8 bg-[#df2531] rounded-3xl p-6 sm:p-10 text-white relative shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20">
            <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Engineering Capabilities <span className="opacity-90">*</span>
            </h3>
            <span className="bg-black/20 backdrop-blur-md px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider">
              Selected 03
            </span>
          </div>

          {/* Cards Grid Inside Orange Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {capabilities.slice(0, 2).map((cap) => (
              <div
                key={cap.title}
                className="bg-black/90 rounded-2xl p-6 border border-white/15 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#df2531] mb-2">
                    <span>{cap.type}</span>
                    <span className="text-white/60">{cap.metric}</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-2">
                    {cap.title}
                  </h4>
                  <p className="font-sans text-xs text-[#a5a7b3] leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right: Editorial Quote Block */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4">
          <p className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight leading-snug mb-8">
            “Most developers make things that work. I make systems feel inevitable — where every layer, weight, and latency optimization has a deliberate purpose.”
          </p>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8b8d98]">
            <span className="text-white font-medium">SIDDHANT TANTARPALE</span>
            <span className="text-[#df2531]">/2026/</span>
          </div>
        </div>
      </div>
    </section>
  );
}
