const skills = [
  'Docker',
  'Kubernetes',
  'VMware',
  'Firecracker',
  'Linux',
  'DevOps',
  'Terraform',
  'CI/CD',
  'Monitoring',
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <span className="section-tag fade-up">02 · Core Stack</span>
      <h2>Skills Matrix</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={skill} className="card fade-up" style={{ animationDelay: `${index * 70}ms` }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
