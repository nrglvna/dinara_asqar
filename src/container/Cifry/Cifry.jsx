import React from 'react';
import {AiFillInstagram} from 'react-icons/ai';
import {MdLibraryBooks} from 'react-icons/md';
import {FaUserFriends} from 'react-icons/fa';
import CountUp from 'react-countup';
import images from '../../constants/images';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './Cifry.css';

const Cifry = () => (
  
  <div className='app_about_me_container'> 
    
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <h2  >КЭЙСТЕР</h2>
      <SwiperSlide>
        <div className="app__case__data">
          <div className="app__case__data_img">
            <a href="https://www.instagram.com/tv/CkU2msGjUgh/?igshid=MDJmNzVkMjY="><AiFillInstagram/></a>
            <img src={images.case01} alt="" />
          </div>    
          <p>fghjklljhgfdsdfghj</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="app__case__data">
          <div className="app__case__data_img">
            <a href="https://www.instagram.com/p/ChCEd5oDGlx/?igshid=MDJmNzVkMjY="><AiFillInstagram/></a>
            <img src={images.case02} alt="" />
          </div>    
          <p>fghjklljhgfdsdfghj</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="app__case__data">
          <div className="app__case__data_img">
            <a href="https://www.instagram.com/p/ChaQrFFs4V6/?igshid=MDJmNzVkMjY="><AiFillInstagram/></a>
            <img src={images.case03} alt="" />
          </div>    
          <p>fghjklljhgfdsdfghj</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="app__case__data">
          <div className="app__case__data_img">
            <a href="https://www.instagram.com/p/Ch901fzDbev/?igshid=YmMyMTA2M2Y="><AiFillInstagram/></a>
            <img src={images.case04} alt="" />
          </div>    
          <p>fghjklljhgfdsdfghj</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="app__case__data">
          <div className="app__case__data_img">
            <a href="https://www.instagram.com/p/ChCEQAFDm2P/?igshid=MDJmNzVkMjY="><AiFillInstagram/></a>
            <img src={images.case05} alt="" />
          </div>    
          <p>fghjklljhgfdsdfghj</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Cifry;
