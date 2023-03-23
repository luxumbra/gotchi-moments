import { useEffect } from 'react'

import { useCopyToClipboard } from 'usehooks-ts'

import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { shortenAddress } from 'src/utils/helpers'

const ProfilePage = () => {
  const address = '0xd669da4a797f226cbe4922f73e758be8d47f9a49'
  const displayAddress = shortenAddress(address)
  const [value, copy] = useCopyToClipboard()

  const copyAddress = (data) => {
    copy(data)
    if (value) {
      toast.success('Copied to clipboard')
    }
  }

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <div className="container">
        <div className="profile-hero flex h-[33vh] max-h-min min-h-min w-full items-end p-8">
          <div className="profile-hero__content">
            <h1 className="text-6xl">Your Profile</h1>
          </div>
        </div>
        <div className="profile-content flex flex-col gap-4 p-8">
          <div className="profile-content__section">
            {/* profile card with avatar */}
            <div className="profile-card flex flex-col gap-4">
              <div className="profile-card__header flex items-center justify-start gap-5">
                <div className="avatar">
                  <div className="w-52 overflow-hidden rounded-full">
                    <img
                      src="https://avatars.githubusercontent.com/u/1410985?v=4"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="profile-card__header__info">
                  <h2 className="text-4xl">🐙 luxumbra 🌳🦡🌳</h2>
                  <p className="text-2xl">
                    <span
                      className="wallet"
                      onClick={() => copyAddress(address)}
                      onKeyDown={() => copyAddress(address)}
                      role="button"
                      tabIndex={0}
                    >
                      {displayAddress}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
