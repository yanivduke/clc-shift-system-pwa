import gql from 'graphql-tag'

export const QUERY_USERS_OVERVIEW = gql`
  query getUsers {
    users {
      id
      email
      name
      mobile
      lineId
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
      status
      note
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
