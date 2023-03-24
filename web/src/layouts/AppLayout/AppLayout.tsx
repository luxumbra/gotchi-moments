import { useEffect } from 'react'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import clickSound from 'src/lib/assets/sounds/interactions/click.mp3'
import { playSound } from 'src/utils/helpers'

import 'src/lib/assets/styles/index.css'
import 'src/index.css'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const links = document.querySelectorAll('a')

      links.forEach((link) => {
        link.addEventListener('click', () => {
          playSound(clickSound)
        })
      })
    }

    // return () => {
    //   second
    // }
  }, [])

  return (
    <>
      <Header />

      <main className="flex z-0 min-h-full w-full flex-col">{children}</main>

      <Footer />
    </>
  )
}

export default AppLayout
