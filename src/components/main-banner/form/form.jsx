import React from 'react'
import "../../../styles/components/form.scss"

const Form = () => {
  return (
  <div className="formBlock">
    <div className="form">
      <div className='formFields'>
        <p className="title">REFER FRIENDS AND GET REWARDS</p>
        <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
          <div className='inputs'>
          <input type='email' placeholder='Enter your email address'></input>
          <button>Get Referral Link</button>
          </div>
      </div>
      <p className='formConditions'>Limits on max rewards apply.</p>
    </div>
  </div>
  )
}

export default Form;