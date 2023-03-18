import type { Prisma, OAuth } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.OAuthCreateArgs>({
  oAuth: {
    one: {
      data: {
        state: 'String',
        codeChallenge: 'String',
        codeVerifier: 'String',
      },
    },
    two: {
      data: {
        state: 'String',
        codeChallenge: 'String',
        codeVerifier: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<OAuth, 'oAuth'>
