export const schema = gql`
  type OAuth {
    state: String!
    codeChallenge: String!
    codeVerifier: String!
    createdAt: DateTime!
    user: User
    userId: String
  }

  type Query {
    oAuths: [OAuth!]! @requireAuth
    oAuth(id: String!): OAuth @requireAuth
  }

  input CreateOAuthInput {
    state: String!
    codeChallenge: String!
    codeVerifier: String!
    userId: String
  }

  input UpdateOAuthInput {
    state: String
    codeChallenge: String
    codeVerifier: String
    userId: String
  }

  type Mutation {
    createOAuth(input: CreateOAuthInput!): OAuth! @requireAuth
    updateOAuth(id: String!, input: UpdateOAuthInput!): OAuth! @requireAuth
    deleteOAuth(id: String!): OAuth! @requireAuth
  }
`
