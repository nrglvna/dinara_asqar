import React from 'react';
import {images} from '../../constants';
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import './Slider_photo.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03,images.gallery04, images.gallery05, images.gallery06];

const Slider_photo = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction)=>{
    const {current} = scrollRef;
    if(direction === 'left'){
      current.scrollLeft -= 300;
    }
    else
    {
      current.scrollLeft +=300;
    }
  }

  return(
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className='headtext__cormorant'>Галлерея</h1>
        <p className='p__opensans' style={{color: '#AAA',marginTop:'2rem'}}>Lorem ipsum drtyuiolk,mjnc jrenfopwajedrnfbpiwe wiedfbpawidjfbpwdjierf</p>
        <button type = "button" className='custom__button'>Тағы көру</button>
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
 