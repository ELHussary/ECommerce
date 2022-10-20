import {
 ApolloClient,
 ApolloLink,
 HttpLink,
 InMemoryCache,
} from '@apollo/client'
import { getCookie } from 'react-use-cookie'
import { useMemo } from 'react'

import Pusher from 'pusher-js'
import PusherLink from './pusher-link'

const csrfToken = getCookie('XSRF-TOKEN')

const httpLink = new HttpLink({
 uri: process.env.NEXT_PUBLIC_BACKEND_URL + '/graphql',
 headers: {
  'X-XSRF-TOKEN': csrfToken,
 },
 credentials: 'include',
})

const pusherLink = new PusherLink({
 //@ts-ignore
 pusher: new Pusher(process.env.NEXT_PUBLIC_WEBSOCKETS_KEY, {
  wsHost: process.env.NEXT_PUBLIC_WEBSOCKETS_SERVER,
  wsPort: 6001,
  forceTLS: false,
  enableStats: true,

  authEndpoint: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql/subscriptions/auth`,
  auth: {
   headers: {
    'X-XSRF-TOKEN': csrfToken,
   },
  },
 }),
})

function createApolloClient() {
 return new ApolloClient({
  ssrMode: typeof window === 'undefined',
  //@ts-ignore
  link: ApolloLink.from([pusherLink, httpLink]),
  cache: new InMemoryCache(),
 })
}

export function useApollo() {
 const client = useMemo(() => createApolloClient(), [])
 return client
}
