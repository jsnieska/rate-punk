import React from 'react'

const DownloandApp = ({ img, imgAlt, storeText }) => {
  return (
    <div className='downloand-app'>
      <img src={img} alt={imgAlt} />
        <div>
          <p>available in the</p>
          <p className='storeText'>{storeText} store</p>
        </div>
    </div>
  )
}

export default DownloandApp
