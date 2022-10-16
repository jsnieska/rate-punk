import React from 'react'
import "../../../styles/components/stepsBlock.scss"

const StepsBlock = ({ img, imgAlt, title, stepNumber, text }) => {
  return (
    <div className='stepBlock'>
      <img src={img} alt={imgAlt} />
        <div className='stepTextBlock'>
          <p className='stepNumber'>STEP {stepNumber}</p>
          <p className='stepName'>{title}</p>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default StepsBlock