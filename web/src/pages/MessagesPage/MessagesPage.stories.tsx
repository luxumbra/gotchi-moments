import type { ComponentMeta } from '@storybook/react'

import MessagesPage from './MessagesPage'

export const generated = () => {
  return <MessagesPage />
}

export default {
  title: 'Pages/MessagesPage',
  component: MessagesPage,
} as ComponentMeta<typeof MessagesPage>
