import { useAuth } from 'src/auth'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { routes } from '@redwoodjs/router'

import { useOAuth } from 'src/providers/oAuth'

const LOCAL_REDIRECT_TO_KEY = 'redirect_to'

// If one of these types, treat the incoming action as a login
export const APPROVED_LOGIN_PROVIDERS = ['KEYP']

const saveRedirectTo = (redirect) => {
  redirect &&
    !redirect.includes('login') &&
    localStorage.setItem(LOCAL_REDIRECT_TO_KEY, redirect)

  const isSaved = localStorage.getItem(LOCAL_REDIRECT_TO_KEY) !== null
  return isSaved
}

const getRedirectTo = () => {
  const url = localStorage.getItem(LOCAL_REDIRECT_TO_KEY)
  localStorage.removeItem(LOCAL_REDIRECT_TO_KEY)
  return url
}

const RedirectionContext = React.createContext({
  isLoading: true,
  successMessage: null,
  errorMessage: null,
  orderSubmitted: false,
})

const RedirectionProvider = ({ children }) => {
  const [state, setState] = React.useState({ isLoading: true })
  console.log('RedirectionProvider', {state});
  const { logIn } = useAuth()
  const { submitCodeGrant } = useOAuth()

  let url
  let code
  let grantState
  /* eslint-disable camelcase */
  let error_description
  let error
  let orderId
  let type

  if (isBrowser) {
    console.log('isBrowser');
    url = new URL(window.location.href) // Support prerender
    code = url.searchParams.get('code')
    grantState = url.searchParams.get('state')
    error = url.searchParams.get('error')
    error_description = url.searchParams.get('error_description')
    orderId = url.searchParams.get('orderId')
    type = url.pathname.split('/redirect/')[1]
  }

  const submitLoginCodeGrant = async () => {
    console.log('submitLoginCodeGrant');
    const response = await logIn({
      code,
      state: grantState,
      type: type.toUpperCase(),
      method: 'login',
    })
    if (response.error || !response || !response.id)
      return setState({
        isLoading: false,
        errorMessage: response.error || 'Something went wrong',
      })
    setState({
      isLoading: false,
      successMessage: "Great - You're signed in!",
    })
    setTimeout(() => {
      console.log('redirecting to profile...');
      window.location = routes.profile()
    }, [3000])
  }

  const completeOAuth = async () => {
    console.log('completeOAuth');
    const { error: codeGrantError, successMessage: successMessageCodeGrant } =
      await submitCodeGrant({ code, grantState, type })
    if (codeGrantError)
      return setState({ errorMessage: codeGrantError, isLoading: false })
    console.log('submitCodeGrant success!')
    setState({ successMessage: successMessageCodeGrant, isLoading: false })
  }

  const completeWyreOrder = () => {
    if (!orderId || error)
      return setState({
        isLoading: false,
        errorMessage:
          "Your debit-card wasn't accepted by Wyre. If this keeps happening, please contact us for help.",
      })
    setState({
      isLoading: false,
      orderSubmitted: true,
      successMessage: 'Thanks for your order!',
    })
  }
  const completeStripeOrder = () => {
    if (error === 'cancelled')
      return setState({
        isLoading: false,
        errorMessage: 'Checkout canceled.',
      })
    setState({
      isLoading: false,
      orderSubmitted: true,
      successMessage: 'Thanks for your order!',
    })
  }
  const completeRampOrder = () => {
    setState({
      isLoading: false,
      orderSubmitted: true,
      successMessage: 'Thanks for your order!',
    })
  }

  React.useEffect(() => {
    console.log('useEffect');
    if (!isBrowser) return
    if (!url.pathname.includes('/redirect')) return
    if (type === 'wyre') return completeWyreOrder()
    if (type === 'stripe') return completeStripeOrder()
    if (type === 'rampnetwork') return completeRampOrder()
    if (error)
      return setState({
        isLoading: false,
        errorMessage: error_description || 'Something went wrong',
      })
    if (!code || !grantState)
      return setState({
        isLoading: false,
        errorMessage: 'Invalid redirect parameters',
      })
    if (APPROVED_LOGIN_PROVIDERS.includes(type.toUpperCase()))
      console.log('APPROVED_LOGIN_PROVIDERS');
      return submitLoginCodeGrant()
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [code, grantState])

  return (
    <RedirectionContext.Provider value={{
      isLoading: state.isLoading,
      successMessage: state.successMessage,
      errorMessage: state.errorMessage,
      orderSubmitted: state.orderSubmitted
    }}>
      {children}
    </RedirectionContext.Provider>
  )
}

const useRedirection = () => React.useContext(RedirectionContext)

export { RedirectionProvider, useRedirection, saveRedirectTo, getRedirectTo }
