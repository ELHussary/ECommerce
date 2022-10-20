import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/graphql/auth'
import Head from 'next/head'

const AppLayout: any = ({ children }: { children: any }) => {
  const { user } = useAuth({ middleware: 'auth' })

  return (
    <>
      <Head>
        <title>Titan</title>
      </Head>
      {user && (
        <>
          <Navigation user={user} />

          {/* Page Content */}
          {children}
        </>
      )}
    </>
  )
}

export default AppLayout
