import { useEffect, useRef } from 'react'

import { motion, useCycle } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import MenuItem from 'src/components/MenuItem/MenuItem'
import MenuToggle from 'src/components/MenuToggle/MenuToggle'
import { useDimensions } from 'src/hooks/useDimensions'
import clickSound from 'src/lib/assets/sounds/interactions/click.mp3'
import popSound from 'src/lib/assets/sounds/interactions/pop.mp3'
import { playSound } from 'src/utils/helpers'
import './Header.css'

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const navItems = [
  { name: 'Home', path: 'home', isPrivate: false },
  { name: 'Wallet', path: 'wallet', isPrivate: true },
  { name: 'Profile', path: 'profile', isPrivate: true },
  { name: 'Messages', path: 'messages', isPrivate: true },
  { name: 'Chat', path: 'chatroom', isPrivate: true },
  { name: 'Selfie', path: 'selfie', isPrivate: true },
  { name: 'Frens', path: 'friends', isPrivate: true },
  { name: 'Login', path: 'login', isPrivate: false },
]

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 110px 0px)`,
    width: '100%',
    display: 'block',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 110px 0px)',
    transitionEnd: {
      display: 'none',
    },
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Header = () => {
  const { isAuthenticated } = useAuth()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const height = useDimensions(containerRef)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const links = document.querySelectorAll('.menu-item')
    links.forEach((link, i) => {
      link.addEventListener('click', () => {
        i % 2 === 0 ? playSound(clickSound) : playSound(popSound)
      })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => {})
      })
    }
  }, [])

  return (
    <>
      <header className="site-header z-50 overflow-y-visible font-display capitalize">
        <div className="site-header__wrapper">
          <div>
            <Link to={routes.home()} title="GotchiMoments">
              GM
            </Link>
          </div>
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
        <motion.nav
          className="flex absolute top-0 left-auto z-40 min-h-full w-full items-center justify-center py-4 text-center text-3xl"
          initial={false}
          variants={{
            open: { opacity: 1, y: 0, display: 'flex' },
            closed: { opacity: 0, y: -200, transitionEnd: { display: 'none' } },
          }}
          transition={{ duration: 0.2, delay: 0.3, ease: 'easeInOut' }}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
        >
          <motion.ul
            variants={menuVariants}
            className="flex mx-auto w-1/12 flex-col gap-5"
          >
            {navItems.map((item, i) => {
              const route = routes[item.path]()
              const id = uuidv4()
              if (item.isPrivate && isAuthenticated) {
                return null
              }
              return (
                <MenuItem
                  i={i}
                  key={id}
                  route={route}
                  name={item.name}
                  toggle={toggleOpen}
                />
              )
            })}
          </motion.ul>
        </motion.nav>
      </header>
      <motion.div
        className="background pointer-events-none absolute top-0 left-0 right-0 bottom-0 z-40 w-full origin-left bg-gotchi-pink"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      />
    </>
  )
}

export default Header
