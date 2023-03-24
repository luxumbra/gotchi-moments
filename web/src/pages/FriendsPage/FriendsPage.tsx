import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FriendsPage = () => {
  return (
    <>
      <MetaTags title="Friends" description="Friends page" />

      <div className="container mx-auto w-11/12 py-28">
        <h1 className="text-3xl lg:text-6xl">FriendsPage</h1>
      </div>
    </>
  )
}

export default FriendsPage
