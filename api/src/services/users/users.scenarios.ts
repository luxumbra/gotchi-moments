import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { id: 'String', updatedAt: '2023-03-18T02:56:56.554Z' } },
    two: { data: { id: 'String', updatedAt: '2023-03-18T02:56:56.554Z' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
