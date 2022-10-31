import React from 'react';
import { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { dinara } from '../../constants';
import './Video.css';

const Video= () => {
  const [playVideo,setplayVideo] = useState();
  const vidRef = React.useRef();

  const handleVideo = ()=>{
    setplayVideo((prevPlayVideo)=>!prevPlayVideo)

    if(playVideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }
  
  return(
    <div className="app__video">
      <video src={dinara}
      ref={vidRef}
      type = 'video/mp4'
      controls= {false}
      loop
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center "onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill style={{color:'var(--color-golden)',fontSize:'60px'}}/>):<BsFillPlayFill style={{color:'var(--color-golden)',fontSize:'60px'}}/>
          }
        </div>
      </div> 
    </div>
  )
}
export default Video;
