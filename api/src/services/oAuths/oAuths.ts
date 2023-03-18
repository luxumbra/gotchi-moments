import type {
  QueryResolvers,
  MutationResolvers,
  OAuthRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const oAuths: QueryResolvers['oAuths'] = () => {
  return db.oAuth.findMany()
}

export const oAuth: QueryResolvers['oAuth'] = ({ id }) => {
  return db.oAuth.findUnique({
    where: { id },
  })
}

export const createOAuth: MutationResolvers['createOAuth'] = ({ input }) => {
  return db.oAuth.create({
    data: input,
  })
}

export const updateOAuth: MutationResolvers['updateOAuth'] = ({
  id,
  input,
}) => {
  return db.oAuth.update({
    data: input,
    where: { id },
  })
}

export const deleteOAuth: MutationResolvers['deleteOAuth'] = ({ id }) => {
  return db.oAuth.delete({
    where: { id },
  })
}

export const OAuth: OAuthRelationResolvers = {
  user: (_obj, { root }) => {
    return db.oAuth.findUnique({ where: { id: root?.id } }).user()
  },
}
