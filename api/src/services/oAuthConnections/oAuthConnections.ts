import type {
  QueryResolvers,
  MutationResolvers,
  OAuthConnectionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const oAuthConnections: QueryResolvers['oAuthConnections'] = () => {
  return db.oAuthConnection.findMany()
}

export const oAuthConnection: QueryResolvers['oAuthConnection'] = ({ id }) => {
  return db.oAuthConnection.findUnique({
    where: { id },
  })
}

export const createOAuthConnection: MutationResolvers['createOAuthConnection'] =
  ({ input }) => {
    return db.oAuthConnection.create({
      data: input,
    })
  }

export const updateOAuthConnection: MutationResolvers['updateOAuthConnection'] =
  ({ id, input }) => {
    return db.oAuthConnection.update({
      data: input,
      where: { id },
    })
  }

export const deleteOAuthConnection: MutationResolvers['deleteOAuthConnection'] =
  ({ id }) => {
    return db.oAuthConnection.delete({
      where: { id },
    })
  }

export const OAuthConnection: OAuthConnectionRelationResolvers = {
  user: (_obj, { root }) => {
    return db.oAuthConnection.findUnique({ where: { id: root?.id } }).user()
  },
}
