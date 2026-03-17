import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section className="section">

      <motion.div
        initial={{ opacity:0, y:80 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        <h2>Projects</h2>
      </motion.div>

    </section>
  )
}