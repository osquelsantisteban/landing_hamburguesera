import React from 'react';

export default function SliderContent({ activeIndex, imageSlider }) {
    return (
        <div className='grid items-center grid-cols-1 mx-0 my-16 lg:my-0 justify-items-center'>
            {
                imageSlider.map((slide,index) => 
                    <figure key={index} className={ index === activeIndex ? 'relative mx-0 w-96 h-64 md:w-full md:h-[800px]' : 'inactive'}>
                        <img src={slide.url} alt={slide.descripcion} className='slide-image'/>
                    </figure>
            )}
        </div>
    );
}