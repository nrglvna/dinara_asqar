import React from 'react';
import {images} from '../../constants';
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import './Slider_photo.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery07,images.gallery04, images.gallery05, images.gallery06,images.gallery08];

const Slider_photo = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 340;
    }
    else
    {
      current.scrollLeft +=340;
    }
  }

  return(
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h4 className='headtext__cormorant'>СЕРТИФИКАТТАУ КЕШІ</h4>
        <a href='https://instagram.com/dinara_asqar.kz?igshid=YmMyMTA2M2Y=' className='custom__button' >Тағы көру</a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images__container" ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className="app__gallery-images_card flex__center" key = {`gallery_image-${index+1}`}>
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>
      </div>
    </div>
  );
}

export default Slider_photo;
 