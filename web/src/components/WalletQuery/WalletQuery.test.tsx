import { render } from '@redwoodjs/testing/web'

import WalletQuery from './WalletQuery'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WalletQuery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WalletQuery />)
    }).not.toThrow()
  })
})
