import React from 'react'
import './brand.css';
import{google, slack, atlassian, dropbox, shopify } from './imports'

const brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google"/>
      </div>
      <div>
        <img src={slack} alt="slack"/>
      </div>
      <div>
        <img src={atlassian} alt="altassian"/>
      </div>
      <div>
        <img src={dropbox} alt="dropbox"/>
      </div>
      <div>
        <img src={shopify} alt="shopify"/>
      </div>
    </div>
  )
}

export default brand
