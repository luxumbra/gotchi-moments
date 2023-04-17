import { useState } from 'react'

import Container from '../../css/grabber-component/ListContainer'
import { Aavegotchi } from '../../types/Aavegotchi'
import { fetchGotchis } from '../FetchGotchis/FetchGotchis'

import WalletQuery from './../WalletQuery/WalletQuery'
import GotchiList from './GotchiList'

const GotchiCards = () => {
  const [address, setAddress] = useState('')
  const [gotchis, setGotchis] = useState<Aavegotchi[]>([])

  const handleFetchGotchis = () => {
    fetchGotchis(address, setGotchis)
  }

  return (
    <div style={{ margin: '5%' }}>
      <WalletQuery
        address={address}
        setAddress={setAddress}
        onFetchGotchis={handleFetchGotchis}
      />
      <Container>
        <GotchiList gotchis={gotchis} />
      </Container>
    </div>
  )
}

export default GotchiCards
