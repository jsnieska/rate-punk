import React, { useState } from 'react'
import '../../styles/components/navbar.scss'

const Navbar = () => {
 const [currentTab, setCurrentTab] = useState(1);

 const handleTabChange = (tabNumber) => {
  setCurrentTab(tabNumber);
 }

  return (
    <div className='navbar'>
      <div className='navContent'>
        <div className='logo'>
          <img src="logo.svg" alt="Ratepunk logo" />
        </div>
        <div>
          <a href='/home' onClick={() => handleTabChange(1)} style={{color: currentTab === 1 ? '#4EB3E3' : '#434A54'}}>Chrome Extension</a>
          <a href='/price' onClick={() => handleTabChange(2)} style={{color: currentTab === 2 ? '#4EB3E3' : '#434A54'}}>Price Comparison</a>
          <a href='/blog' onClick={() => handleTabChange(3)} style={{color: currentTab === 3 ? '#4EB3E3' : '#434A54'}}>Blog</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar