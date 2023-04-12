import { useEffect } from 'react'

import { useParams, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import { saveRedirectTo } from 'src/providers/redirection'

const LoginPortal = () => {
  const { signUp, isAuthenticated, reauthenticate } = useAuth()

  const { error, redirectTo } = useParams()
  const [errorText, setErrorText] = React.useState('')
  const getErrorText = (error) => {
    if (error === 'expired') {
      return `Session expired, please log in again.`
    }
  }

  const onSubmitSignUp = async (type) => {
    const typeName = type.split('KEYP_')[1]
    toast(`Logging in with ${typeName}...`)
    let parsedType = type
    let login_provider = ''
    if (type.includes('KEYP')) {
      parsedType = 'KEYP'
      login_provider = `&login_provider=${type.split('KEYP_')[1]}`
    }
    const response = await signUp({
      type: parsedType,
      username: '',
      password: '',
    })
    console.log({ response, login_provider })
    if (response.url) {
      const resUrl = new URL(response.url)
      console.log({ resUrl })

      toast.success(`Redirecting you to ${resUrl.hostname}`)
      window.location.assign(response.url + login_provider)
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
      navigate(routes.redirect())
    }
  }, [isAuthenticated])

  const getButton = (type, text) => (
    <button
      onClick={() => onSubmitSignUp(type)}
      className="btn-primary btn-md btn mt-2 w-full max-w-sm bg-gotchi-purple text-lg lg:text-2xl"
      type="button"
    >
      {text}
    </button>
  )

  return (
    <div className="container mx-auto w-11/12 py-28">
      <h1 className="text-center text-3xl lg:text-6xl">
        <span className="block xl:inline">Log in with Keyp</span>
      </h1>

      <div className="mx-auto mt-6 flex w-full justify-center text-center">
        <ul className="flex w-full flex-col items-center  justify-center  space-y-2 lg:space-y-6">
          <li className="w-full">{getButton('KEYP_KEYP', 'Log in')}</li>
          {/* <li className="w-full">{getButton('KEYP_DISCORD', 'Discord')} </li> */}
          {/* <li>{getButton('KEYP_GITHUB', 'Github')} </li> */}
          {/* <li className="w-full">{getButton('KEYP_TWITTER', 'Twitter')} </li> */}
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
