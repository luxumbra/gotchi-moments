import { ChangeEvent } from 'react'
import '../../css/buttons.css'

interface WalletQueryProps {
  address: string
  setAddress: (value: string) => void
  onFetchGotchis: () => void
}

const WalletQuery: React.FC<WalletQueryProps> = ({
  address,
  setAddress,
  onFetchGotchis,
}) => {
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Wallet Address"
        value={address}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAddress(e.target.value)
        }
        className="focus:outline-sm custom-input input-secondary input block"
      />
      <button
        className="md:text-md custom-btn btn-outline btn-md btn mt-4 text-sm sm:text-sm lg:text-lg"
        onClick={onFetchGotchis}
      >
        Fetch Gotchis
      </button>
    </div>
  )
}

export default WalletQuery
