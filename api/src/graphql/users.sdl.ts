export const schema = gql`
  type User {
    id: String!
    username: String
    address: String
    locale: String
    email: String
    createdAt: DateTime!
    updatedAt: DateTime!
    mfa_enabled: Boolean
    imageSrc: String
    country: String
    banned: Boolean!
    blocked: Boolean
    betaAccess: Boolean!
    refreshToken: String
    accessToken: String
    oauth: [OAuth]!
    oauthConnection: [OAuthConnection]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    username: String
    address: String
    locale: String
    email: String
    mfa_enabled: Boolean
    imageSrc: String
    country: String
    banned: Boolean!
    blocked: Boolean
    betaAccess: Boolean!
    refreshToken: String
    accessToken: String
  }

  input UpdateUserInput {
    username: String
    address: String
    locale: String
    email: String
    mfa_enabled: Boolean
    imageSrc: String
    country: String
    banned: Boolean
    blocked: Boolean
    betaAccess: Boolean
    refreshToken: String
    accessToken: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
