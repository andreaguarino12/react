import { motion } from "framer-motion"

export default function Card() {
  return (
    <motion.div
      whileHover={{ scale:1.1, rotate:2 }}
      transition={{ type:"spring", stiffness:300 }}
      style={{
        width:300,
        height:200,
        background:"#1f1f1f",
        borderRadius:20,
        padding:20
      }}
    >
      <h2>Project</h2>
      <p>My cool project</p>
    </motion.div>
  )
}