import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="text-5xl">Welcome to GotchiMemories</h1>
      <p>Make & share memories with your Gotchi frens!</p>
      <p>{JSON.stringify({ isAuthenticated })}</p>
    </>
  )
}

export default HomePage
