import gql from 'graphql-tag'

export const MUTATION_LOGIN = gql`
  mutation($loginInfoInput: LoginInfoInput!) {
    login(input: $loginInfoInput) {
      token
    }
  }
`

export const MUTATION_ADD_MEMBER = gql`
  mutation($addMemberInput: AddMemberInput!) {
    addMember(input: $addMemberInput) {
      id
      name
    }
  }
`
