import gql from 'graphql-tag'

export const QUERY_USERS_OVERVIEW = gql`
  query getUsers {
    users {
      id
      email
      name
      mobile
      ministries {
        title
      }
    }
  }
`
export const QUERY_USERS_YOUNG = gql`
  query getYoungUsers {
    users {
      id
      name
      services {
        title
      }
      ministries {
        title
      }
      availableTime
    }
  }
`
