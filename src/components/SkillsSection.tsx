const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication & Authorization", "Backend Architecture"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "GitHub", "Agile Development", "Version Control", "Mobile-First Design"],
  },
  {
    category: "Other",
    skills: ["Python", "Basic Machine Learning", "Data Science Fundamentals"],
  },
];

const SkillsSection = () => (
  <section id="skills">
    <h2 className="text-2xl font-heading font-medium text-foreground mb-8">Skills</h2>
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-heading text-muted-foreground mb-3">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-md bg-card border border-border text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
