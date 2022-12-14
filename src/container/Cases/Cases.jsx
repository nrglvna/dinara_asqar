import React from 'react';
import {AiFillInstagram , AiFillDollarCircle} from 'react-icons/ai';
import {FaCoins} from 'react-icons/fa';
import images from '../../constants/images';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "swiper/css";
import "swiper/css/navigation";
import './Cases.css';
import { useEffect } from 'react';

const Cases = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])


  return(
  <div className='app_case app__bg' id='cases'> 
    <h2 className='headtext__roboto' >БІЗДІҢ КЕЙСТЕР</h2>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper_cases">
      <SwiperSlide className='app_wrapper_bg' >
        <div className="app_case_container  ">
          <div className="app_case_content">
            <h2 className='h__roboto'>ВАВИЛОН АҚТӨБЕ</h2>
            <a href="" className='p__opensans'>@vavilon_aktobe</a>
            

            <div className="app_case_content_box" data-aos='fade-up'>
              <p className='p__opensans'>Клик саны</p>
              <h3 className='h__opensans'>1217</h3>
              <AiFillInstagram className='insta_icon' />
            </div>
            <div className="app_case_content_box" data-aos='fade-up'>
              <p className='p__roboto'>Клик бағасы</p>
              <h3 className='h__opensans'>0,09 $</h3>
              <AiFillDollarCircle className='insta_icon'/>
            </div>
            <div className="app_case_content_box" data-aos='fade-up'>
              <p className='p__roboto'>Сатылым</p>
              <h3 className='h__opensans'>30 000 000</h3>
              <FaCoins className='insta_icon' />
            </div>
          </div>
          <img src={images.case01} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='app_wrapper_bg'>
        <div className="app_case_container  ">
          <div className="app_case_content">
            <h2 className='h__opensans'>АСТАУ</h2>
            <a href="" className='p__opensans'>@aigerim.malikqyzy</a>
            

            <div className="app_case_content_box" data-aos='fade-left' data-aos-delay="2500">
              <p className='p__opensans'>Kлик саны</p>
              <h3 className='h__opensans'>491</h3>
              <AiFillInstagram className='insta_icon' />
            </div>
            <div className="app_case_content_box" data-aos='fade-left' data-aos-delay="2500">
              <p className='p__opensans'>Клик бағасы</p>
              <h3 className='h__opensans'>0,04 $</h3>
              <AiFillDollarCircle className='insta_icon'/>
            </div>
            <div className="app_case_content_box" data-aos='fade-left' data-aos-delay="2500">
              <p className='p__opensans'>Сатылым</p>
              <h3 className='h__opensans'>1 000 000</h3>
              <FaCoins className='insta_icon' />
            </div>
          </div>
          <img src={images.case03} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='app_wrapper_bg' >
        <div className="app_case_container  ">
          <div className="app_case_content">
            <h2 className='h__opensans'>ВОРОТА НА ЗАКАЗ</h2>
            <a href="" className='p__opensans'>@vorota.nazakaz</a>
            

            <div className="app_case_content_box" data-aos='fade-left' data-aos-delay="6500">
              <p className='p__opensans'>Клик саны</p>
              <h3 className='h__opensans'>793</h3>
              <AiFillInstagram className='insta_icon' />
            </div>
            <div className="app_case_content_box" data-aos='fade-right'>
              <p className='p__opensans'>Клик бағасы</p>
              <h3 className='h__opensans'>0,033 $</h3>
              <AiFillDollarCircle className='insta_icon'/>
            </div>
            <div className="app_case_content_box" data-aos='fade-right'>
              <p className='p__opensans'>Сатылым</p>
              <h3 className='h__opensans'>22 000 000</h3>
              <FaCoins className='insta_icon' />
            </div>
          </div>
          <img src={images.case02} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
)
}
export default Cases;
