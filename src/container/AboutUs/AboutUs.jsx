import React from 'react';
import {CiTrophy} from "react-icons/ci";

import {GoVerified} from "react-icons/go";
import './AboutUs.css';

const AboutUs = () => {
  return(
  <div className='app_about_course' id='about'>

  <h5>Ең ауқымды жоба</h5>
  <h2>Курс аты</h2>
    <div className='app_about_course_info'>
      <div className='info_for_clients'>
        <h3>Курс кімдерге арналған?</h3>
        <div className="info_for_clients_content">
          <article className='details' >
          
         <div>
          <h4><CiTrophy className='details-icon'/>for new</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          
          <div>
          <h4><CiTrophy className='details-icon'/>moms</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          
          <div>
          <h4><CiTrophy className='details-icon'/>business</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
         
          <div>
          <h4> <CiTrophy className='details-icon'/>freelance</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          </article>
        </div>
      </div>
      <div className='app_bagdarlama'>
      <h3>Курс неден тұрады?</h3>
        <div className="info_for_clients_content">
          <article className='details' >
         
          <div>
          <h4> <GoVerified className='details-icon'/> 7 video</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
         
          <div>
          <h4> <GoVerified className='details-icon'/> 70</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> 500</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> diploma</h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs;
