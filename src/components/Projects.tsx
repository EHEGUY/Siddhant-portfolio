import { motion } from "framer-motion";

export interface ProjectData {
  name: string;
  techs: string[];
  description: string;
  highlight: string;
  href: string;
}

function HoverProjectCard({ project }: { project: ProjectData }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      variants={{ rest: { scale: 1, y: 0 } }}
      className="group flex flex-col w-full relative cursor-pointer"
    >
      {/* Main card */}
      <div className="project-card z-10 w-full" style={{ minHeight: "130px" }}>
        <div className="project-top">
          <span className="project-name">{project.name}</span>
          <div className="project-tech">
            {project.techs.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
        
        {/* We place the main link at the bottom of the card */}
        <div className="project-links" style={{ marginTop: "auto" }}>
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View Code
          </a>
        </div>
      </div>

      {/* Slide down descriptive content on hover */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: -20, height: 0, marginTop: 0, overflow: "hidden" },
          hover: { opacity: 1, y: 0, height: "auto", marginTop: 8, overflow: "visible" },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="z-0 w-11/12 self-center"
      >
        <div 
          className="border border-t-0 rounded-b-3xl border-border bg-surface" 
          style={{ padding: "1.25rem 1.5rem" }}
        >
          <p className="project-desc" style={{ marginBottom: "1rem" }}>{project.description}</p>
          <div className="project-highlight" style={{ margin: 0 }}>
            <span className="highlight-icon">✦</span>
            <span>{project.highlight}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projectsData: ProjectData[] = [
    {
      name: "SiddWrites — AI Text Humanization SaaS",
      techs: ["LLaMA 3.3 70B", "FastAPI", "Supabase", "PostgreSQL", "Docker"],
      description: "A full-stack SaaS platform that rewrites AI-generated text to bypass detection algorithms by dynamically adjusting burstiness and perplexity metrics. Built with a decoupled Vanilla JS frontend on Vercel and a Dockerized backend on Hugging Face Spaces.",
      highlight: "Engineered a two-pass humanization engine delivering results under 3s. Secured via a multi-layer prompt injection sanitization pipeline and atomic PostgreSQL RPC functions with RLS-enforced usage-tracked free/premium tiers.",
      href: "https://github.com/EHEGUY",
    },
    {
      name: "OmniMed — Unified Diagnostic Suite",
      techs: ["PyTorch", "Next.js", "CUDA", "Grad-CAM"],
      description: "A unified AI diagnostic platform for Neurology (MRI), Orthopaedics (X-ray), and Dermatology (Skin). Uses a Singleton Model-Loading architecture so multiple specialties can run without fighting over GPU memory.",
      highlight: "Reduced peak VRAM usage by 57% — enabling high-fidelity clinical inference on standard 6GB GPUs. Eliminates OOM crashes via dynamic CUDA cache management, with explainable AI via Grad-CAM visual verification.",
      href: "https://github.com/EHEGUY/omnimedv1",
    },
    {
      name: "Deepfake Detector",
      techs: ["TypeScript", "ML", "Media Analysis"],
      description: "An AI-driven application to identify manipulated media. Analyses and verifies the authenticity of digital content using machine learning — built to tackle the growing problem of synthetic media at scale.",
      highlight: "Leverages ML classification to detect subtle manipulation artifacts invisible to the human eye.",
      href: "https://github.com/EHEGUY/deepfake-detector-app",
    },
    {
      name: "Calculator — Go Web App",
      techs: ["Go", "HTML5", "JavaScript"],
      description: "A web-based calculator built with Golang, HTML5, and JavaScript. Focuses on optimised precision and speed for mathematical functions — a clean exercise in backend-driven web computation.",
      highlight: "Go backend ensures high execution speed and precision — a deliberate choice over JavaScript's floating-point quirks.",
      href: "https://github.com/EHEGUY/kalkutor",
    },
  ];

  return (
    <section className="section" id="projects">
      <p className="section-label">Things I've built</p>
      <p className="section-title">Projects</p>

      <div className="achievement reveal from-bottom">
        <div className="ach-emoji">🏆</div>
        <div>
          <p className="ach-title">GirlScript Summer of Code (GSSoC) — Ranked #567 globally</p>
          <p className="ach-desc">Selected contributor to GSSoC, ranked in the top 5% of participants from a global pool of 40,000+ open-source contributors. Actively contributing to real-world open-source projects.</p>
        </div>
      </div>

      <div className="projects-list reveal-sides" style={{ marginTop: "2rem" }}>
        {projectsData.map((project) => (
          <HoverProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="https://github.com/eheguy" target="_blank" rel="noopener noreferrer" className="github-profile-btn reveal from-bottom">
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-[18px] h-[18px]">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          View all projects on GitHub
        </a>
      </div>
    </section>
  );
}
