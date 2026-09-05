import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function BenjaminNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 py-6 px-8 sm:px-12 lg:px-16 flex items-center justify-between pointer-events-none transition-all duration-300 bg-gradient-to-b from-black/90 via-black/40 to-transparent">
      {/* Far Left: Custom ST Intertwined Monogram Logo */}
      <div className="pointer-events-auto flex items-center shrink-0">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group block relative p-1 transition-transform duration-200 hover:scale-105"
          aria-label="Siddhant Tantarpale Home"
        >
          <div className="relative h-10 w-auto aspect-[177/237] flex items-center justify-center">
            {/* White Monogram by default */}
            <img
              src="/logo-st.png"
              alt="ST Monogram"
              className="h-full w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)] transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* Crimson Red Monogram on hover */}
            <img
              src="/logo-st-red.png"
              alt="ST Monogram Hover"
              className="absolute inset-0 h-full w-auto object-contain filter drop-shadow-[0_2px_16px_rgba(223,37,49,0.55)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </a>
      </div>

      {/* Center Nav Links: Bare Clean Typography Directly on Starry Background (NO Pill Container) */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-10 lg:gap-14 font-sans text-sm sm:text-[15px] font-normal tracking-tight select-none">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white hover:text-[#df2531] transition-colors cursor-pointer font-medium"
        >
          Home
        </button>

        <a
          href="/siddhant_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8b8d98] hover:text-white transition-colors cursor-pointer flex items-center gap-1"
        >
          <span>About / CV</span>
          <span className="text-[#8b8d98] text-xs font-serif">*</span>
        </a>

        <button
          onClick={() => scrollTo("works")}
          className="text-[#8b8d98] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <span>Works</span>
          <span className="text-white/40 text-xs font-mono">//</span>
        </button>
      </nav>

      {/* Far Right: Bare Link "Let's talk ↗" (Exact from Benjamin screenshot) */}
      <div className="pointer-events-auto hidden md:flex items-center shrink-0">
        <button
          onClick={() => scrollTo("contact")}
          className="text-[#e2e4ea] hover:text-[#df2531] transition-colors flex items-center gap-1.5 font-sans text-sm sm:text-[15px] cursor-pointer tracking-tight group"
        >
          <span>Let's talk</span>
          <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white/60 group-hover:text-[#df2531]" />
        </button>
      </div>

      {/* Mobile menu trigger */}
      <div className="pointer-events-auto md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed top-20 left-6 right-6 p-7 rounded-2xl bg-[#121316]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-5 font-sans text-base z-50 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="text-left text-white py-1 font-medium"
          >
            Home
          </button>
          <a
            href="/siddhant_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left text-[#8b8d98] py-1 flex items-center justify-between"
          >
            <span>About / CV *</span>
            <ArrowUpRight size={14} className="text-white/40" />
          </a>
          <button
            onClick={() => scrollTo("works")}
            className="text-left text-[#8b8d98] py-1"
          >
            Works //
          </button>
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => scrollTo("contact")}
              className="text-left text-[#df2531] font-medium py-2 flex items-center justify-between w-full"
            >
              <span>Let's talk</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
