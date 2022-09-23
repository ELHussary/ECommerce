import React from 'react'
import Footer from '../footer/Footer'
import Header from '../headers/Header'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default AppLayout
