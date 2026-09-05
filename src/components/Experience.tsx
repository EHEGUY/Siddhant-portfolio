export default function Experience() {
  const experiences = [
    {
      role: "Contributor",
      type: "Open Source",
      org: "GirlScript Summer of Code (GSSoC)",
      duration: "May 2025 – Present",
      length: "1 mo",
      location: "Remote",
      desc: "Active open-source contributor ranked in the top 5% of 40,000+ participants. Contributing to real-world codebases, collaborating with maintainers, and shipping meaningful features across multiple repositories.",
      skills: ["Open Source", "Git", "Collaboration", "Problem Solving"],
      side: "left",
    },
    {
      role: "Content Writer",
      type: "Internship",
      org: "Marpu Foundation — India's Top NGO 🌱",
      duration: "Oct 2025 – Dec 2025",
      length: "3 mos",
      location: "Mumbai, Maharashtra, India",
      desc: "Researched, wrote, and edited a blog on the Marpu Foundation's unique self-reliant approach to social impact in India — focusing on ethical decision-making, empowering local communities, and their 'no foreign funding' model, conveyed through engaging storytelling. Also contributed to community outreach, awareness campaigns, and youth development initiatives.",
      skills: ["Content Writing", "Creative Writing", "Research", "Storytelling", "Communication", "Teamwork"],
      side: "right",
    },
  ];

  return (
    <section className="section" id="experience">
      <p className="section-label">Where I've contributed</p>
      <p className="section-title">Experience</p>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.org} className={`exp-card reveal from-${exp.side}`}>
            <div className="exp-header">
              <span className="exp-role">{exp.role}</span>
              <span className="exp-type">{exp.type}</span>
            </div>
            <p className="exp-org">{exp.org}</p>
            <div className="exp-meta">
              <span>📅 {exp.duration}</span>
              <span className="exp-dot"></span>
              <span>{exp.length}</span>
              <span className="exp-dot"></span>
              <span>📍 {exp.location}</span>
            </div>
            <p className="exp-desc">{exp.desc}</p>
            <div className="exp-skills">
              {exp.skills.map((skill) => (
                <span key={skill} className="exp-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
