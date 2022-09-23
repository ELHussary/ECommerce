import ApplicationLogo from '@/components/ApplicationLogo'
import Dropdown from '@/components/Dropdown'
import Link from 'next/link'
import Badge from '@/components/ui/badge/Badge'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'

import {
  RiSearchLine,
  RiUser3Line,
  RiHeart3Line,
  RiShoppingCartLine,
} from 'react-icons/ri'

const Navigation = ({ user }) => {
  const { logout } = useAuth()
  const router = useRouter()

  return (
    <nav className="bg-white border-b border-gray-100">
      {/* Primary Navigation Menu */}
      <div className="container">
        <div className="flex justify-between h-14">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/dashboard">
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

          <div className="space-x-6 sm:-my-px sm:ml-10 flex">
            <NavLink
              href="/dashboard"
              active={router.pathname === '/dashboard'}>
              Products
            </NavLink>
            <NavLink href="/dashboard">What's new</NavLink>
            <NavLink href="/dashboard">FAQ</NavLink>
            <NavLink href="/dashboard">About us</NavLink>
          </div>

          {/* Settings Dropdown */}
          <div className="flex items-center space-x-6">
            <div className="flex sm:items-center sm:ml-6">
              <button>
                <RiUser3Line size={24} />
              </button>
              {user && (
                <Dropdown
                  align="right"
                  width="48"
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
