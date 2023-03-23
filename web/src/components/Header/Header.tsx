import { useRef } from 'react'

import { motion, useCycle } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import MenuItem from 'src/components/MenuItem/MenuItem'
import MenuToggle from 'src/components/MenuToggle/MenuToggle'
import { useDimensions } from 'src/hooks/useDimensions'

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
  { name: 'Login', path: 'login', isPrivate: false },
]

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80px 32px)`,
    width: '100%',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 80px 32px)',
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

  return (
    <>
      <header className="site-header font-display z-10 overflow-y-visible capitalize">
        <div className="site-header__wrapper">
          <div>
            <Link to={routes.home()} title="GotchiMoments">
              GM
            </Link>
          </div>
        </div>
      </header>
      <motion.nav
        className="absolute z-10 w-full p-4 text-right"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
      >
        <div className="font-display container mx-auto w-11/12">
          <MenuToggle toggle={() => toggleOpen()} />
          <motion.ul
            variants={menuVariants}
            className="fixed top-[25%] right-1/2 z-50 flex flex-col gap-5"
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
        className="background absolute top-0 right-0 bottom-0 z-0 w-full origin-right bg-fuchsia-600"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      />
    </>
  )
}

export default Header
