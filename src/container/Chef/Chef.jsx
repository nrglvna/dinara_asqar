import React from 'react';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app_about_sostav app__bg2 '>
    <h2 className='headtext__roboto'>Курс неден тұрады?</h2>

    <div className="boxes" data-aos='fade-left'>
      <img src={images.sostav01} alt="" />
      <div className="boxes_content">
        <h3 className='h__roboto'>12 блок </h3>
        <p className='p__roboto'>КУРСТЫҢ ҚҰРЫЛЫМЫ: 5 ЖЫЛДА ЖИНАЛҒАН ТӘЖІРИБЕ ЖӘНЕ ЭКСПЕРТТЕР ҚОЛДАНАТЫН ТЫҢ ТЕХНИКАЛАРДАН ТҰРАДЫ</p>
      </div>
    </div>

    <div className="boxes" data-aos='fade-left'>
      <img src={images.sostav02} alt="" />
      <div className="boxes_content">
        <h3 className='h__roboto'>84 ВИДЕОСАБАҚ</h3>
        <p className='p__roboto'>КУРС БАРЫНША ТИІМДІ БОЛУ ҮШІН 15-20 МИНУТТАН АСПАЙТЫН, ПРАКТИКАДА КӨРСЕТІЛЕТІН БЕЙНЕРОЛИКТЕР</p>
      </div>
    </div>

    <div className="boxes" data-aos='fade-left'>
      <img src={images.sostav03} alt="" />
      <div className="boxes_content">
        <h3 className='h__roboto'>ТЕСТТЕР </h3>
        <p className='p__roboto'> ӘР МОДУЛЬ САЙЫН ДЕҢГЕЙІҢІЗДІ ТЕКСЕРУГЕ АРНАЛҒАН ТЕСТТЕР</p>
      </div>
    </div>

    <div className="boxes" data-aos='fade-left'>
      <img src={images.sostav04} alt="" />
      <div className="boxes_content">
        <h3 className='h__roboto'>ПАЙДАЛЫ ПЛЮСТЕР </h3>
        <p className='p__roboto'>ШЫҒЫНСЫЗ КЛИЕНТ ЖИНАУ; КЕЙІССІЗ КЛИЕНТ ТАУЫП, АЙЛЫҚ ПРОЕКТіЛЕРМЕН ЖҰМЫС ЖАСАУ ЖОЛДАРЫ; 5 МИНУТТА 9000 КЛИЕНТ ЖИНАУ ФИШКАСЫ;</p>
      </div>
    </div>
    
  </div>
);

export default Chef;
