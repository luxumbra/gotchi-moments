import React from 'react'

import GotchiListItem from './GotchiListItem'

interface GotchiListProps {
  gotchis: any[]
}

const GotchiList: React.FC<GotchiListProps> = ({ gotchis }) => {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {gotchis.map((gotchi) => (
        <div key={gotchi.id} className="card-glow-on-hover mb-5 max-w-lg">
          <GotchiListItem gotchi={gotchi} />
        </div>
      ))}
    </div>
  )
}

export default GotchiList
