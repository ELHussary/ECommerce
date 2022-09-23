import Link from 'next/link'
import React from 'react'
import { RiArrowDownSLine, RiCloseLine } from 'react-icons/ri'
import Dropdown from '../../ui/dropdown/Dropdown'
import ClickOutside from '@/hooks/ClickOutside'

const NavList = ({ name, dropdown }: { name: string; dropdown: boolean }) => {
  return (
    <li className="nav-links relative">
      <Link href="#">
        <a className="flex items-center gap-0.5">
          {name} {dropdown && <RiArrowDownSLine size={18} />}
        </a>
      </Link>
      {dropdown && <Dropdown />}
    </li>
  )
}

const Navigation = ({ menu, setMenu }: { menu: boolean; setMenu: any }) => {
  const domNode = ClickOutside(() => {
    setMenu(false)
  })
  return (
    <nav
      className={`fixed w-full pt-3.5 top-0 left-0 pb-1.5 border-b z-50 items-center bg-white transition ease-in-out duration-500 ${
        menu ? 'translate-y-0' : '-translate-y-full'
      } `}
      ref={domNode}>
      <section className="container flex items-center justify-between">
        <div>
          <button className=" translate-y-0.5">
            <RiCloseLine size={30} onClick={() => setMenu(!menu)} />
          </button>
        </div>
        <div>
          <ul className="flex gap-6 flex-wrap font-medium  -translate-y-0.5">
            <NavList name={'Home'} dropdown={false} />
            <NavList name={'Category'} dropdown={true} />
            <NavList name={'Blog'} dropdown={false} />
            <NavList name={'FAQ'} dropdown={false} />
            <NavList name={'About us'} dropdown={false} />
          </ul>
        </div>
      </section>
    </nav>
  )
}

export default Navigation
