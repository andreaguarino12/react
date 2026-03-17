import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="hero">

      <motion.h1
        initial={{ opacity:0, y:100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        Andrea
      </motion.h1>

      <motion.p
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1 }}
      >
        Creative Developer
      </motion.p>

    </section>
  )
}