import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const router = useRouter()

  return (
    <AppLayout
      header={
        <div className="flex">
          {/* Navigation Links */}
          <div className=" space-x-6 sm:-my-px sm:ml-10 flex">
            <NavLink
              href="/dashboard"
              active={router.pathname === '/dashboard'}>
              Products
            </NavLink>
            <NavLink href="/dashboard">What's new</NavLink>
            <NavLink href="/dashboard">FAQ</NavLink>
            <NavLink href="/dashboard">About us</NavLink>
          </div>
        </div>
      }>
      <Head>
        <title>Laravel - Dashboard</title>
      </Head>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              You're logged in!
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Dashboard
