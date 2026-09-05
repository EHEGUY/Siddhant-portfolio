export default function CurrentlyLearning() {
  const learningTopics = [
    {
      label: "AI & ML",
      value: "Advanced ML algorithms & methodologies",
    },
    {
      label: "Cloud",
      value: "Deployment & containerisation with Docker",
    },
    {
      label: "Data",
      value: "NumPy & Pandas for data analysis",
    },
    {
      label: "Open Source",
      value: "Contributing to real-world codebases via GSSoC",
    },
  ];

  return (
    <section className="section">
      <p className="section-label">Always growing</p>
      <p className="section-title">Currently Learning</p>
      <div className="learning-grid reveal-sides">
        {learningTopics.map((topic) => (
          <div key={topic.label} className="learn-card">
            <p className="learn-label">{topic.label}</p>
            <p className="learn-value">{topic.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
