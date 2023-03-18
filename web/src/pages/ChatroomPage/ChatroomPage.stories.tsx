import type { ComponentMeta } from '@storybook/react'

import ChatroomPage from './ChatroomPage'

export const generated = () => {
  return <ChatroomPage />
}

export default {
  title: 'Pages/ChatroomPage',
  component: ChatroomPage,
} as ComponentMeta<typeof ChatroomPage>
