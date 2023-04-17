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
  const [expanded, setExpanded] = useState(false)
  const [favorite, setFavorite] = useState(false)

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
    <div
      className="card m-0 cursor-pointer justify-center bg-base-100 p-0 shadow-xl"
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setExpanded(!expanded)
        }
      }}
      tabIndex={0}
      role="button"
    >
      <div className="card-body relative">
        <div
          className="absolute top-0 right-0 cursor-pointer p-2"
          onClick={(event) => {
            event.stopPropagation()
            setFavorite(!favorite)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              setExpanded(!expanded)
            }
          }}
        >
          <img
            className="favorite-icon h-8 w-8"
            src={favorite ? '\\gotchi-heart.gif' : '\\gotchi-heart-bw.png'}
            alt="Favorite Icon"
          />
        </div>
        <div className="flex items-start">
          <div
            dangerouslySetInnerHTML={{ __html: svg }}
            className="gotchi-svg mr-10"
          />
          <h2 className="card-title">
            {gotchi.name} | {gotchi.tokenId}
          </h2>
        </div>
        <div
          className={`flex ${
            expanded ? 'flex-col' : 'flex-row'
          } gap-4 lg:gap-8`}
        >
          <div>
            {expanded && (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <p className="card-text">⚡ Energy</p>
                <p className="card-text">{gotchi.modifiedNumericTraits[0]}</p>
                <p className="card-text">👹 Aggression</p>
                <p className="card-text">{gotchi.modifiedNumericTraits[1]}</p>
                <p className="card-text">👻 Spookiness</p>
                <p className="card-text">{gotchi.modifiedNumericTraits[2]}</p>
                <p className="card-text">🧠 Brain size</p>
                <p className="card-text">{gotchi.modifiedNumericTraits[3]}</p>
                <p className="card-text">👀 Eye shape</p>
                <p className="card-text">{gotchi.modifiedNumericTraits[4]}</p>
                <p className="card-text">👁 Eye color</p>
                <p className="card-text">{gotchi.modifiedNumericTraits[5]}</p>
              </div>
            )}
          </div>
          <div className="flex gap-40">
            <p className="card-text">Rarity: {gotchi.modifiedRarityScore}</p>
            <p className="card-text">Kinship: {gotchi.kinship}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GotchiListItem
