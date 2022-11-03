import React, { useState } from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
const ShowMore = ({taqyryp,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10}) => {

    const [isShowMoreShown,setShowMoreShown]=useState(false)
    const togglebtn=()=>{
        setShowMoreShown(prevState => !prevState)
    }
    return(
        
        <div className='context_show' data-aos='fade-right' >
            <button onClick={togglebtn}>{isShowMoreShown ? <BsPlusCircleFill className='clicked' />: <BsPlusCircleFill />}</button>
            {isShowMoreShown ? 
            
            <ul className='p__opensans' >
                <h3 className='h__opensans'> {taqyryp}</h3>
                <li data-aos='fade-down'className='p__opensans'>{text1}</li>
                <li  data-aos='fade-down'>{text2}</li>
                <li  data-aos='fade-down'>{text3}</li>
                <li  data-aos='fade-down'>{text4}</li>
                <li data-aos='fade-down' >{text5}</li>
                <li data-aos='fade-down' >{text6}</li>
                <li data-aos='fade-down' >{text7}</li>
                <li data-aos='fade-down' >{text8}</li>
                <li data-aos='fade-down'>{text9}</li>
                <li data-aos='fade-down'>{text10}</li>
            </ul>
            : <h3 className='h__opensans'> {taqyryp}</h3>}
        
        </div>
    )
}
export default ShowMore;
