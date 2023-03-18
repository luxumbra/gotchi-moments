import type { OAuthConnection } from '@prisma/client'

import {
  oAuthConnections,
  oAuthConnection,
  createOAuthConnection,
  updateOAuthConnection,
  deleteOAuthConnection,
} from './oAuthConnections'
import type { StandardScenario } from './oAuthConnections.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('oAuthConnections', () => {
  scenario(
    'returns all oAuthConnections',
    async (scenario: StandardScenario) => {
      const result = await oAuthConnections()

      expect(result.length).toEqual(
        Object.keys(scenario.oAuthConnection).length
      )
    }
  )

  scenario(
    'returns a single oAuthConnection',
    async (scenario: StandardScenario) => {
      const result = await oAuthConnection({
        id: scenario.oAuthConnection.one.id,
      })

      expect(result).toEqual(scenario.oAuthConnection.one)
    }
  )

  scenario('creates a oAuthConnection', async (scenario: StandardScenario) => {
    const result = await createOAuthConnection({
      input: {
        updatedAt: '2023-03-18T21:33:23.006Z',
        userId: scenario.oAuthConnection.two.userId,
        type: 'String',
        accessToken: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-03-18T21:33:23.006Z'))
    expect(result.userId).toEqual(scenario.oAuthConnection.two.userId)
    expect(result.type).toEqual('String')
    expect(result.accessToken).toEqual('String')
  })

  scenario('updates a oAuthConnection', async (scenario: StandardScenario) => {
    const original = (await oAuthConnection({
      id: scenario.oAuthConnection.one.id,
    })) as OAuthConnection
    const result = await updateOAuthConnection({
      id: original.id,
      input: { updatedAt: '2023-03-19T21:33:23.007Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-03-19T21:33:23.007Z'))
  })

  scenario('deletes a oAuthConnection', async (scenario: StandardScenario) => {
    const original = (await deleteOAuthConnection({
      id: scenario.oAuthConnection.one.id,
    })) as OAuthConnection
    const result = await oAuthConnection({ id: original.id })

    expect(result).toEqual(null)
  })
})
