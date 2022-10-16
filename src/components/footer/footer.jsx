import React from 'react'
import '../../styles/components/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <div className='firstBlock'>
          <img src="logo.svg" alt="Ratepunk logo" />
          <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
          <p className='dislaimer'>© 2021 Ratepunk. All Rights Reserved.</p>
        </div>
        <div className='secondBlock'>
          <p className='sectionName'>QUICK LINKS</p>
          <a href="price">Price Comparison</a>
          <a href="extension">Chrome Extension</a>
          <a href="how-it-works">How It Works</a>
          <a href="blog">Ratepunk Blog</a>
          <a href="privacy-policy">Privacy Policy</a>
        </div>
        <div className='thirdBlock'>
          <div>
            <p className='sectionName'>CONTACT</p>
            
          </div>
          <div>
          <img src="email-footer.svg" alt="email Ratepunk" />
          <a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
          </div>
          <div>
            <p className='sectionName'>Social</p>
            <div className='social'>
              <img src="instagram.svg" alt="" />
              <img src="facebook.svg" alt="" />
              <img src="linkedin.svg" alt="" />
              <img src="twitter.svg" alt="" />
              <img src="tiktok.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
