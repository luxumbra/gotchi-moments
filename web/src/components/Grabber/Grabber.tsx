import { useState, useEffect } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import Container from '../../css/grabber-component/ListContainer'
import { Aavegotchi } from '../../types/Aavegotchi'
import { contractABI1155 } from '../../utils/contractABI'

import GotchiList from './GotchiList'

import '../../css/buttons.css'

const Grabber = () => {
  const [address, setAddress] = useState('')
  const hardcodedContractAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d'
  const [gotchis, setGotchis] = useState<Aavegotchi[]>([])

  const infuraUrl = `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`
  const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl))
  const contract = new web3.eth.Contract(
    contractABI1155 as AbiItem[],
    hardcodedContractAddress
  )

  const fetchGotchis = async () => {
    if (contract && address) {
      try {
        const tokenIds = await contract.methods.tokenIdsOfOwner(address).call()
        const gotchisPromises = tokenIds.map((id: BigNumber) =>
          contract.methods.getAavegotchi(id).call()
        )
        const gotchisData = await Promise.all(gotchisPromises)
        console.log('Gotchis data:', gotchisData)
        setGotchis(gotchisData)
      } catch (error) {
        console.error('Error fetching gotchis:', error)
      }
    }
  }

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
          onClick={fetchGotchis}
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

export default Grabber
