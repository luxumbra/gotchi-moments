import { render } from '@redwoodjs/testing/web'

import FetchGotchis from './FetchGotchis'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FetchGotchis', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FetchGotchis />)
    }).not.toThrow()
  })
})
