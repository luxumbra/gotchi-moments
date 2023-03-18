import { render } from '@redwoodjs/testing/web'

import SelfiePage from './SelfiePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SelfiePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelfiePage />)
    }).not.toThrow()
  })
})
