import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { useRedirection } from 'src/providers/redirection'

const Redirect = ({ type, error }) => {
  const { errorMessage, successMessage, isLoading } = useRedirection()
  console.log('useRedirection')

  console.log('Redirect', {
    type,
    error,
    errorMessage,
    successMessage,
    isLoading,
  })

  if (isLoading) {
    console.log('Loading')

    return (
      <div className="flex min-h-screen min-w-full items-center justify-center">
        Loading...
      </div>
    )
  }

  let callToAction: React.ReactElement | null = null
  if (['chess', 'node_oidc', 'discord', 'twitter'].includes(type)) {
    if (successMessage) {
      callToAction = (
        <button
          onClick={() => navigate(routes.profile())}
          className="text-s mt-6"
          color="green"
        >
          See Profile
        </button>
      )
    } else {
      callToAction = (
        <button
          onClick={() => navigate(routes.login())}
          className="text-s mt-6"
          color="green"
        >
          Try again
        </button>
      )
    }
  }
  return (
    <div className="chess-background flex min-h-screen flex-col">
      <div className="align-center flex w-full flex-grow flex-col items-center justify-center">
        <div className="redirect-container w-80 sm:w-96">
          <div className="redirect-contents w-full">
            <div
              className={`align-center text-${
                successMessage ? `green-200` : `[#FFBB0D]`
              }`}
            >
              <h3 className="text-3xl">Auth type: {type}</h3>
            </div>
            <div className="mt-6 tracking-tight">
              {successMessage}
              {typeof errorMessage === 'string' ? (
                <>
                  <h2 className="mt-6 text-lg tracking-tight text-red-400">
                    Oops - there was an issue
                  </h2>
                  <p className="text-error mt-8">
                    {errorMessage.substring(0, 200)}
                  </p>
                </>
              ) : null}
            </div>
            {callToAction || (
              <p className="mt-8 ">You will be redirected shortly</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const RedirectPage = ({ type, error }) => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Redirect" />
      {isAuthenticated && <p>You&apos;re authenticated!</p>}
      <Redirect type={type} error={error} />
    </>
  )
}

export default RedirectPage
