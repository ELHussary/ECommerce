import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/ui/dropdown/Dropdown'
import Link from 'next/link'
import Badge from '@/components/ui/badge/Badge'
import DropdownLink, {
  DropdownButton,
} from '@/components/ui/dropdown/DropdownLink'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import React from 'react'

import {
  RiSearchLine,
  RiUser3Line,
  RiHeart3Line,
  RiShoppingCartLine,
} from 'react-icons/ri'
import Login from '../ui/login/Login'
import Register from '../ui/register/Register'
import { useAuth } from '@/graphql/auth'

const Navigation = ({ user }: { user: any }) => {
  const [login, setLogin] = React.useState<boolean>(false)
  const [register, setRegister] = React.useState<boolean>(false)

  const router = useRouter()
  const { logout } = useAuth()

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full rounded-sm z-50">
      {login && <Login setLogin={setLogin} setRegister={setRegister} />}
      {register && <Register setRegister={setRegister} setLogin={setLogin} />}
      {/* Primary Navigation Menu */}
      <div className="container">
        <div className="flex justify-between h-14">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a>
                  <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                </a>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-x-8 sm:-my-px ml-6 flex">
              <button>
                <RiSearchLine size={23} />
              </button>
            </div>
          </div>

          <div className="hidden space-x-6 sm:-my-px md:ml-10 md:flex">
            <NavLink href="/category" active={router.pathname === '/category'}>
              Products
            </NavLink>
            <NavLink href="/dashboard">What's new</NavLink>
            <NavLink href="/dashboard">FAQ</NavLink>
            <NavLink href="/dashboard">About us</NavLink>
          </div>

          {/* Settings Dropdown */}
          <div className="flex items-center space-x-6">
            <div className="flex sm:items-center sm:ml-6">
              {!user && (
                <button>
                  <RiUser3Line size={24} onClick={() => setLogin(true)} />
                </button>
              )}
              {user && (
                <Dropdown
                  align="right"
                  width={'48'}
                  trigger={
                    <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                      <div>{user?.name}</div>

                      <div className="ml-1">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>
                  }>
                  {/* Authentication */}
                  <DropdownLink
                    href="/settings"
                    active={router.pathname === '/settings'}>
                    Settings
                  </DropdownLink>
                  <DropdownButton onClick={logout}>Logout</DropdownButton>
                </Dropdown>
              )}
            </div>
            <div>
              <ul className="flex space-x-5 text-gray-700 ">
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
