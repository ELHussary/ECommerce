import useSWR, { Middleware } from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


interface IUseAuth {
  middleware: string
  redirectIfAuthenticated?: any
}

interface IApiRequest {
  setErrors: React.Dispatch<React.SetStateAction<never[]>>
  setStatus: React.Dispatch<React.SetStateAction<any|null>>
  [key: string]: any
}

export const useAuth = (config: IUseAuth) => {
  const router = useRouter()
  const {middleware, redirectIfAuthenticated} = config || {}


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

  const register = async ({ data, ...props }: { data: Props }) => {
    await csrf()

    data.setErrors([])

    axios
      .post('/register', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error

        data.setErrors(error.response.data.errors)
      })
  }

  const login = async (args: IApiRequest) => {
    const { setErrors, setStatus, ...props } = args

    await csrf()

   setErrors([])
    setStatus(null)

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error

       setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async (data: Props) => {
    await csrf()

    data.setErrors([])
    data.setStatus(null)

    axios
      .post('/forgot-password', { email: data.email })
      .then(response => data.setStatus(response.data.status))
      .catch(error => {
        if (error.response.status !== 422) throw error

        data.setErrors(error.response.data.errors)
      })
  }

  const resetPassword = async ({ data, ...props }: { data: Props }) => {
    await csrf()

    data.setErrors([])
    data.setStatus(null)

    axios
      .post('/reset-password', { token: router.query.token, props })
      .then(response =>
        router.push('/login?reset=' + btoa(response.data.status)),
      )
      .catch(error => {
        if (error.response.status !== 422) throw error

        data.setErrors(error.response.data.errors)
      })
  }

  const resendEmailVerification = (data: Props) => {
    axios
      .post('/email/verification-notification')
      .then(response => data.setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }

    window.location.pathname = '/login'
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
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}
