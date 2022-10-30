import React from 'react';

import './Header.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import {FaAward} from 'react-icons/fa';
import {MdLibraryBooks} from 'react-icons/md';
import {FaUserFriends} from 'react-icons/fa';
import CountUp from 'react-countup';


const Header = () => (
  <div className='app_header app__wrapper section__padding ' id  = 'home'>
    <div className='app__wrapper_info'>
      <SubHeading title= 'Chase the new opportunities'/>
      <h1 className='app__header-h1'>
        DINARA ASQAR
      </h1>
   {/*<p className='p__opensans' style={{margin:'2rem 0'}}> Some many texts</p>*/} 
      <div className="app_about_me_cards">
      <div className="app_about_me_card">
        <div className="card_icon"><FaAward/></div>
        <div className="card_content">
        <CountUp
          className='countup'
          start={0}
          end={200}
          duration={2.75}
          useEasing={true}
          useGrouping={true}
          separator=" "
          decimals={0}
          decimal=""
          prefix="+ "
          suffix=" "
         />
          <p>+6 жыл</p>
        </div>
      </div>
      

      <div className="app_about_me_card">
        <div className="card_icon"><MdLibraryBooks/></div>
        <div className="card_content">
        <CountUp
          className='countup'
          start={0}
          end={200}
          duration={2.75}
          useEasing={true}
          useGrouping={true}
          separator=" "
          decimals={0}
          decimal=""
          prefix="+ "
          suffix=" "
         />
          <p>+6 жыл</p>
        </div>
      </div>
      
      <div className="app_about_me_card">
        <div className="card_icon"><FaUserFriends/></div>
        <div className="card_content">
        <CountUp
          className='countup'
          start={0}
          end={200}
          duration={2.75}
          useEasing={true}
          useGrouping={true}
          separator=" "
          decimals={0}
          decimal=""
          prefix="+ "
          suffix=" "
         />
          <p>+6 жыл</p>
        </div>
      </div>

    </div>
      {/*<div className='app_wrapper_buttons'>
       <button type='button' className='custom__button'>Instagram</button>
       <button type='button' className='custom__button'>Whatsup</button>
</div>*/}
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="d.a" />
    </div>
    
  </div>
);

export default Header;
