import { render } from '@redwoodjs/testing/web'

import LoadingDots from './LoadingDots'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadingDots', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingDots />)
    }).not.toThrow()
  })
})
