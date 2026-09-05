import { GithubGraph } from "./GithubGraph";

export default function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <div className="contact-section reveal scale-up">
          <h3>Let's connect</h3>
          <p>
            I'm always open to collaborating on interesting projects, internships, or just talking tech. Reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:siddtantarpale@gmail.com" className="contact-link primary">
              ✉️ siddtantarpale@gmail.com
            </a>
            <a href="https://github.com/eheguy" target="_blank" rel="noopener noreferrer" className="contact-link">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/siddhant-tantarpale-620375271/" target="_blank" rel="noopener noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="#" className="contact-link">
              📍 Mumbai, India
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Streak */}
      <section className="section" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginTop: "2rem", marginBottom: "2rem" }}>
        <p className="section-label">GitHub Contributions</p>
        <div className="reveal scale-up" style={{ width: "100%", maxWidth: "800px", display: "flex", justifyContent: "center", background: "var(--surface)", border: "1px solid var(--border)", padding: "1.5rem", borderRadius: "16px" }}>
          <GithubGraph
            account="eheguy"
            months={6}
            variant="github"
            showAccount={false}
            showLegend={true}
          />
        </div>
      </section>

      <div className="quote">
        <p>"I build because I'm curious, and because I can't not."</p>
      </div>
    </>
  );
}
