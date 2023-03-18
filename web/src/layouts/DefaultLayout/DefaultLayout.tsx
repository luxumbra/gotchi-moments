import Header from 'src/components/Header/Header'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />

      {children}
    </>
  )
}

export default DefaultLayout
