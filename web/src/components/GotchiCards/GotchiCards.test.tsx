import { render } from '@redwoodjs/testing/web'

import GotchiCards from './GotchiCards'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components
describe('GotchiCards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GotchiCards gotchis={[]} />)
    }).not.toThrow()
  })
})
