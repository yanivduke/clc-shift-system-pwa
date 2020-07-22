import gql from 'graphql-tag'

export const GET_CHARACTER = {
  query: gql`
    query getCharacter($id: ID) {
      character(id: $id) {
        id
        name
      }
    }
  `,
  variables() {
    return {
      id: this.characterID,
    }
  },
}