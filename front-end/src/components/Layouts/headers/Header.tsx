import Link from 'next/link'
import React from 'react'
import {
  RiSearchLine,
  RiUser3Line,
  RiHeart3Line,
  RiShoppingCartLine,
  RiMenu2Line,
} from 'react-icons/ri'
import Badge from '../../ui/badge/Badge'
import ForgotPassword from '../../ui/forgotpassword/ForgotPassword'
import Login from '../../ui/login/Login'
import Register from '../../ui/register/Register'
import Navigation from '../navigation/Navigation'

const Header = () => {
  const [menu, setMenu] = React.useState<boolean>(false)
  const [login, setLogin] = React.useState<boolean>(false)
  const [register, setRegister] = React.useState<boolean>(false)
  const [forgotpassword, setForgotPassword] = React.useState<boolean>(false)
  return (
    <header className="fixed w-full z-50 pt-4 pb-3 border-b bg-white">
      {login && (
        <Login
          setLogin={setLogin}
          setRegister={setRegister}
          setForgotPassword={setForgotPassword}
        />
      )}
      {register && <Register setRegister={setRegister} setLogin={setLogin} />}
      {forgotpassword && (
        <ForgotPassword
          setLogin={setLogin}
          setForgotPassword={setForgotPassword}
          setRegister={setRegister}
        />
      )}

      <section className="flex justify-between items-center flex-wrap container">
        <div className="flex gap-5">
          <RiMenu2Line
            size={25}
            className="cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
          <RiSearchLine size={25} />
        </div>

        <div className="text-xl font-semibold">
          <Link href={'/'}>Titan</Link>
        </div>

        <div>
          <ul className="flex gap-7 text-gray-700 ">
            <li className="cursor-pointer" onClick={() => setLogin(true)}>
              <RiUser3Line size={24} />
            </li>

            <li className="relative">
              <Badge number={3} />
              <RiHeart3Line size={24} />
            </li>

            <li className="flex gap-4 text-sm items-start relative cursor-pointer">
              <Link href={'/cart'}>
                <a>
                  <Badge number={12} />
                  <RiShoppingCartLine size={24} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Navigation menu={menu} setMenu={setMenu} />
    </header>
  )
}

export default Header
