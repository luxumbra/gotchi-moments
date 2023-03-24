import { useEffect } from 'react'

import { useParams, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { saveRedirectTo } from 'src/providers/redirection'
import { useToast } from 'src/providers/toast'

const LoginPortal = () => {
  const { signUp, isAuthenticated, reauthenticate } = useAuth()

  const { error, redirectTo } = useParams()
  const { toast } = useToast()
  const [errorText, setErrorText] = React.useState('')
  const getErrorText = (error) => {
    if (error === 'expired') return `Session expired, please log in again.`
  }

  const onSubmitSignUp = async (type) => {
    let parsedType = type
    let login_provider = ''
    if (type.includes('KEYP')) {
      parsedType = 'KEYP'
      login_provider = `&login_provider=${type.split('KEYP_')[1]}`
    }
    const response = await signUp({ type: parsedType })
    console.log(response, login_provider)
    if (response.url) {
      window.location = response.url + login_provider
    } else {
      toast.error('Something went wrong')
    }
  }

  useEffect(() => {
    if (redirectTo) {
      saveRedirectTo(redirectTo) && reauthenticate()
    }
  }, [redirectTo, reauthenticate])

  useEffect(() => {
    if (error) setErrorText(getErrorText(error))
  }, [error])

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.profile())
    }
  }, [isAuthenticated])

  const getButton = (type, text) => (
    <button
      onClick={() => onSubmitSignUp(type)}
      className="btn-primary btn-md btn mt-2 w-full max-w-sm text-lg lg:text-2xl"
      type="button"
    >
      {text}
    </button>
  )

  return (
    <div className="container mx-auto w-11/12 py-28">
      <h1 className="text-center text-3xl lg:text-6xl">
        <span className="block xl:inline">Login with Keyp</span>
      </h1>
      <div className="mt-6 w-full">
        <div className="mb-6">
          <h2 className="text-center text-2xl font-bold text-zinc-400 lg:text-4xl">
            Sign in
          </h2>
        </div>
      </div>

      <div className="flex mx-auto w-full justify-center text-center">
        <ul className="flex w-full flex-col items-center  justify-center  space-y-2 lg:space-y-6">
          <li className="w-full">{getButton('KEYP_KEYP', 'Keyp')}</li>
          <li className="w-full">{getButton('KEYP_DISCORD', 'Discord')} </li>
          {/* <li>{getButton('KEYP_GITHUB', 'Github')} </li> */}
          <li className="w-full">{getButton('KEYP_TWITTER', 'Twitter')} </li>
        </ul>
        {errorText && <div className="rw-cell-error mt-2">{errorText}</div>}
      </div>
    </div>
  )
}

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Sign In" description="Join to start collecting." />
      <LoginPortal />
    </>
  )
}

export default LoginPage
