import type { Prisma, OAuthConnection } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OAuthConnectionCreateArgs>({
  oAuthConnection: {
    one: {
      data: {
        updatedAt: '2023-03-18T21:33:23.066Z',
        type: 'String',
        accessToken: 'String',
        user: {
          create: { id: 'String', updatedAt: '2023-03-18T21:33:23.066Z' },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-03-18T21:33:23.066Z',
        type: 'String',
        accessToken: 'String',
        user: {
          create: { id: 'String', updatedAt: '2023-03-18T21:33:23.066Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<OAuthConnection, 'oAuthConnection'>
