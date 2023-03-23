import { routes } from '@redwoodjs/router'
import { Link } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const NotFoundPage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="404 Page Not Found" />

      <h1 className="text-6xl">404 Page Not Found</h1>
      <p>Make & share memories with your Gotchi frens!</p>
      {isAuthenticated && <p>You are logged in.</p>}
      <p>
        Head to the{' '}
        <Link to={routes.home()} title="Homepage">
          Home page
        </Link>
      </p>
    </>
  )
}

export default NotFoundPage
