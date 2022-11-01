import React, { useState } from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
const ShowMore = ({taqyryp,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10}) => {

    const [isShowMoreShown,setShowMoreShown]=useState(false)
    const togglebtn=()=>{
        setShowMoreShown(prevState => !prevState)
    }
    return(
        
        <div className='context_show'>
            <button onClick={togglebtn}>{isShowMoreShown ? <BsPlusCircleFill className='clicked' />: <BsPlusCircleFill />}</button>
            {isShowMoreShown ? 
            
            <ul>
                <h3> {taqyryp}</h3>
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3}</li>
                <li>{text4}</li>
                <li>{text5}</li>
                <li>{text6}</li>
                <li>{text7}</li>
                <li>{text8}</li>
                <li>{text9}</li>
                <li>{text10}</li>
            </ul>
            : <h3> {taqyryp}</h3>}
        
        </div>
    )
}
export default ShowMore;
