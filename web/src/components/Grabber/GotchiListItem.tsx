import React, { useEffect, useState } from 'react'

import { SvgFacet__factory, contracts } from '@aavegotchi/sdk'
import { Web3Provider } from '@ethersproject/providers'
import Web3 from 'web3'

import { Aavegotchi } from '../../types/Aavegotchi'

import '../../css/buttons.css'

import '../../css/grabber-component/gotchi-list.css'

const infuraUrl = `https://polygon-mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl))
const provider = new Web3Provider(web3.currentProvider as any)
const diamondAddress = contracts.addresses.diamond[137]
const svgFacet = SvgFacet__factory.connect(diamondAddress, provider)

type GotchiListItemProps = {
  gotchi: Aavegotchi
}

const GotchiListItem: React.FC<GotchiListItemProps> = ({ gotchi }) => {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const gotchiSvg = await svgFacet.getAavegotchiSvg(gotchi.tokenId)
        setSvg(gotchiSvg)
      } catch (error) {
        console.error('Error fetching Aavegotchi SVG:', error)
      }
    }

    fetchSvg()
  }, [gotchi])

  return (
    <div className="card m-0 justify-center bg-base-100 p-0 shadow-xl">
      <div dangerouslySetInnerHTML={{ __html: svg }} className="gotchi-svg" />
      <div className="card-body">
        <h2 className="card-title">{gotchi.name}</h2>
        <p className="card-text">ID: {gotchi.tokenId}</p>
      </div>
    </div>
  )
}

export default GotchiListItem
