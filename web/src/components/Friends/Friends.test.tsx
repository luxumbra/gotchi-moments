import { render } from '@redwoodjs/testing/web'

import Friends from './Friends'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Friends', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Friends />)
    }).not.toThrow()
  })
})
