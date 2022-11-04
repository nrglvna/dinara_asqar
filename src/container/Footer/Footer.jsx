import React from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer' id='footer'>
    <a href='https://instagram.com/dinara_asqar.kz?igshid=YmMyMTA2M2Y='><BsInstagram className='app__footer__icon'/></a>
    <img src={images.logo} alt="logo" />
    <a href='https://wa.me/77711849594'><BsWhatsapp className='app__footer__icon'/></a>
  </div>
);

export default Footer;
