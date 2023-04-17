// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FetchGotchis> = (args) => {
//   return <FetchGotchis {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FetchGotchis from './FetchGotchis'

export const generated = () => {
  return <FetchGotchis />
}

export default {
  title: 'Components/FetchGotchis',
  component: FetchGotchis,
} as ComponentMeta<typeof FetchGotchis>
