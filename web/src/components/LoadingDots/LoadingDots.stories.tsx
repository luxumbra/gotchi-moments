// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LoadingDots> = (args) => {
//   return <LoadingDots {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LoadingDots from './LoadingDots'

export const generated = () => {
  return <LoadingDots />
}

export default {
  title: 'Components/LoadingDots',
  component: LoadingDots,
} as ComponentMeta<typeof LoadingDots>
