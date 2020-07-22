import gql from 'graphql-tag'

export const QUERY_All_MINISTRY = gql`
query getAllMinistries{
  ministries{
    id
    title
    body
    leader{
      id
      name
    }
    members{
      id
      name
      email
    }
    services{
      id
      title
    }
  }
}
`
