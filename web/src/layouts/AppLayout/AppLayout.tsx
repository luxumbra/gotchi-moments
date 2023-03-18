import Header from 'src/components/Header/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />

      <main className="w-full min-h-full flex">
        <div className="container mx-auto py-24">{children}</div>
      </main>
    </>
  )
}

export default AppLayout
