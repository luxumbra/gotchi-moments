// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MenuToggle> = (args) => {
//   return <MenuToggle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MenuToggle from './MenuToggle'

export const generated = () => {
  return <MenuToggle />
}

export default {
  title: 'Components/MenuToggle',
  component: MenuToggle,
} as ComponentMeta<typeof MenuToggle>
