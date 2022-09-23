import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <AppLayout>
      <Head>
        <title>Laravel</title>
      </Head>

      <div className="container">test</div>
    </AppLayout>
  )
}
