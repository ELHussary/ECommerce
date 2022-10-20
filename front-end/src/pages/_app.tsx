import { useApollo } from '@/lib/apolloClient'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
 const apolloClient = useApollo()

 return (
  <ApolloProvider client={apolloClient}>
   <Component {...pageProps} />
  </ApolloProvider>
 )
}

export default MyApp
