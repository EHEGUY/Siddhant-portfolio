import { CanvasText } from "./ui/canvas-text";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-bg">
      <video className="hero-video hero-video-light" autoPlay muted loop playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <video className="hero-video hero-video-dark" autoPlay muted loop playsInline>
        <source src="/hero-bg-dark.mp4" type="video/mp4" />
      </video>
      <div className="hero">
        <div className="hero-tag">
          <span className="dot"></span>
          AI & ML Student · Mumbai, India
        </div>
        <h1>
          Hi, I'm <strong>Siddhant</strong> —<br />
          I build things because<br />
          I'm{" "}
          <em>
            <CanvasText
              text="curious"
              backgroundClassName="bg-accent"
              colors={[
                "rgba(0, 153, 255, 1)",
                "rgba(0, 153, 255, 0.9)",
                "rgba(0, 153, 255, 0.8)",
                "rgba(0, 153, 255, 0.7)",
                "rgba(0, 153, 255, 0.6)",
                "rgba(0, 153, 255, 0.5)",
                "rgba(0, 153, 255, 0.4)",
                "rgba(0, 153, 255, 0.3)",
                "rgba(0, 153, 255, 0.2)",
                "rgba(0, 153, 255, 0.1)",
              ]}
              lineGap={4}
              animationDuration={20}
            />
          </em>
          , and because<br />
          <strong>I can't not.</strong>
        </h1>
        <p className="hero-bio">
          First-year student at Dr. Homi Bhabha State University, diving deep into artificial intelligence and machine learning. I code in Python, C, Go, and React — and I care about building things that actually work well.
        </p>
        <div className="hero-chips">
          <span className="chip">🤖 AI & Machine Learning</span>
          <span className="chip">⚡ Algorithm Optimisation</span>
          <span className="chip">🌐 Full-Stack Dev</span>
          <span className="chip">☁️ Cloud & DevOps</span>
        </div>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollToSection("projects")}>See My Projects</button>
          <button className="btn-ghost" onClick={() => scrollToSection("contact")}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
