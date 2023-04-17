import Container from '../../css/grabber-component/ListContainer'
import { Aavegotchi } from '../../types/Aavegotchi'

import GotchiList from './GotchiList'

interface GotchiCardsProps {
  gotchis: Aavegotchi[]
}

const GotchiCards: React.FC<GotchiCardsProps> = ({ gotchis }) => {
  return (
    <div style={{ margin: '5%' }}>
      <Container>
        <GotchiList gotchis={gotchis} />
      </Container>
    </div>
  )
}

export default GotchiCards
