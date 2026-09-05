import AsciiTerrain from "./AsciiTerrain";
import BlockReveal from "./BlockReveal";

export default function BenjaminManifesto() {
  return (
    <section className="relative w-full pt-32 pb-24 site-container" id="achievement">
      {/* Editorial Open-Source Achievement Callout */}
      <div className="max-w-5xl mb-12">
        <div className="flex items-center gap-2.5 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-[#df2531] shadow-[0_0_8px_#df2531]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#8b8d98]">
            (Open Source Achievement // Honors)
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
          <BlockReveal delay={0.1}>GirlScript Summer of Code (GSSoC)</BlockReveal>{" "}
          <BlockReveal delay={0.35}>
            — Ranked <span className="text-[#df2531]">#567 globally</span>
          </BlockReveal>
        </h2>

        <p className="font-sans text-lg sm:text-xl text-[#8b8d98] max-w-3xl leading-relaxed font-light mb-8">
          Selected contributor to GSSoC, ranked in the top 5% of participants from a
          global pool of 40,000+ open-source contributors. Actively contributing to
          real-world open-source projects.
        </p>

        {/* High-Impact Stat Badges */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs font-mono text-white flex items-center gap-2">
            <span className="text-[#df2531]">GLOBAL RANK</span>
            <span className="text-white font-semibold">#567</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs font-mono text-white flex items-center gap-2">
            <span className="text-[#df2531]">PERCENTILE</span>
            <span className="text-white font-semibold">Top 5%</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs font-mono text-white flex items-center gap-2">
            <span className="text-[#df2531]">APPLICANT POOL</span>
            <span className="text-white font-semibold">40,000+</span>
          </div>
          <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-xs font-mono text-white flex items-center gap-2">
            <span className="text-[#df2531]">STATUS</span>
            <span className="text-white font-semibold">Active Contributor</span>
          </div>
        </div>
      </div>

      {/* ASCII Shaded Terrain Canvas with Overlaid Slogans */}
      <AsciiTerrain />
    </section>
  );
}
