import React, { useState } from 'react';

const ShowMore = ({text}) => {

    const [isShowMoreShown,setShowMoreShown]=useState(false)
    const togglebtn=()=>{
        setShowMoreShown(prevState => !prevState)
    }
    return(
        <div className='context'>
            <button>Read Mre</button>
            {isShowMoreShown ? text:none}
        </div>
    )
}

export default ShowMore;
