export const getErrorResponse = (error, functionName) => {
  const errorText = typeof error === 'string' ? error : error.message
  const res = {
    /* eslint-disable-nextline i18next/no-literal-string */
    message: `Error auth ${functionName}(): ${errorText}`,
  }
  const ABORTED = 'aborted'
  const EXCEPTION = 'exception'
  const UNKNOWN = 'unknown error type'
  if (error.code) {
    res.code = error.code
    switch (error.code) {
      case 4001:
        res.txErrorType = ABORTED
        break
      case -32016:
        res.txErrorType = EXCEPTION
        break
      default:
        res.txErrorType = UNKNOWN
    }
  }
  return { error: res }
}

/**
 * shorten wallet address for display
 * @param {string} address
 * @param {number} [length=4]
 * @returns {string}
 */
export const shortenAddress = (address, length = 4) => {
  return `${address.slice(0, length + 2)}...${address.slice(-length)}`
}
