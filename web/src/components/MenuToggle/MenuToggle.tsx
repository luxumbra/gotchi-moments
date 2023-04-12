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
      className="relative z-[100]"
      variants={{
        visible: { rotate: 90, y: -7, transition: { duration: 0.2 } },
        hidden: { rotate: 0, y: 0 },
      }}
    >
      <svg width="26" height="26" viewBox="0 0 26 26">
        <Path
          d="M 2 2.5 L 20 2.5"
          variants={{
            visible: { d: 'M 2 2.5 L 20 2.5' },
            hidden: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
            hidden: { opacity: 0, x: -20 },
          }}
        />
        <Path
          d="M 2 16.346 L 20 16.346"
          variants={{
            visible: { d: 'M 2 16.346 L 20 16.346' },
            hidden: { d: 'M 3 2.5 L 17 16.346' },
          }}
          transition={{ duration: 0.1 }}
        />
      </svg>
    </motion.button>
  )
}

export default MenuToggle
