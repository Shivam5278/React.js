import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HotAccesoriesMenu.css';

const HotAccesoriesMenu = () => {
  return (
    <div className='HotAccesoriesMenu'>
        <Link className='HotAccesoriesLink' to='/music'>Music Store</Link>
        <Link className='HotAccesoriesLink' to='/smartDevices'>Smart Devices</Link>
        <Link className='HotAccesoriesLink' to='/home'>Home</Link>
        <Link className='HotAccesoriesLink' to='/lifestyle'>Lifestyle</Link>
        <Link className='HotAccesoriesLink' to='/mobileAccessories'>Mobile Accesories</Link>
    </div>
  )
}

export default HotAccesoriesMenu