import { render } from '@redwoodjs/testing/web'

import WalletPage from './WalletPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WalletPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WalletPage />)
    }).not.toThrow()
  })
})
