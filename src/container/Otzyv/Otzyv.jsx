import React from 'react'
import {AiFillInstagram} from 'react-icons/ai';
import images from '../../constants/images';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './Otzyv.css'

export default function Otzyv() {
  return (
    <div className='app__otzyv app__bg'>
      <h2 className='headtext__roboto'>ОТЗЫВТАР</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper_otzyv">
        <SwiperSlide className='app__otzyv__swiper app_wrapper_bg'>
          
          <div className="app__otzyv__swiper__content">
            <img src={images.otzyv01} alt="otzyvtar" />
            <div><h3 className='h__roboto'>Сеитова Гумисгул</h3>
              <h4 className='p__roboto'><AiFillInstagram/>mary_target04</h4>
            </div> 
          </div>
          <p className='p__roboto'>Бұрын да таргет сабағын оқығанмын. Бірақ,ол жерден өз керек білімімді алмаған соң,Сіздің сабағыңыздан таптым. Барлығын қарапайым қазақ тілінде өте әдемі жеткізіп бердіңіз.Динара ханым,маған таргеттен тереңдетіп берген біліміңіз үшін алғысым шексіз. Бәрін от А до Я түсіндіріп бергеніңізге. Бәрін по полочкам қойып,басымдағы тұманды ашып бергеніңізге рахмет😘</p>
        </SwiperSlide>
        <SwiperSlide className='app__otzyv__swiper app_wrapper_bg'>
          
          <div className="app__otzyv__swiper__content">

            <img src={images.otzyv02} alt="otzyvtar" />
            <div>
              <h3 className='h__roboto'>Маржан Арапбаева</h3>
            <h4 className='p__roboto'><AiFillInstagram/>marzhan_arapbayeva</h4>
            </div>
            
           
          </div>
          <p className='p__roboto'>Динара ханым  айлық проект алдым 2аптаға 40мың  келесі ай 100мың тенге болады бұйырса. Рахмет 😘сізге сіздің арқаңызда кредитсіз өмір сурудемін.Сізге мың алғыс бала шағаңыздың қызығын көріңіз.Білікті  өз өзіне сенімді ТАРГЕТОЛОГ етіп шығардыңыз</p>
        </SwiperSlide>
        <SwiperSlide className='app__otzyv__swiper app_wrapper_bg'>
          
          <div className="app__otzyv__swiper__content">
            <img src={images.otzyv03} alt="otzyvtar" />
            <div>
              <h3 className='h__roboto'>Джумагазиева Гульзер</h3>
            <h4 className='p__roboto'><AiFillInstagram/>gulzer.nurbolatovna</h4>
            </div>
          </div>
          <p className='p__roboto'>Осы жылы оқыдым курс таргеттен офлайн. Оқуда барлығы дұрыс түсіндіріліп,практида көп болды сабақта .Курс өте оңай және жеңіл болды .Динара ханым уақытылы,нақты түсіндіреді,әр уақытта жауап беріп барлығын шешіп береді.Динара ханымнан өткен сабаққа кеткен шығынымды  курс кезінде ақтап алдым</p>
          
        </SwiperSlide>
        <SwiperSlide className='app__otzyv__swiper app_wrapper_bg'>
          
          <div className="app__otzyv__swiper__content">
            <img src={images.otzyv04} alt="otzyvtar" />
            <div>

            
            <h3 className='h__roboto'>Егеубаева Айдана</h3>
            <h4 className='p__roboto'><AiFillInstagram/>egeubaeva.aidana</h4>
            </div>
          </div>
          <p className='p__roboto'>Динара ханым сізге алғысымды білдіргім келіп отыр, Алланың қалауымен сізді жолықтырған Аллаға ризамын❤️Өте түсінікті, қарапайым тілмен барлығын жеткіздіңіз❤️күн демей, түн демей барлық білмей жатқан сұрақтарыма жауап беріп жүрсіз, Алла разы болсын, кеше ғана оқуды аяқтасам да, уже 2 проектке реклама жібердім аллаға шүкір❤️</p>
          
        </SwiperSlide>
        <SwiperSlide className='app__otzyv__swiper app_wrapper_bg'>
          
          <div className="app__otzyv__swiper__content">
            <img src={images.otzyv05} alt="otzyvtar" />
            <div>

            
            <h3 className='h__roboto'>Ұлжан Тұрлыбек</h3>
            <h4 className='p__roboto'><AiFillInstagram/>ulzhan.turlybek</h4>
            </div>
          </div>
          <p className='p__roboto'>Динара ханым!Курсыңыз жоғарғы деңгейде,өзіңіз вообще наставник ретінде де адам ретінде де керемет жансыз. Сіздің курсыңыздың арқасында таргетке деген білімім жаңа бір деңгейге көтерілді. Сіздің курсыңыздан соң таргеттен білетінімнен білмейтінім көп екенін түсіндім. Аудитория таңдау,дұрыс мақсат қою,креатив жасау -керек дүниенің бәрін сіздің курстан үйрендім. Әрдайым сұрақтарыма 24/7 жауап беріп отырдыңыз. Курстағы сапалы кері-байланыс үшін рахмет сізге😘😘😘Шәкірттеріңіз көбейе берсін, біліміңіз өсе берсін!Толағай табыстар тілеймін сізге тек❤️</p>
          
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
