import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import 'src/lib/assets/styles/index.css'
import 'src/index.css'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />

      <main className="flex min-h-full w-full">
        <div className="container mx-auto py-24">{children}</div>
      </main>

      <Footer />
    </>
  )
}

export default AppLayout
