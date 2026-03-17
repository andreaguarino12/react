import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import BackgroundDecor from './components/ParticlesBg'
import Background3D from './components/Background3D'

function App() {
  return (
    <>
      <BackgroundDecor />
      <Background3D />
      <main className="content">
        <div className="flow-stack">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default App
