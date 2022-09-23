import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AppLayout = ({ children }: { children: any }) => {
  const { user } = useAuth({ middleware: 'guest' })

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation user={user} />

      {/* Page Content */}
      <main>{children}</main>
    </div>
  )
}

export default AppLayout
