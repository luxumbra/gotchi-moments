import type { ComponentMeta } from '@storybook/react'

import RedirectPage from './RedirectPage'

export const generated = () => {
  return <RedirectPage />
}

export default {
  title: 'Pages/RedirectPage',
  component: RedirectPage,
} as ComponentMeta<typeof RedirectPage>
