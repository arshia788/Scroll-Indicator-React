import React, { useEffect, useState } from 'react';

const ScrollIndicator = () => {

    const [scrollTop, setScrollTop]= useState(0);

    const onScroll=()=>{
        const scroll= document.documentElement.scrollTop;
        const height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
        console.log(height)
        const resultScroll= (scroll / height) * 100
        setScrollTop(resultScroll)
    }

    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
    },[])

    // ! hello there
    // ? makda
    // * 
    // todo 
    // 

    return (
        <div className='wrapper'>
            <div className="progressbar">
                <div className="activeprogressbar" style={{width:`${scrollTop}%`}}>

                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;