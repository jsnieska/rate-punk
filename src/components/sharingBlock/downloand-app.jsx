import React from 'react'

const DownloandApp = ({ img, imgAlt, storeText, href }) => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='downloand-app'
    onClick={() => openInNewTab(href)}
    >
      <img src={img} alt={imgAlt} />
        <div>
          <p>available in the</p>
          <p className='storeText'>{storeText} store</p>
        </div>
    </div>
  )
}

export default DownloandApp
