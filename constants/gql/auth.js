import gql from 'graphql-tag'

export const MUTATION_LOGIN = gql`
  mutation($loginInfoInput: LoginInfoInput!) {
    login(input: $loginInfoInput) {
      token
    }
  }
`
