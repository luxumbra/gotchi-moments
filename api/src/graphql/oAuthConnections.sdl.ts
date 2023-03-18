export const schema = gql`
  type OAuthConnection {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    userId: String!
    type: String!
    revoked: Boolean!
    refreshToken: String
    accessToken: String!
    expiration: DateTime
  }

  type Query {
    oAuthConnections: [OAuthConnection!]! @requireAuth
    oAuthConnection(id: String!): OAuthConnection @requireAuth
  }

  input CreateOAuthConnectionInput {
    userId: String!
    type: String!
    revoked: Boolean!
    refreshToken: String
    accessToken: String!
    expiration: DateTime
  }

  input UpdateOAuthConnectionInput {
    userId: String
    type: String
    revoked: Boolean
    refreshToken: String
    accessToken: String
    expiration: DateTime
  }

  type Mutation {
    createOAuthConnection(input: CreateOAuthConnectionInput!): OAuthConnection!
      @requireAuth
    updateOAuthConnection(
      id: String!
      input: UpdateOAuthConnectionInput!
    ): OAuthConnection! @requireAuth
    deleteOAuthConnection(id: String!): OAuthConnection! @requireAuth
  }
`
