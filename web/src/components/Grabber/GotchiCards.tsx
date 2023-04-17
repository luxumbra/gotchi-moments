import { useState } from 'react'

import Container from '../../css/grabber-component/ListContainer'
import { Aavegotchi } from '../../types/Aavegotchi'
import { fetchGotchis } from '../FetchGotchis/FetchGotchis'

import GotchiList from './GotchiList'

import '../../css/buttons.css'

const GotchiCards = () => {
  const [address, setAddress] = useState('')
  const [gotchis, setGotchis] = useState<Aavegotchi[]>([])

  return (
    <div style={{ margin: '5%' }}>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Wallet Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="focus:outline-sm custom-input input-secondary input block"
        />
        <button
          className="md:text-md custom-btn btn-outline btn-md btn mt-4 text-sm sm:text-sm lg:text-lg"
          onClick={() => fetchGotchis(address, setGotchis)}
        >
          Fetch Gotchis
        </button>
      </div>

      <Container>
        <GotchiList gotchis={gotchis} />
      </Container>
    </div>
  )
}

export default GotchiCards
