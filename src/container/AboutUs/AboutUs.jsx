import React from 'react';
import {GoVerified} from "react-icons/go";
import './AboutUs.css';

const AboutUs = () => {
  return(
  <div className='app_about_course' id='about'>

  <h4>Ең ауқымды жоба</h4>
  <h2>"МЕГА ТАРГЕТ" ПРАКТИКАЛЫҚ КУРСЫ</h2>
    <div className='app_about_course_info'>
      <div className='info_for_clients'>
        <h3>Курс кімдерге арналған?</h3>
        <div className="info_for_clients_content">
          <article className='details' >
          
         <div>
          <h4><GoVerified className='details-icon'/> Жаңадан үйренгісі келетін жандарға </h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> Кәсіпкерлерге </h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> Кәсіби деңгейге өткісі келетін жандарға </h4>
          <small className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
         </div>
         
          <div>
          <h4> <GoVerified className='details-icon'/>freelance</h4>
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
          <h4> <GoVerified className='details-icon'/> 12 БЛОК</h4>
          <small className='text-light'>Курстың құрылымы: 5 жылда жиналған тәжірибе және эксперттер қолданатын тың техникалардан тұрады</small>
         </div>
         
          <div>
          <h4> <GoVerified className='details-icon'/> 84 ВИДЕОСАБАҚ</h4>
          <small className='text-light'>Курс барынша тиімді болу үшін 15-20 минуттан аспайтын, практикада көрсетілетін бейнероликтер</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> ӘР МОДУЛЬ САЙЫН ДЕҢГЕЙІҢІЗДІ ТЕКСЕРУГЕ АРНАЛҒАН ТЕСТТЕР</h4>
          <small className='text-light'>шығынсыз клиент жинау;</small>
         </div>
  
          </article>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs;
