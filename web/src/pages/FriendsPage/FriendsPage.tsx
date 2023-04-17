import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import GotchiCards from '../../components/GotchiCards/GotchiCards'
import WalletQuery from '../../components/WalletQuery/WalletQuery'
import { Aavegotchi } from '../../types/Aavegotchi'

import { fetchGotchis } from './../../components/FetchGotchis/FetchGotchis'

const FriendsPage = () => {
  const [address, setAddress] = useState('')
  const [gotchis, setGotchis] = useState<Aavegotchi[]>([])

  const handleFetchGotchis = () => {
    fetchGotchis(address, setGotchis)
  }

  return (
    <>
      <MetaTags title="Friends" description="Friends page" />

      <div className="container mx-auto w-11/12 py-28">
        <h1 className="text-3xl lg:text-6xl">FriendsPage</h1>
        <WalletQuery
          address={address}
          setAddress={setAddress}
          onFetchGotchis={handleFetchGotchis}
        />
        <div>
          <GotchiCards gotchis={gotchis} />
        </div>
        <p>
          My default route is named <code>friends</code>, link to me with `
          <Link to={routes.friends()}>Friends</Link>`
        </p>
      </div>
    </>
  )
}

export default FriendsPage
