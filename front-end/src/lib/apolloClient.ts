import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import getConfig from 'next/config'
import { getCookie } from 'react-use-cookie'
const { publicRuntimeConfig } = getConfig()
const csrfToken = getCookie('XSRF-TOKEN')

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_BACKEND_URL + '/graphql',
      headers: {
        'X-XSRF-TOKEN': csrfToken,
      },
      credentials: 'include',
    }),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient

// const submitForm = async (event: any) => {
//   event.preventDefault()
//   await csrf()
//   axios
//     .post('api/login', { email: 'a@a.com', password: '123123aA' })
//     .then(res => {
//       axios
//         .get('/api/user')
//         .then(res => console.log(res.data))
//         .catch(error => {
//           if (error.response.status !== 409) throw error
//         })
//     })
//     .catch(error => {
//       if (error.response.status !== 422) throw error

//       console.log(Object.values(error.response.data.errors).flat())
//     })
// }
