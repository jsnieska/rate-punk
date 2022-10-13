import React from 'react'

const StepsBlock = ({ imUrl, title, content }) => {
  return (
    <div>
      <img src={imUrl} alt="" />
      <div className='klasesName'>{title}</div>
    </div>
  )
}

export default StepsBlock