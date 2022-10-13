import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
 const [currentTab, setCurrentTab] = useState(1);

 const handleTabChange = (tabNumber) => {
  setCurrentTab(tabNumber);
 }

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="logo.svg" alt="" />
      </div>
      <div>
        <a href='/home' onClick={() => handleTabChange(1)} style={{color: currentTab === 1 ? '#4EB3E3' : '#434A54'}}>Chrome Extension</a>
        <a href='/price'>Price Comparison</a>
        <a href='/blog'>Blog</a>
      </div>
    </div>
  )
}

export default Navbar