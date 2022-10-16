import React from 'react'
import '../../styles/components/sharingBlock.scss'
import DownloandApp from './downloand-app'
import '../../styles/components/downloandApp.scss'


const SharingBlock = () => {
  return (
    <div className='sharingBlock'>
      <DownloandApp 
      img='chrome.svg'
      imgAlt='downloand Ratepunk on web store Chrome'
      storeText='chrome web'
      />
      <DownloandApp 
      img='apple.svg'
      imgAlt='downloand Ratepunk on web store app store'
      storeText='apple app'
      />
      <div>★ ★ ★ ★ ★ Chrome Store reviews</div>
    </div>
  )
}

export default SharingBlock
