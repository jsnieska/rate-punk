import React from 'react'

const StepsBlock = ({ img, imgAlt, title, stepNumber, text }) => {
  return (
    <div className='stepsBlock'>
      <img src={img} alt={imgAlt} />
        <div className='featureText'>
          <p className='stepNumber'>STEP{stepNumber}</p>
          <p className='stepName'>{title}</p>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default StepsBlock