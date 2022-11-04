import React from 'react';
import {GoVerified} from "react-icons/go";
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return(
  <div className='app_about_course app__bg' id='course'>
    <h2 className='headtext__roboto'>Курс кімдерге арналған?</h2>
    <div className="app_about_course_container " data-aos='fade-left'>
      <img src={images.aboutcourse01} alt="fire" />
      <div className="course_content">
        <h3 className='h__roboto'>Таргетолог</h3>
        <p className='p__roboto'> БҮГІНГІ ТАҢДА ЕҢ СҰРАНЫСҚА ИЕ МАМАНДЫҚ. ТАРГЕТТІ ЖАҚСЫ ИГЕРСЕҢІЗ, СІЗ БІРДЕН ЖОБАЛАР АЛЫП, ТАБЫСТЫ ЖҰМЫСҚА КІРІСІП КЕТЕ АЛАСЫЗ.</p>
      </div>
    </div>
    <div className="app_about_course_container " data-aos='fade-left'>
      <img src={images.aboutcourse02} alt="fire" />
      <div className="course_content">
        <h3 className='h__roboto'>Жаңа бағыт игергіңіз келсе</h3>
        <p className='p__roboto'>СТУДЕНТТЕР, ҮЙДЕ ОТЫРҒАН АНАЛАР, ҚОСЫМША ТАБЫС ТАПҚЫСЫ КЕЛЕТІН БАРЛЫҚ ЖАНДАРҒА ҚАЖЕТ МАМАНДЫҚ.</p>
      </div>
    </div>
    <div className="app_about_course_container " data-aos='fade-left'>
      <img src={images.aboutcourse03} alt="fire" />
      <div className="course_content">
        <h3 className='h__roboto'>Кәсіпкерлерге </h3>
        <p className='p__roboto'>СІЗ ТАРГЕТ ҚҰРАЛЫН ПАЙДАЛАНУ АРҚЫЛЫ КӘСІБІҢІЗДІҢ АЙНАЛЫМЫН ҰЛҒАЙТУ БОЙЫНША НАҚТЫ ҚАДАМДАРЫН АЛЫП, БІРНЕШЕ ЕСЕГЕ АҚША АЙНАЛЫМЫН АРТТЫРА АЛАСЫЗ.</p>
      </div>
    </div>
    <div className="app_about_course_container " data-aos='fade-left'>
      <img src={images.aboutcourse04} alt="fire" />
      <div className="course_content">
        <h3 className='h__roboto'>Кәсіби деңгейге өткіңіз келсе</h3>
        <p className='p__roboto'>СІЗ ТЕРЕҢ АНАЛИТИКА ЖАСАЙ АЛАТЫН, ҮЛКЕН КОМПАНИЯЛАР ҮШІН ДАМУ СТРАТЕГИЯСЫН ҚҰРАТЫН, КҮРДЕЛІ ЖАҒДАЙЛАРДА ТИІМДІ ШЕШІМ ҚАБЫЛДАЙ АЛАТЫН КӘСІБИ маман БОЛАСЫЗ</p>
      </div>
    </div>
  </div>
  )
}

export default AboutUs;
