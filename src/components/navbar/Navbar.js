import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="logo.svg" alt="" />
      </div>
      <div>
        <a href='/home'>Chrome Extension</a>
        <a href='/price'>Price Comparison</a>
        <a href='/blog'>Blog</a>
      </div>
    </div>
  )
}

export default Navbar