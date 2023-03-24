import { MetaTags } from '@redwoodjs/web'

const MessagesPage = () => {
  return (
    <>
      <MetaTags title="Messages" description="Messages page" />
      <div className="container mx-auto w-11/12 py-28">
        <h1 className="text-3xl lg:text-6xl">Messages</h1>
        <p>Your messages will go here</p>
      </div>
    </>
  )
}

export default MessagesPage
