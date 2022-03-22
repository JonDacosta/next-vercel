import React from 'react'
import { ActiveLinks } from './ActiveLinks';
import styles from './Navbar.module.css';


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
    <nav className={styles['menu-container']}>
      {
        menuItems.map( ({ text, href }) => (
          <ActiveLinks key={ href } text={ text } href={ href }></ActiveLinks>
        ))
      }


        {/* <ActiveLinks text="Home" href="/">Home</ActiveLinks>
        <ActiveLinks text="About" href="/about">About</ActiveLinks>
        <ActiveLinks text="Contact" href="/contact">Contact</ActiveLinks>
        <ActiveLinks text="Pricing" href="/pricing">Pricing</ActiveLinks> */}
    </nav>
  )
}

