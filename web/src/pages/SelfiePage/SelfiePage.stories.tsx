import type { ComponentMeta } from '@storybook/react'

import SelfiePage from './SelfiePage'

export const generated = () => {
  return <SelfiePage />
}

export default {
  title: 'Pages/SelfiePage',
  component: SelfiePage,
} as ComponentMeta<typeof SelfiePage>
