import React from 'react';
import Product from './Product';

function ProductsList() {
    const isMobile = (window.innerWidth <= 648)
    return ( 
        <section className='relative grid md:grid-cols-4 grid-cols-2 gap-6 z-20'>
            <Product pos={1}></Product>
            <Product pos={2}></Product>

            {/* x */}
            {
                isMobile &&
                <svg className="absolute top-[47%] left-[47%]" xmlns="http://www.w3.org/2000/svg" width="16.867" height="16.85" viewBox="179.067 2306.883 16.867 16.85">
                    <g data-name="Grupo 29">
                        <path d="m180.5 2308.31 14 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#e6332a" fill="transparent" data-name="Línea 4"/>
                        <path d="m194.5 2308.31-14 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth="3" stroke="#e6332a" fill="transparent" data-name="Línea 5"/>
                    </g>
                </svg>
            }
            
            <Product pos={3}></Product>
            <Product pos={4}></Product>
        </section>
     );
}

export default ProductsList;