import React from 'react'
import '../../styles/components/sharingBlock.scss'
import DownloandApp from './downloand-app'
import '../../styles/components/downloandApp.scss'


const SharingBlock = () => {


  return (
    <div className='sharingBlock'>
      <div className='sharingConent'>
        <div className='sharing'>
        <DownloandApp
        img='chrome.svg'
        imgAlt='downloand Ratepunk on web store Chrome'
        storeText='chrome web'
        href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk]'
        />
        <DownloandApp 
        img='apple.svg'
        imgAlt='downloand Ratepunk on web store app store'
        storeText='apple app'
        href='https://apps.apple.com/app/ratepunk/id1607823726]'
        />
        </div>
        <div>★ ★ ★ ★ ★ Chrome Store reviews</div>
      </div>
    </div>
  )
}

export default SharingBlock
