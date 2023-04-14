import { motion } from 'framer-motion'
import './list-container.css'

const ListContainer = ({ children }) => {
  return (
    <motion.div
      className="container-gotchi"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default ListContainer
