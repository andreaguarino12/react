const jobs = [
  ['DevOps Specialist — RTC S.P.A.', 'Stage · Mag 2025 - Presente · Verona'],
  ['Tecnico Supporto IT', 'Studio Legale Talamini & De Thomasis'],
  ['Servizi IT Freelance', '2019 - Presente'],
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <span className="section-tag fade-up">04 · Journey</span>
      <h2>Experience Timeline</h2>
      <div className="timeline">
        {jobs.map(([role, meta], i) => (
          <div key={role} className="timeline-item fade-up" style={{ animationDelay: `${i * 90}ms` }}>
            <h3>{role}</h3>
            <p>{meta}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
