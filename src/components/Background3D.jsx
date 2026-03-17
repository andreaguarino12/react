import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Sphere() {
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.y += 0.002
  })

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#6c63ff" wireframe />
    </mesh>
  )
}

export default function Background3D() {
  return (
    <Canvas style={{ position:"absolute", top:0 }}>
      <ambientLight intensity={1.5}/>
      <Sphere/>
    </Canvas>
  )
}