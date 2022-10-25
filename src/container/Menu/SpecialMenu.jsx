import React from 'react';
import {BiCheck} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import './SpecialMenu.css';

const SpecialMenu = () => {
  return(

  <div className='app_tarif_container' >
    <article className='service'>
      <div className="service_head">
        <h3>STANDART пакеті</h3>
      </div>
      <ul className="service_list">
        <li>
          <BiCheck className="service_list-icon"/>
          <p >5 блок</p>

        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Таргетті кәсіби үйретудің жаңа модулі</p> 
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Оқу платформасына 6 ай қолжетімділік</p>
          
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Интерактивті форматтағы платформа</p>
          
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Трекер менеджер</p>
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Онлайн 5 сағаттық воркшоп</p>
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Практикада көрсететін инструктор </p>
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Нетворкинг</p>
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Сертификат</p>
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Диплом</p>
        </li>
      </ul>
      <div className="service_button"><a href='#main' className='custom_button'>ҚАТЫСАМЫН</a></div>
    </article>



    <article className='service'>
      <div className="service_head">
        <h3>PREMUIM пакеті</h3>
      </div>
      <ul className="service_list">
        <li>
          <BiCheck className="service_list-icon"/>
          <p >5 блок</p>

        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Таргетті кәсіби үйретудің жаңа модулі</p> 
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Оқу платформасына 6 ай қолжетімділік</p>
          
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Интерактивті форматтағы платформа</p>
          
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Трекер менеджер</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Онлайн 5 сағаттық воркшоп</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Практикада көрсететін инструктор </p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Нетворкинг</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p>Сертификат</p>
        </li>
        <li>
          <IoMdClose className="service_list-icon"/>
          <p className='service_unlisted'>Диплом</p>
        </li>
      </ul>
      <div className="service_button"><a href='#main' className='custom_button'>ҚАТЫСАМЫН</a></div>
    </article>

    <article className='service'>
      <div className="service_head">
        <h3>VIP пакеті</h3>
      </div>
      <ul className="service_list">
        <li>
          <BiCheck className="service_list-icon"/>
          <p >7 блок</p>

        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Таргетті кәсіби үйретудің жаңа модулі</p> 
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Оқу платформасына 6 ай қолжетімділік</p>
          
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Интерактивті форматтағы платформа</p>
          
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Трекер менеджер</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Онлайн 5 сағаттық воркшоп</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Практикада көрсететін инструктор </p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Нетворкинг</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Сертификат</p>
        </li>
        <li>
          <BiCheck className="service_list-icon"/>
          <p >Диплом</p>
        </li>
      </ul>
      <div className="service_button"><a href='#main' className='custom_button'>ҚАТЫСАМЫН</a></div>
      
    </article>

  </div>
  )
}
export default SpecialMenu;
