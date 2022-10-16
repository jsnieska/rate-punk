import React from 'react'
import "../../styles/components/mainBanner.scss"
import Form from "./form/form"
import StepsBlock from "./stepsBlock/stepsBlock"
import "../../styles/components/stepsBlock.scss"


const MainBanner = () => {
  return (
    <div className='mainBanner'>
      <Form />
      <div className="stepBlocks">
        <StepsBlock 
        img="invite.svg"
        imgAlt="Invite Friends"
        title="Invite Friends"
        stepNumber="1"
        text="Refer friends with your unique referral link."
        />
        <StepsBlock 
        img="collect-coins.svg"
        imgAlt="Collect Coints"
        title="COLLECT COINS"
        stepNumber="2"
        text="Get 1 coin for each friend that installs our extension using your referral link."
        />
        <StepsBlock 
        img="voucher.svg"
        imgAlt="Receive a voucher"
        title="Get Voucher"
        stepNumber="3"
        text="Redeem for a $20 hotel booking voucher once you collect 20 coins."
        />
      </div>
    </div>
  )
}

export default MainBanner
