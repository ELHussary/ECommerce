import gql from 'graphql-tag'

const GET_CURRENT_USER = gql`
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
export default GET_CURRENT_USER
