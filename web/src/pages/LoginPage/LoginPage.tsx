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
      className="btn btn-primary mt-2"
      type="button"
    >
      {text}
    </button>
  )

  return (
    <div className="flex justify-center">
      <div className="login-portal-container w-80 sm:w-96">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-zinc-200 sm:text-3xl md:text-3xl">
          <span className="block xl:inline">Login with Keyp</span>
        </h2>
        <div className="mt-6">
          <div className="mb-6">
            <h2 className="color-grey-light text-center text-base font-bold">
              Sign in
            </h2>
          </div>
        </div>

        <div className="login-portal-container--button-wrapper text-center ">
          <ul className="flex flex-col space-y-6">
            <li>{getButton('KEYP_KEYP', 'Keyp')}</li>
            <li>{getButton('KEYP_DISCORD', 'Discord')} </li>
            {/* <li>{getButton('KEYP_GITHUB', 'Github')} </li> */}
            <li>{getButton('KEYP_TWITTER', 'Twitter')} </li>
          </ul>
          {errorText && <div className="rw-cell-error mt-2">{errorText}</div>}
        </div>
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
