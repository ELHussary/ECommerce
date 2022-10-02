import Navigation from './Navigation'

const GuestLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navigation user={null} />
      {children}
    </>
  )
}

export default GuestLayout
