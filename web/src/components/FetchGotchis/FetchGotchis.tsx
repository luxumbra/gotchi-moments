import Web3 from 'web3'
import { AbiItem } from 'web3-utils'

import { Aavegotchi } from '../../types/Aavegotchi'
import { contractABI1155 } from '../../utils/contractABI'

const hardcodedContractAddress = '0x86935F11C86623deC8a25696E1C19a8659CbF95d'
const infuraUrl = `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl))
const contract = new web3.eth.Contract(
  contractABI1155 as AbiItem[],
  hardcodedContractAddress
)

export const fetchGotchis = async (
  address: string,
  setGotchis: (gotchis: Aavegotchi[]) => void
) => {
  if (contract && address) {
    try {
      const tokenIds = await contract.methods.tokenIdsOfOwner(address).call()
      const gotchisPromises = tokenIds.map((id: number) =>
        contract.methods.getAavegotchi(id).call()
      )
      const gotchisData = await Promise.all(gotchisPromises)
      console.log('Gotchis data:', gotchisData)

      // Those without names are portals. Can be used later
      const filteredGotchis = gotchisData.filter(
        (gotchi: any) => gotchi.name && gotchi.name.trim() !== ''
      )

      setGotchis(filteredGotchis)
    } catch (error) {
      console.error('Error fetching gotchis:', error)
    }
  }
}
