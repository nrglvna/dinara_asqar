import React from 'react';
import ShowMore from '../../components'
import './Intro.css';

const Intro = () => (
  <div className='bagdarlama'>
    <div className="bagdarlama_head">

    </div>
    <bagdarlama className="block">
      <div className='takyryp'>
        <button>Read More</button>
        <h3>0- ден баста</h3>
      </div>
      <ShowMore>
        ролджлорпаролд
        <ul>
          <li>Таргет настройкасы</li>
          <li>Таргет настройкасы</li>
          <li>Таргет настройкасы</li>
          <li>Таргет настройкасы</li>
        </ul>
      </ShowMore>
        
      
    </bagdarlama>
    
  </div>
);

export default Intro;
