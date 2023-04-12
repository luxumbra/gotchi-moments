// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Grabber> = (args) => {
//   return <Grabber {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Grabber from './Grabber'

export const generated = () => {
  return <Grabber />
}

export default {
  title: 'Components/Grabber',
  component: Grabber,
} as ComponentMeta<typeof Grabber>
