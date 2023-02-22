import React from 'react';

export default function Arrows({prevSlide,nextSlide}){
    return(
        <div className='arrows'>
            <span className='prev' onClick={prevSlide}>
                <svg className='w-4 lg:w-6' viewBox="0 0 21.63 22.67">
                    <path fill="#fff" d="M1,11.34A2,2,0,0,0,2.06,13.1l15.62,8.34a2,2,0,0,0,2.95-1.77V3a2,2,0,0,0-2.95-1.76L2.06,9.57A2,2,0,0,0,1,11.34m-1,0A3,3,0,0,1,1.59,8.69L17.21.36A3,3,0,0,1,21.63,3V19.67a3,3,0,0,1-4.42,2.65L1.59,14A3,3,0,0,1,0,11.34Z"/>
                </svg>
            </span>
            <span className='next' onClick={nextSlide}>
                <svg className='w-4 lg:w-6' viewBox="0 0 21.63 22.67">
                    <path fill="#fff" d="M20.63,11.34a2,2,0,0,0-1.06-1.77L3.94,1.24A2,2,0,0,0,1,3V19.67a2,2,0,0,0,2.94,1.77L19.57,13.1a2,2,0,0,0,1.06-1.76m1,0A3,3,0,0,1,20,14L4.41,22.32A3,3,0,0,1,0,19.67V3A3,3,0,0,1,4.41.36L20,8.69A3,3,0,0,1,21.63,11.34Z"/>
                </svg>
            </span>
        </div>
    );
}