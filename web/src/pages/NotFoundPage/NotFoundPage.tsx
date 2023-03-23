import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const NotFoundPage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="404 Page Not Found" />

      <h1 className="text-6xl">404 Page Not Found</h1>
      <p>Make & share memories with your Gotchi frens!</p>
      <p>{JSON.stringify({ isAuthenticated })}</p>
    </>
  )
}

export default NotFoundPage
