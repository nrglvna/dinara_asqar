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
      <li className='p__opensans'><a href="#course">Курс</a></li>
      <li className='p__opensans'><a href="#paketter">Жазылу</a></li>
      <li className='p__opensans'><a href="#cases">Нәтижелер</a></li>
      <li className='p__opensans'><a href="#footer">Байланысу</a></li>
    </ul>
    <div className='app_navbar-sign'>
      <a href='https://wa.me/77751948917?text=Сәлеметсізбе!%20 МЕГА%20 Таргет%20курсын%20сатып%20алғым%20келеді' className='p__opensans '>Курсқа тіркелу</a>
    </div>
    <div className='app_navbar-smallscreen' >
      <GiHamburgerMenu color='#ffff' fontSize={27} onClick={()=>setToggleMenu(true)}/>

      {toggleMenu &&(
      <div className='app_navbar-smallscreen-overlay flex__center slide-bottom'>
        <AiOutlineClose fontSize={27} className='overlay_close' onClick={()=>setToggleMenu(false)}/>
        <ul className='app_navbar-smallscreen-links'>
          <li className='p__opensans'><a href="#home" onClick={()=>setToggleMenu(false)}>Басты бет</a></li>
          <li className='p__opensans'><a href="#course" onClick={()=>setToggleMenu(false)}>Курс</a></li>
          <li className='p__opensans'><a href="#paketter" onClick={()=>setToggleMenu(false)} >Жазылу</a></li>
          <li className='p__opensans'><a href="#cases" onClick={()=>setToggleMenu(false)} >Нәтижелер</a></li>
          <li className='p__opensans'><a href="#footer" onClick={()=>setToggleMenu(false)} >Байланысу</a></li>
          </ul>
      </div>
     )} 
    </div>
  </nav>
  )
}

export default Navbar;
