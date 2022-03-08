import React from 'react'
import s from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={s.menu}>
      {
        menuItems.map(item => (
          <ActiveLink key={item.text} href={item.href} text={item.text} />
        ))
      }
    </nav>
  )
}
