import { useEffect } from 'react'

import { motion } from 'framer-motion'

import popSound from 'src/lib/assets/sounds/interactions/pop.mp3'
import { playSound } from 'src/utils/helpers'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="rgb(255,255,255, 80%)"
    strokeLinecap="square"
    {...props}
  />
)

const MenuToggle = ({ toggle }) => {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     toggle && playSound(popSound)
  //   }
  // }, [toggle])

  const handleClick = () => {
    playSound(popSound)
  }

  return (
    <motion.button
      onClick={() => (handleClick(), toggle())}
      className="relative z-[100] border"
      variants={{
        open: { rotate: 180, y: -7 },
        closed: { rotate: 0, y: 0 },
      }}
      transition={{ duration: 0.2 }}
    >
      <svg width="26" height="26" viewBox="0 0 26 26">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, x: 0 },
            open: { opacity: 0, x: -20 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  )
}

export default MenuToggle
