import { useState, useEffect } from "react";
import { Copy, Check, ArrowUpRight, Mail, Send, MapPin, Sparkles } from "lucide-react";

export default function DirectSignal() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  const email = "siddtantarpale@gmail.com";
  const github = "https://github.com/EHEGUY";

  // Live Mumbai Time Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  return (
    <footer id="contact" className="relative w-full bg-[#07080c] hairline-t py-20 sm:py-28 text-[#ededef]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Contact Card */}
        <div className="rounded-3xl border border-white/10 bg-[#0d0f16] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 mb-4 font-mono-tech text-xs text-[#df2531] font-semibold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>CONTACT &amp; COLLABORATION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            GET IN TOUCH WITH <br />
            <span className="text-[#df2531]">SIDDHANT TANTARPALE.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a0a3b1] font-normal max-w-2xl leading-relaxed mb-8">
            Second-year B.Sc. AI/ML student at Dr. Homi Bhabha State University with hands-on experience in PyTorch, FastAPI, and production ML deployment. Open for AI/ML engineering roles, research opportunities, and impactful projects.
          </p>

          {/* Interactive Email Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl mb-10">
            <div className="flex-1 flex items-center justify-between px-5 py-3.5 rounded-xl border border-white/15 bg-black/50 font-mono-tech text-sm text-white">
              <div className="flex items-center gap-3 truncate">
                <Mail size={16} className="text-[#df2531] shrink-0" />
                <span className="truncate">{email}</span>
              </div>

              <button
                onClick={handleCopy}
                className="ml-3 p-2 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Copy Email Address"
                title="Copy Email"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#df2531] hover:bg-[#ff5533] text-white font-mono-tech text-xs tracking-wider uppercase font-bold transition-all shadow-[0_0_15px_rgba(255,68,34,0.3)]"
            >
              <span>SEND EMAIL</span>
              <Send size={14} />
            </a>
          </div>

          {copied && (
            <div className="font-mono-tech text-xs text-emerald-400 -mt-6 mb-8 flex items-center gap-2">
              <Check size={14} />
              <span>COPIED TO CLIPBOARD ({email})</span>
            </div>
          )}

          {/* Metadata Row */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-tech text-xs">
            <div>
              <span className="text-[#8b8e9b] block uppercase text-[10px] mb-1">LOCATION & LOCAL TIME</span>
              <span className="text-white font-medium flex items-center gap-1.5">
                <MapPin size={13} className="text-[#df2531]" />
                Mumbai, India · {time ? `${time} IST` : "UTC+05:30"}
              </span>
            </div>

            <div>
              <span className="text-[#8b8e9b] block uppercase text-[10px] mb-1">GITHUB CODEBASE</span>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#df2531] transition-colors flex items-center gap-1.5 font-medium"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/EHEGUY</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div>
              <span className="text-[#8b8e9b] block uppercase text-[10px] mb-1">STATUS</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>OPEN TO AI/ML ROLES &amp; RESEARCH</span>
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[#8b8e9b]">
          <div>
            © 2026 SIDDHANT TANTARPALE · ALL RIGHTS RESERVED
          </div>
          <div className="text-white/40 text-center sm:text-right">
            BUILT WITH REACT 19, VITE, TAILWIND &amp; RAF SCROLL SCRUBBING
          </div>
        </div>
      </div>
    </footer>
  );
}
