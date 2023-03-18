import Header from 'src/components/Header/Header'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      <main className="w-full min-h-screen flex">
        <div className="container mx-auto py-24">{children}</div>
      </main>
    </>
  )
}

export default DefaultLayout
