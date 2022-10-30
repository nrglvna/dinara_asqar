import React, { useState } from 'react';
import {GiHamburgerMenu}  from 'react-icons/gi';
import {AiOutlineClose}  from 'react-icons/ai';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return(
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.logo} alt= 'scope school logo'/>
    </div>
    <ul className='app_navbar-links'>
      <li className='p__opensans'><a href="#home">Басты бет</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#cource">Курс</a></li>
      <li className='p__opensans'><a href="#awards">Нәтижелер</a></li>
      <li className='p__opensans'><a href="#contacts">Байланысу</a></li>
    </ul>
    <div className='app_navbar-sign'>
      <a href="https://wa.me/77717849422" className='p__opensans '>Курсқа тіркелу</a>
    </div>
    <div className='app_navbar-smallscreen' >
      <GiHamburgerMenu color='#ffff' fontSize={27} onClick={()=>setToggleMenu(true)}/>

      {toggleMenu &&(
      <div className='app_navbar-smallscreen-overlay flex__center slide-bottom'>
        <AiOutlineClose fontSize={27} className='overlay_close' onClick={()=>setToggleMenu(false)}/>
        <ul className='app_navbar-smallscreen-links'>
            <li className='p__opensans'><a href="#home">Басты бет</a></li>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#cource">Курс</a></li>
            <li className='p__opensans'><a href="#awards">Нәтижелер</a></li>
            <li className='p__opensans'><a href="#contacts">Байланысу</a></li>
          </ul>
      </div>
     )} 
    </div>
  </nav>
  )
}

export default Navbar;
