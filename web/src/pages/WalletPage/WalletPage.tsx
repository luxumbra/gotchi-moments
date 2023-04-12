import { v4 as uuidv4 } from 'uuid'

import { MetaTags } from '@redwoodjs/web'

import { tokens } from 'src/constants/test-data'

const WalletPage = () => {
  return (
    <>
      <MetaTags title="Wallet" description="Wallet page" />

      <div className="container mx-auto w-11/12 py-28">
        <h1 className="text-3xl lg:text-6xl">username&apos;s wallet</h1>

        <div className="token-list flex mt-5 w-full flex-col gap-4">
          {tokens && tokens.length > 0 ? (
            tokens.map((token) => (
              <div
                key={uuidv4()}
                className="token-list__item flex flex-row items-center justify-start gap-3 rounded-2xl bg-zinc-800 p-2"
              >
                <div className="token-list__item__image p-1">
                  <div className="avatar">
                    <div className="w-12 overflow-hidden rounded-full ring ring-gotchi-purple lg:w-16">
                      <img src={token.logo} alt="token logo" />
                    </div>
                  </div>
                </div>
                <div className="token-list__item__info flex-grow">
                  <h2 className="text-2xl lg:text-4xl">{token.name}</h2>
                  <p className="text-xl lg:text-2xl">{token.symbol}</p>
                  <p className="text-xl lg:text-2xl">{token.contract}</p>
                </div>
                <div className="token-list__item__balance flex-grow">
                  <p className="flex flex-col text-2xl leading-none lg:text-4xl">
                    <span className="token">{token.balance}</span>
                    <span className="fiat-value -translate-y-1 text-sm">
                      {'$10000'}
                    </span>
                  </p>
                </div>
                <div className="token-list__item__actions flex flex-shrink justify-self-center">
                  <div className=" btn-group btn-group-vertical">
                    <button className="btn-primary btn-xs btn">Send</button>
                    <button className="btn-secondary btn-xs btn">
                      Receive
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No tokens in wallet</p>
          )}
        </div>
      </div>
    </>
  )
}

export default WalletPage
