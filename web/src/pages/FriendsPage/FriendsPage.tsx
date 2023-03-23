import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FriendsPage = () => {
  return (
    <>
      <MetaTags title="Friends" description="Friends page" />

      <h1 className="text-6xl">FriendsPage</h1>
      <p>
        Find me in <code>./web/src/pages/FriendsPage/FriendsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>friends</code>, link to me with `
        <Link to={routes.friends()}>Friends</Link>`
      </p>
    </>
  )
}

export default FriendsPage
