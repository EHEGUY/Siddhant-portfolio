export default function ManifestoBanner() {
  const statementWords = [
    "COMPUTATIONAL RIGOR",
    "—",
    "RADICAL CRAFT",
    "—",
    "SUB-MILLISECOND INFERENCE",
    "—",
    "LATENT DYNAMICS",
    "—",
    "CUDA LEVEL PRECISION",
    "—",
    "ZERO ABSTRACTION BLOAT",
    "—",
  ];

  return (
    <section className="relative w-full overflow-hidden hairline-t hairline-b bg-[#0e1015] py-8 sm:py-12 select-none">
      {/* Continuous Marquee Rail */}
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 font-mono-tech text-xs sm:text-sm tracking-widest text-[#8b8e9b] uppercase">
          {statementWords.map((word, i) => (
            <span
              key={i}
              className={
                word === "—"
                  ? "text-[#df2531]"
                  : "hover:text-white transition-colors duration-200"
              }
            >
              {word}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-8 font-mono-tech text-xs sm:text-sm tracking-widest text-[#8b8e9b] uppercase">
          {statementWords.map((word, i) => (
            <span
              key={`repeat-${i}`}
              className={
                word === "—"
                  ? "text-[#df2531]"
                  : "hover:text-white transition-colors duration-200"
              }
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Editorial Core Manifesto Statement */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 mt-12 sm:mt-16 mb-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#df2531]" />
          <span className="font-mono-tech text-xs tracking-widest text-[#df2531] uppercase">
            02 // CORE PHILOSOPHY
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight uppercase max-w-4xl">
          I BELIEVE SOFTWARE SHOULD BE AS{" "}
          <span className="text-[#df2531]">VISUALLY COMPELLING</span> AS IT IS{" "}
          <span className="underline decoration-white/20 underline-offset-8">
            COMPUTATIONALLY UNCOMPROMISING.
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pt-10 border-t border-white/10 font-mono-tech text-xs text-[#a0a3b1]">
          <div>
            <span className="text-white block font-semibold mb-2">01 // FIRST-PRINCIPLES CODING</span>
            <p className="leading-relaxed text-[#8b8e9b]">
              Writing code with deep understanding of memory buffers, algorithmic complexity, and cache lines rather than relying on bloated runtime abstractions.
            </p>
          </div>
          <div>
            <span className="text-white block font-semibold mb-2">02 // LATENT EXPLORATION</span>
            <p className="leading-relaxed text-[#8b8e9b]">
              Bridging cutting-edge open weights (LLaMA, Vision Transformers) with human-centric interfaces that make complex AI models tangible and actionable.
            </p>
          </div>
          <div>
            <span className="text-white block font-semibold mb-2">03 // OBSESSIVE POLISH</span>
            <p className="leading-relaxed text-[#8b8e9b]">
              Every motion curve is tuned with physical momentum. Every layout conforms to typographical grids. The interface respects the user's attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
