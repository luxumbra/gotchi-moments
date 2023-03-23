import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import { Link } from '@redwoodjs/router'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
}

const MenuItem = ({ route, name, i, toggle }) => {
  const style = `menu-item__${i} menu-item inline-flex items-center text-3xl border-2 px-3 py-2 border-transparent text-center hover:border-fuchsia-300`

  return (
    <motion.li
      key={uuidv4()}
      className="text-center"
      variants={variants}
      whileHover={{ scale: 1.2, rotate: i % 2 === 0 ? '12deg' : '-12deg' }}
      whileTap={{ scale: 0.95, rotate: i % 2 === 0 ? '12deg' : '-12deg' }}
    >
      <Link to={route} className={style} onClick={() => toggle()}>
        {name}
      </Link>
    </motion.li>
  )
}

export default MenuItem
