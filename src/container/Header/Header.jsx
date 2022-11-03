import React from 'react';

import './Header.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import {FaAward} from 'react-icons/fa';
import {FaUserFriends} from 'react-icons/fa';
import CountUp from 'react-countup';


const Header = () => (
    <div className='app_header' id  = 'home'>
        <div className="app_header_place"></div>
        
        <div className="app_header_text">
            <h3>DINARA ASQAR</h3>
            <h2>SCOPE </h2>
            <h2>SCHOOL</h2>
            <h4>таргетологтар мектебінің негізін қалаушысы</h4>
        </div>
        <div className="app_header_img">
            <div className="header_korsetkish">
                <div className="korsetkish_box" data-aos='fade-up'>
                    <CountUp
                    className='counter h__opensans'
                    start={0}
                    end={5}
                    duration={6}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    decimals={0}
                    decimal=""
                    prefix="+ "
                    suffix=" "
                    />
                    <p className='p__opensans'>жылдық тәжірибе</p>
                </div>
                <div className="korsetkish_box" data-aos='fade-up'>
                    <CountUp
                    className='counter h__opensans'
                    start={0}
                    end={1829}
                    duration={6}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    decimals={0}
                    decimal=""
                    prefix="+ "
                    suffix=" "
                    />
                    <p className='p__opensans'>кәсіпкерлермен жұмыс</p>
                </div>
                <div className="korsetkish_box" data-aos='fade-up'>
                    <CountUp
                    className='counter h__opensans'
                    start={0}
                    end={300}
                    duration={6}
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                    decimals={0}
                    decimal=""
                    prefix="+ "
                    suffix=" "
                    />
                    <p className='p__opensans'>1 жылда даярланған кәсіби таргетологтар</p>
                </div>
            </div>
        </div>

    </div>
  );
  
  export default Header;
  