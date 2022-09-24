import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import GuestLayout from '@/components/Layouts/GuestLayout'

const Index: NextPage = () => {
  return (
    <GuestLayout>
      <main className="container py-20">
        <Head>
          <title>Laravel</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        Test
      </main>
    </GuestLayout>
  )
}

export default Index