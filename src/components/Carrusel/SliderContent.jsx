import React from 'react';

export default function SliderContent({ activeIndex, imageSlider }) {
    return (
        <div className=''>
            {
                imageSlider.map((slide,index) => 
                    <figure key={index} className={ index === activeIndex ? 'slides active' : 'inactive'}>
                        <img src={slide.url} alt={slide.descripcion} className='slide-image'/>
                    </figure>
            )}
        </div>
    );
}