import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useSWR from 'swr'

interface IUseAuth {
  middleware: string
  redirectIfAuthenticated?: any
}

interface IApiRequest {
  setErrors: React.Dispatch<React.SetStateAction<never[]>>
  setStatus: React.Dispatch<React.SetStateAction<any | null>>
  [key: string]: any
}

export const useAuth = (config?: IUseAuth) => {
  const router = useRouter()
  const { middleware, redirectIfAuthenticated } = config || {}

  const { data: user, error, mutate } = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409) throw error

        router.push('/verify-email')
      }),
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const login = async (args: IApiRequest) => {
    const { setErrors, setStatus, ...props } = args

    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/api/login', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/api/logout').then(() => mutate())
    }

    window.location.pathname = '/'
  }

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (window.location.pathname === '/verify-email' && user?.email_verified_at)
      router.push(redirectIfAuthenticated)
    if (middleware === 'auth' && error) logout()
  }, [user, error])

  return {
    user,
    login,
    logout,
  }
}
