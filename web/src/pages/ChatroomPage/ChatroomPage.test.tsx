import { render } from '@redwoodjs/testing/web'

import ChatroomPage from './ChatroomPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChatroomPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatroomPage />)
    }).not.toThrow()
  })
})
