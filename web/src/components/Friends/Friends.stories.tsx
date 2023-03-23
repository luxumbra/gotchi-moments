// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Friends> = (args) => {
//   return <Friends {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Friends from './Friends'

export const generated = () => {
  return <Friends />
}

export default {
  title: 'Components/Friends',
  component: Friends,
} as ComponentMeta<typeof Friends>
