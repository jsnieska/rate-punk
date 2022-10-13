import "../../styles/components/mainBanner.scss"
import React from 'react'
import Form from "./form/form"

const MainBanner = () => {
  return (
    <div className='mainBanner'>
      <Form />
      <div className='stepBlock'>
        <img src="invite.svg" alt="" />
        <div className="stepTextBlock">
          <p className='stepNumber'>STEP 1</p>
          <p className='stepName'>Invite Friends</p>
          <p>Refer friends with your unique referral link.</p>
        </div>
      </div>
    </div>
  )
}

export default MainBanner