import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

const AppLayout = ({ children }: { children: any }) => {
  const { user } = useAuth({ middleware: 'auth' })

  if (!user)
    return (
      <>
        <Head>
          <title>Laravel</title>
        </Head>
      </>
    )

  return (
    <>
      <Navigation user={user} />

      {/* Page Content */}
      {children}
    </>
  )
}

export default AppLayout
