import { useState } from "react";
import { ArrowUpRight, Globe, Check, Copy } from "lucide-react";
import BenjaminMarquee from "./BenjaminMarquee";
import BlockReveal from "./BlockReveal";

export default function BenjaminFooter() {
  const [copied, setCopied] = useState(false);
  const email = "siddtantarpale@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="relative w-full pt-20 pb-12 overflow-hidden">
      {/* Upper Callout Area */}
      <div className="site-container text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white max-w-6xl mx-auto leading-[1.15] mb-10 flex flex-col items-center gap-2 sm:gap-3">
          {/* Line 1: Wipes first */}
          <div className="w-full flex justify-center">
            <BlockReveal delay={0.1} duration={0.95}>
              <span className="sm:whitespace-nowrap">Have something ambitious</span>
            </BlockReveal>
          </div>

          {/* Line 2: Wipes second */}
          <div className="w-full flex justify-center">
            <BlockReveal delay={0.95} duration={0.95}>
              <span className="sm:whitespace-nowrap">in your mind?</span>
            </BlockReveal>
          </div>

          {/* Line 3: Wipes third */}
          <div className="w-full flex justify-center">
            <BlockReveal delay={1.8} duration={0.95}>
              <span className="text-[#df2531] sm:whitespace-nowrap">Let's build it together!</span>
            </BlockReveal>
          </div>
        </h2>

        {/* Centered Pill Action */}
        <div className="flex justify-center mb-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#17181c] border border-white/20 hover:border-[#df2531] text-white hover:text-[#df2531] font-mono text-xs uppercase tracking-wider transition-all shadow-xl"
          >
            <span>START THE PROJECT</span>
            <ArrowUpRight size={14} className="text-[#df2531]" />
          </a>
        </div>
      </div>

      {/* Signature Orange Marquee Ticker 2 (from detail_44s / detail_45.5s) */}
      <BenjaminMarquee
        items={["Let's connect", "Let's connect", "Let's connect"]}
        className="bg-[#df2531] text-white py-4 sm:py-6 my-12"
      />

      {/* Bottom Colophon Grid (Exact from detail_45.5s) */}
      <div className="site-container pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-mono text-xs">
        
        {/* Left: Boxed Technical Location Badge */}
        <div>
          <div className="border border-white/20 inline-block mb-3 bg-black/40">
            <div className="px-3 py-1.5 border-b border-white/20 text-white font-medium">
              MUMBAI, MAHARASHTRA
            </div>
            <div className="flex">
              <div className="px-2.5 py-1.5 border-r border-white/20 flex items-center justify-center text-white/70">
                <Globe size={13} />
              </div>
              <div className="px-3 py-1.5 border-r border-white/20 text-white/80">
                WORKING GLOBALLY
              </div>
              <div className="px-2.5 py-1.5 text-[#df2531] font-bold">
                IND
              </div>
            </div>
          </div>
          <p className="text-[11px] text-[#8b8d98]">
            ©2026 SIDDHANT, ALL RIGHTS RESERVED
          </p>
        </div>

        {/* Right: Socials and Email Copy */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          <div className="flex items-center gap-6 text-[#a0a2ad]">
            <a
              href="https://github.com/EHEGUY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/siddhant-tantarpale-620375271/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-[#df2531] hover:underline cursor-pointer"
          >
            <span>{email}</span>
            {copied ? <Check size={12} /> : <Copy size={12} />}
          </button>
        </div>
      </div>
    </footer>
  );
}
