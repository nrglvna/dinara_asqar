import React, { useState } from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
const ShowMore = ({taqyryp,text1,text2,text3,text4}) => {

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
            </ul>
            : <h3> {taqyryp}</h3>}
        
        </div>
    )
}
export default ShowMore;
