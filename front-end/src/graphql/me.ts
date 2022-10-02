import gql from 'graphql-tag'

const me = gql`
  {
    me {
      id
      name
      email
      addresses {
        full_name
      }
    }
  }
`
export default me
