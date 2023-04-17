// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof WalletQuery> = (args) => {
//   return <WalletQuery {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import WalletQuery from './WalletQuery'

export const generated = () => {
  return <WalletQuery />
}

export default {
  title: 'Components/WalletQuery',
  component: WalletQuery,
} as ComponentMeta<typeof WalletQuery>
