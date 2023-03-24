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
      <Header />
      <main className="flex z-0 min-h-full w-full">{children}</main>

      <Footer />
    </>
  )
}

export default DefaultLayout
