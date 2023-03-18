import type { ComponentMeta } from '@storybook/react'

import WalletPage from './WalletPage'

export const generated = () => {
  return <WalletPage />
}

export default {
  title: 'Pages/WalletPage',
  component: WalletPage,
} as ComponentMeta<typeof WalletPage>
