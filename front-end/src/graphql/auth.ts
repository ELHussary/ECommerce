import axios from '@/lib/axios'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import me from './me'

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

  const { data: user, error, loading } = useQuery(me)

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const login = async (args: IApiRequest) => {
    const { setErrors, setStatus, ...props } = args

    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('api/login', props)
      .then(res => {
        if (res.status === 200) {
          console.log(true)
        }
      })
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }

  // useEffect(() => {
  //   if (middleware === 'guest' && redirectIfAuthenticated && user)
  //     router.push(redirectIfAuthenticated)
  //   if (window.location.pathname === '/verify-email' && user?.email_verified_at)
  //     router.push(redirectIfAuthenticated)
  //   // if (middleware === 'auth' && error) logout()
  // }, [user, error])

  return {
    user,
    login,
    // logout,
    middleware,
  }
}
