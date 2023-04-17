import { render } from '@redwoodjs/testing/web'

import Grabber from './GotchiCards'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Grabber', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Grabber />)
    }).not.toThrow()
  })
})
