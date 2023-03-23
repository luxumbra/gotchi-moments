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
    y: 0,
    z: 50,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    y: -1500,
    z: -1,
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
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 110px 0px)',
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
      <header className="site-header z-10 overflow-y-visible font-display capitalize">
        <div className="site-header__wrapper">
          <div>
            <Link to={routes.home()} title="GotchiMoments">
              GM
            </Link>
          </div>
        </div>
      </header>
      <motion.nav
        className="absolute top-0 left-auto z-50 min-h-full w-full py-4 text-center text-3xl"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
      >
        <div className="site-header__container flex mx-auto w-11/12 justify-between font-display">
          <div>
            <Link to={routes.home()} title="GotchiMoments">
              GM
            </Link>
          </div>
          <MenuToggle toggle={() => toggleOpen()} />
          <motion.ul
            variants={menuVariants}
            className="flex fixed top-[25%] right-1/2 flex-col gap-5"
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
        </div>
      </motion.nav>
      <motion.div
        className="background pointer-events-none absolute top-0 left-0 right-0 bottom-0 z-40 w-full origin-left bg-gotchi-pink"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      />
    </>
  )
}

export default Header
