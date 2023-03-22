import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

import 'src/index.css'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      <main className="flex min-h-screen w-full">
        <div className="container mx-auto py-24">{children}</div>
      </main>

      <Footer />
    </>
  )
}

export default DefaultLayout
