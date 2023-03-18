import type { ComponentMeta } from '@storybook/react'

import MessagePage from './MessagePage'

export const generated = () => {
  return <MessagePage />
}

export default {
  title: 'Pages/MessagePage',
  component: MessagePage,
} as ComponentMeta<typeof MessagePage>
