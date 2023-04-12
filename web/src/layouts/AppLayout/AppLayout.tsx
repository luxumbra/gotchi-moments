import { useEffect } from 'react'

import { Head } from '@redwoodjs/web'

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
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </Head> */}
      <Header />

      <main className="z-0 flex min-h-full w-full flex-col">{children}</main>

      <Footer />
    </>
  )
}

export default AppLayout
