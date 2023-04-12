import { Head } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import 'src/lib/assets/styles/index.css'
import 'src/index.css'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
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
      <main className="z-0 flex min-h-full w-full">{children}</main>

      <Footer />
    </>
  )
}

export default DefaultLayout
