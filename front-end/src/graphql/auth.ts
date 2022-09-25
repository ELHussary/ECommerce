import gql from 'graphql-tag'
import axios from '@/lib/axios'

export const csrf = () => axios.get('/sanctum/csrf-cookie')

export const LOGIN = gql`
  mutation {
    login(input: { email: "a@a.com", password: "123123aA" }) {
      token
    }
  }
`
