import Particles from "react-tsparticles"

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        background: { color: "#0f0f0f" },
        particles: {
          number: { value: 80 },
          color: { value: "#7c3aed" },
          links: {
            enable: true,
            color: "#7c3aed",
            distance: 150
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 }
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        zIndex: -1
      }}
    />
  )
}