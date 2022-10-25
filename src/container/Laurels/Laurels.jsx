import React from 'react';
import {FaAward} from 'react-icons/fa';
import {MdLibraryBooks} from 'react-icons/md';
import {FaUserFriends} from 'react-icons/fa';
import './Laurels.css';

const Laurels = () => (
  <div className='app_about_me_container'>
    <div className="app_about_me_card">
      <FaAward className='card_icon'/>
      <h3>Тәжірибе</h3>
      <p>+6 жыл</p>
    </div>
    <div className="app_about_me_card">
      <MdLibraryBooks className='card_icon'/>
      <h3>Жобалар</h3>
      <p>+6 жыл</p>
    </div>
    <div className="app_about_me_card">
      <FaUserFriends className='card_icon'/>
      <h3>Шәкірттер</h3>
      <p>+6 жыл</p>
    </div>
  </div>
);

export default Laurels;
