import { MetaTags } from '@redwoodjs/web'

const SelfiePage = () => {
  return (
    <>
      <MetaTags title="Selfie" description="Selfie page" />

      <div className="container mx-auto w-11/12 py-28">
        <h1 className="text-3xl lg:text-6xl">Take a selfie</h1>
        <p>Take a selfie and mint it as an NFT</p>
      </div>
    </>
  )
}

export default SelfiePage
