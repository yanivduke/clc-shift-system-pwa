import gql from 'graphql-tag'

export const QUERY_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
      joinDate
      service {
        title
        ministry {
          title
        }
      }
    }
  }
`
