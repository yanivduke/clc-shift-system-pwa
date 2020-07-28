import gql from 'graphql-tag'

export const MINISTRY_ALL_OVERVIEW = gql`
  query {
    ministries {
      id
      title
      body
      leader {
        id
        name
      }
      members {
        id
        name
        email
      }
      services {
        id
        title
      }
    }
  }
`
export const MINISTRY_FOR_ADD_MEMBER = gql`
  query {
    ministries {
      id
      title
      body
      leader {
        id
        name
      }
      services {
        id
        title
      }
    }
  }
`
