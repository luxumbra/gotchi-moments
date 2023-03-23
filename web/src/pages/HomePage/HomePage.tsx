import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="font-display text-6xl">Welcome to GotchiMoments</h1>
      <p>Make, mint & share special moments with your Gotchi frens!</p>
      <p>{JSON.stringify({ isAuthenticated })}</p>
    </>
  )
}

export default HomePage
