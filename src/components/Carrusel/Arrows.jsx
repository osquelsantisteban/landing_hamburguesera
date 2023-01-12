import React from 'react';

export default function Arrows({prevSlide,nextSlide}){
    return(
        <div className='arrows'>
            <span className='prev' onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-6' viewBox="99.8 399.133 25.4 27.067"><path d="m13.333 0 13.334 25H0z" strokeLinejoin="round" strokeLinecap="round" stroke="#fff" fill="transparent" transform="matrix(0 -.9625 .96 0 100.5 425.5)" dataname="prev"/></svg>
            </span>
            <span className='next' onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-6' viewBox="1797.8 426.133 25.4 27.067"><path d="m13.333 0 13.334 25H0z" strokeLinejoin="round" strokeLinecap="round" stroke="#fff" fill="transparent" transform="matrix(0 .9625 -.96 0 1822.5 426.833)" dataname="next"/></svg>
            </span>
        </div>
    );
}