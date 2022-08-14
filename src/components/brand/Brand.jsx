import React from 'react';
import { auth0, qualys, demisto, knowbe4 } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className="sc__brand section__padding" id="services">
    <div className="sc__logo logo__padding">
      <img  src={auth0} alt="auth0 "/>
    </div>
    <div className='sc__logo logo__padding'>
      <img src={qualys} alt="qualys"/>
    </div>
    <div className='sc__demisto logo__padding'>
      <img src={demisto} alt="demisto"/>
    </div>
    <div className='sc__logo logo__padding'>
      <img src={knowbe4} alt="kb4"/>
    </div>
  </div>
  )
}

export default Brand