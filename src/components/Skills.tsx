export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Go", "C", "C++", "TypeScript"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "JavaScript"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "FastAPI", "REST APIs", "Golang"],
    },
    {
      title: "AI & ML",
      skills: ["PyTorch", "NumPy", "Pandas", "Grad-CAM"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "CUDA"],
    },
    {
      title: "Interests",
      skills: ["Optimisation Algos", "Open Source", "Problem Solving"],
    },
  ];

  return (
    <section className="section" id="skills">
      <p className="section-label">What I work with</p>
      <p className="section-title">Skills & Stack</p>
      <div className="skills-grid reveal-sides">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-card">
            <div className="skill-card-header">
              <span className="skill-card-name">{category.title}</span>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">
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
