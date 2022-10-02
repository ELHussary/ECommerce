import Navigation from '@/components/Layouts/Navigation'
import me from '@/graphql/me'
import { initializeApollo } from '@/lib/apollo'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

const AppLayout: any = ({ children }: { children: JSX.Element }) => {
  const router = useRouter()
  const { data: user, error, loading } = useQuery(me)
  React.useEffect(() => {
    if (user && router.pathname == '/login') {
      router.push('/settings')
    }
  }, [router])

  if (loading) return <>Loading</>
  if (error) router.push('/login')
  if (user)
    return (
      <>
        <Navigation user={user.me} />

        {/* Page Content */}
        {children}
      </>
    )
}

export default AppLayout

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: me,
  })

  return { props: { initialApolloState: apolloClient.cache.extract() } }
}
