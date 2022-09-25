import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import getConfig from 'next/config'
import { getCookie } from 'react-use-cookie'

const { publicRuntimeConfig } = getConfig()
const csrfToken = getCookie('XSRF-TOKEN')

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:8000/graphql',
      headers: {
        // 'X-XSRF-TOKEN': csrfToken,
      },
      credentials: 'same-origin',
      // credentials: 'include',
    }),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
