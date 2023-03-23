import type { ComponentMeta } from '@storybook/react'

import FriendsPage from './FriendsPage'

export const generated = () => {
  return <FriendsPage />
}

export default {
  title: 'Pages/FriendsPage',
  component: FriendsPage,
} as ComponentMeta<typeof FriendsPage>
