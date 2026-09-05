import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0c0e]/80 backdrop-blur-xl border-b border-white/10 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brandmark */}
        <a
          href="#"
          className="group flex flex-col cursor-pointer"
          data-cursor="HOME"
        >
          <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white uppercase group-hover:text-[#df2531] transition-colors duration-200">
            SIDDHANT TANTARPALE
          </span>
          <span className="font-mono-tech text-[10px] text-[#8b8e9b] tracking-widest uppercase">
            SYSTEMS // MACHINE LEARNING
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-wider text-[#a0a3b1]">
          <button
            onClick={() => scrollTo("hero-track")}
            className="hover:text-white transition-colors duration-200 uppercase"
            data-cursor="VIEW"
          >
            01. VISION
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-white transition-colors duration-200 uppercase"
            data-cursor="VIEW"
          >
            02. ARCHIVE
          </button>
          <button
            onClick={() => scrollTo("arsenal")}
            className="hover:text-white transition-colors duration-200 uppercase"
            data-cursor="VIEW"
          >
            03. ARSENAL
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-white transition-colors duration-200 uppercase"
            data-cursor="VIEW"
          >
            04. SIGNAL
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Availability Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 font-mono-tech text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>AVAILABLE</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-white/10 hover:border-[#df2531]/50 hover:bg-white/5 transition-all text-white/80 hover:text-white"
            aria-label="Toggle Theme"
            data-cursor="THEME"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-[#df2531] hover:border-[#df2531] hover:text-white font-mono-tech text-xs tracking-wider uppercase transition-all duration-300"
            data-cursor="PING"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-white hover:bg-white/5"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 mt-3 space-y-4">
          <button
            onClick={() => scrollTo("hero-track")}
            className="block w-full text-left font-mono-tech text-sm tracking-widest text-[#a0a3b1] hover:text-white py-2"
          >
            01. VISION
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="block w-full text-left font-mono-tech text-sm tracking-widest text-[#a0a3b1] hover:text-white py-2"
          >
            02. ARCHIVE
          </button>
          <button
            onClick={() => scrollTo("arsenal")}
            className="block w-full text-left font-mono-tech text-sm tracking-widest text-[#a0a3b1] hover:text-white py-2"
          >
            03. ARSENAL
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="block w-full text-left font-mono-tech text-sm tracking-widest text-[#a0a3b1] hover:text-white py-2"
          >
            04. SIGNAL
          </button>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono-tech text-xs text-emerald-400">● AVAILABLE FOR ROLES</span>
            <button
              onClick={() => scrollTo("contact")}
              className="px-4 py-2 rounded-full bg-[#df2531] text-white font-mono-tech text-xs"
            >
              CONNECT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
