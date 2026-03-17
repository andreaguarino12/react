import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

function FlowRing({ scrollProgress }) {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    const t = state.clock.getElapsedTime()

    mesh.current.rotation.x = 1.2 + Math.sin(t * 0.25) * 0.08
    mesh.current.rotation.y = t * 0.15 + scrollProgress * 0.8
    mesh.current.rotation.z = Math.cos(t * 0.2) * 0.07
    mesh.current.position.y = 0.6 - scrollProgress * 1.5
  })

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[2.3, 0.45, 240, 30]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.18} roughness={0.2} metalness={0.4} />
    </mesh>
  )
}

export default function Background3D() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Canvas className="bg-3d" camera={{ position: [0, 0, 7.5], fov: 50 }}>
      <ambientLight intensity={1.6} color="#ffffff" />
      <directionalLight position={[3, 4, 3]} intensity={1.4} color="#93c5fd" />
      <pointLight position={[-2, -1, 4]} intensity={1.2} color="#c4b5fd" />
      <FlowRing scrollProgress={scrollProgress} />
    </Canvas>
  )
}
