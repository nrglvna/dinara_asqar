import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import images from '../../constants/images';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './Cases.css';

const Cases = () => (
  <div className='app_case app__bg section__padding' id='cases'> 
    <h2 className='headtext__cormorant' >БІЗДІҢ КЕЙСТЕР</h2>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper_cases">
      <SwiperSlide >
        <div className="app_case_container app_wrapper_bg ">
          <div className="app_case_content">
            <h2 >Vavilon</h2>
            <a href="">insta</a>
            

            <div className="app_case_content_box">
              <p className='p__opensans'>Ссылка бойынша клик</p>
              <h3>1217</h3>
              <AiFillInstagram/>
            </div>
            <div className="app_case_content_box">
              <p className='p__opensans'>Ссылка бойынша клик</p>
              <h3>1217</h3>
              <AiFillInstagram/>
            </div>
            <div className="app_case_content_box">
              <p className='p__opensans'>Ссылка бойынша клик</p>
              <h3>1217</h3>
              <AiFillInstagram/>
            </div>

          </div>
          <img src={images.case01} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Cases;
