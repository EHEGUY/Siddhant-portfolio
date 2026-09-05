import { GraduationCap, BookOpen, CheckCircle } from "lucide-react";

export default function TimelineSection() {
  const coursework = [
    "Machine Learning Algorithms",
    "Deep Learning",
    "Computer Vision",
    "Data Structures & Algorithms",
    "Statistics for AI",
    "Cloud Computing",
  ];

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#090a0f] text-[#ededef]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono-tech text-xs text-[#df2531] font-semibold uppercase tracking-wider">
              <GraduationCap size={15} />
              <span>ACADEMIC FOUNDATION & DEPLOYMENT MILESTONES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              EDUCATION & <span className="text-[#df2531]">BACKGROUND.</span>
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#8b8e9b] max-w-md">
            Formal computational and mathematical coursework combined with rigorous production engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="rounded-3xl border border-white/10 bg-[#0e1017] p-8 sm:p-12 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#df2531] font-semibold uppercase mb-2">
                <span>DEGREE PROGRAM</span>
                <span className="text-white/30">·</span>
                <span className="text-white/70">2025 — PRESENT</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase mb-2">
                Bachelor of Science — Artificial Intelligence &amp; Machine Learning
              </h3>

              <div className="font-mono-tech text-sm text-[#8b8e9b] mb-6">
                Dr. Homi Bhabha State University · Mumbai, India
              </div>

              <p className="text-sm sm:text-base text-[#a0a3b1] font-normal leading-relaxed mb-6">
                Pursuing rigorous foundational knowledge across statistical learning, algorithmic optimization, tensor manipulation, and parallel hardware architectures.
              </p>
            </div>

            {/* Coursework Block */}
            <div className="lg:max-w-md w-full p-6 rounded-2xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-white font-semibold uppercase tracking-wider mb-4">
                <BookOpen size={14} className="text-[#df2531]" />
                <span>RELEVANT COURSEWORK:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coursework.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-xs font-mono-tech text-white/90">
                    <CheckCircle size={13} className="text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
