import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
