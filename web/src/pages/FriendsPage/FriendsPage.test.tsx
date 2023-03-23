import { render } from '@redwoodjs/testing/web'

import FriendsPage from './FriendsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FriendsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FriendsPage />)
    }).not.toThrow()
  })
})
