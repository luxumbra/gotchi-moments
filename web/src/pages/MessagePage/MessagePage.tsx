import { MetaTags } from '@redwoodjs/web'

const MessagePage = () => {
  return (
    <>
      <MetaTags title="Message" description="Message page" />
      <div className="container mx-auto w-11/12 py-28">
        <h1 className="text-6xl">Messages</h1>
        <p>Your message will show here.</p>
      </div>
    </>
  )
}

export default MessagePage
