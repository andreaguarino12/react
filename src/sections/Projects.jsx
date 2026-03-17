const projects = [
  {
    title: 'Cloud-Native Platform',
    description: 'Cluster Kubernetes con pipeline GitOps, logging centralizzato e autoscaling.',
  },
  {
    title: 'Serverless Monitoring Hub',
    description: 'Dashboard realtime per metriche e alerting multi-ambiente con stack open-source.',
  },
  {
    title: 'High-Performance Portfolio',
    description: 'Esperienza immersiva con effetti fluidi e componenti 3D scroll-linked.',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <span className="section-tag fade-up">03 · Build</span>
      <h2>Projects Showcase</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article key={project.title} className="glass project fade-up" style={{ animationDelay: `${i * 90}ms` }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
