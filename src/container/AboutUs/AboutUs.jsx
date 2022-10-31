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
          <small className='text-light'>Студенттер, үйде отырған аналар, қосымша табыс тапқысы келетін барлық жандарға қажет мамандық. 
 ТАРГЕТОЛОГ-  БҮГІНГІ ТАҢДА ЕҢ СҰРАНЫСҚА ИЕ МАМАНДЫҚ. ТАРГЕТТІ ЖАҚСЫ ИГЕРСЕҢІЗ, СІЗ БІРДЕН ЖОБАЛАР АЛЫП, ТАБЫСТЫ ЖҰМЫСҚА КІРІСІП КЕТЕ АЛАСЫЗ.
</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> Кәсіпкерлерге </h4>
          <small className='text-light'>СІЗ ТАРГЕТ ҚҰРАЛЫН ПАЙДАЛАНУ АРҚЫЛЫ КӘСІБІҢІЗДІҢ АЙНАЛЫМЫН ҰЛҒАЙТУ БОЙЫНША НАҚТЫ ҚАДАМДАРЫН АЛЫП, БІРДЕН 2 ЕСЕГЕ АҚША АЙНАЛЫМЫН АРТТЫРА АЛАСЫЗ. КӘСІБІҢІЗГЕ ТОЛЫҚ АНАЛИЗ ЖАСАП, КЕЗ-КЕЛГЕН ДАҒДАРЫСҚА ДАЙЫН БОЛЫП, НАРЫҚТАН ӨЗ КЛИЕНТТЕРІҢІЗДІ ТАБАСЫЗ.
</small>
         </div>
          
          <div>
          <h4><GoVerified className='details-icon'/> Кәсіби деңгейге өткісі келетін жандарға </h4>
          <small className='text-light'> СІЗ ТЕРЕҢ АНАЛИТИКА ЖАСАЙ АЛАТЫН, ҮЛКЕН КОМПАНИЯЛАР ҮШІН ДАМУ СТРАТЕГИЯСЫН ҚҰРАТЫН, КҮРДЕЛІ ЖАҒДАЙЛАРДА ТИІМДІ ШЕШІМ ҚАБЫЛДАЙ АЛАТЫН КӘСІБИ MAMAH БОЛАСЫЗ. НӘТИЖЕСІНДЕ, ӨЗ ҚЫЗМЕТІҢІЗДІ НАРЫҚТА 2 ЕСЕГЕ АРТТЫРЫП, ҚОСЫМША ҚАБІЛЕТТЕРІҢІЗДІ МОНЕТИЗАЦИЯЛАЙ АЛАСЫЗ.</small>
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
          <small className='text-light'></small>
         </div>

         <div>
          <h4><GoVerified className='details-icon'/> пайдалы плюстер</h4>
          <small className='text-light'>ШЫҒЫНСЫЗ КЛИЕНТ ЖИНАУ;
            REELS ТҮСІРУГЕ АРНАЛҒАН ИДЕЯ+ 15 ВИДЕО САБАҚ;
            КЕЙІССІЗ КЛИЕНТ ТАУЫП, АЙЛЫҚ ПРОЕКТИЛЕРМЕН ЖҰМЫС ЖАСАУ ЖОЛДАРЫ;
            5 МИНУТТА 9000 КЛИЕНТ ЖИНАУ ФИШКАСЫ;
            ӨЗ КӘСІБІҢІЗДІҢ ТАБЫСЫН 10 ЕСЕГЕ АРТТЫРУ СТРАТЕГИЯСЫ;</small>
         </div>
  
          </article>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs;
