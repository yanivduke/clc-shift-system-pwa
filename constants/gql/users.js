import gql from 'graphql-tag'

export const QUERY_USERS_OVERVIEW = gql`
  query getUsers {
    users {
      id
      email
      name
      mobile
      services {
        title
      }
      ministries {
        title
      }
    }
  }
`
