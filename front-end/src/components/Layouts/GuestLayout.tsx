import Navigation from './Navigation'
import React from 'react'
import { useAuth } from '@/graphql/auth'

const GuestLayout = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <>
      <Navigation user={user} />

      {/* Page Content */}
      {children}
    </>
  )
}

export default GuestLayout
