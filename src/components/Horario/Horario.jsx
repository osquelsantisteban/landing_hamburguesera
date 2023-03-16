import React from 'react';
import x from './assets/x.svg';

export default function Horario(){
    return (
        <section className='flex flex-col w-full mb-[90px] lg:mb-0 z-20'>
            <h2 className='stylesTextRed'>Abrimos</h2>
            <div className='flex flex-col lg:flex-row justify-center w-full items-center gap-14 md:gap-10'>
                
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-xl md:text-2xl text-white'>Domingos</span>
                    <img src={x}   className='w-5 h-12 md:h-20' alt="x" />
                    <span className='text-xl md:text-2xl text-white'>13:00 a 16:00 h</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-xl md:text-2xl text-white'>Martes, Miercoles y Jueves</span>
                    <img src={x}   className='w-5 h-12 md:h-20' alt="x" />
                    <span className='text-xl md:text-2xl text-white'>20:00 a 00:00 h</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='text-xl md:text-2xl text-white'>Domingos</span>
                    <img src={x}   className='w-5 h-12 md:h-20' alt="x" />
                    <span className='text-xl md:text-2xl text-white'>20:00 a 04:00 h</span>
                </div>

            </div>
        </section>
    );
}