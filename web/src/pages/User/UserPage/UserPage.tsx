import UserCell from 'src/components/User/UserCell'

type UserPageProps = {
  id: string
}

const UserPage = ({ id }: UserPageProps) => {
  const address = id
  const displayAddress = shortenAddress(address)
  const email = 'gotchi420@gotchifrens.xyz'
  const [value, copy] = useCopyToClipboard()
  const playSound = (sound) => {
    const audio = new Audio(sound)
    audio.play()
  }

  const copyAddress = (data) => {
    copy(data)
    if (value) {
      toast.success('Copied to clipboard')
      playSound(successSound)
    }
  }

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <div className="profile-hero h-[33vh] w-screen overflow-y-hidden p-0">
        <div className="profile-hero__content absolute" aria-hidden="false">
          <h1 className="invisible text-6xl">Your Profile</h1>
        </div>
        <img
          src="https://picsum.photos/200/300"
          alt="hero"
          className="h-auto w-full min-w-full object-cover object-center"
        />
      </div>
      <div className="profile-content flex flex-col gap-4 p-4 lg:p-8">
        <div className="profile-content__section">
          {/* profile card with avatar */}
          <div className="profile-card flex -translate-y-16 flex-col gap-4">
            <div className="profile-card__header flex flex-col items-center justify-start gap-5 lg:flex-row">
              <div className="avatar">
                <div className="w-28 overflow-hidden rounded-full ring ring-gotchi-pink lg:w-52">
                  <img src="https://picsum.photos/100/100" alt="avatar" />
                </div>
              </div>
              <div className="profile-card__header__info">
                <h2 className="text-2xl lg:text-4xl">🐙 luxumbra 🌳🦡🌳</h2>
                <p className="text-xl lg:text-2xl">
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
                <p className="text-xl lg:text-2xl">Email: {email}</p>
                <UserCell id={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage
