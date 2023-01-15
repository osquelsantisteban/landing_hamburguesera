import React from 'react';
import Spaces from '../Spaces/Spaces';
import prod1Img from './assets/product 1.png';
import prod2Img from './assets/product 2.png';
import prod3Img from './assets/product 3.png';

function Offer({imgdir, text}) {
    return (
        <article className='flex flex-col gap-y-3 md:gap-y-[65px] items-center w-3/12'>
            <img src={imgdir} alt={text} />
            <h3 className='text-center text-wrap'>{text}</h3>
        </article>
    )
}

function Offers() {
    const isMobile = (window.innerWidth <= 648)

    return ( 
        <section className='md:w-[80%] md:m-auto z-20'>
            <h2>Esto es lo que <br />tenemos para ti</h2>
            <Spaces space={(isMobile) ? 40 : 150}/>
            <div className='flex flex-row gap-10 justify-between'>
                <Offer imgdir={prod1Img} text={'Hamburguesas cerradas'}></Offer>
                <Offer imgdir={prod2Img} text={'Pizzas'}></Offer>
                <Offer imgdir={prod3Img} text={'Menús'}></Offer>
            </div>
        </section>
     );
}

export default Offers;