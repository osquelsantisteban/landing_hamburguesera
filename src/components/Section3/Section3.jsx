import React from 'react';

export default function Section3(){
    return (
        <section className='flex flex-col mb-[90px] lg:mb-[149px]'>
                
            <div className='mb-44'>

                <div className='flex flex-col w-full'>
                    <h2 className='text-2xl lg:text-5xl pb-[25px] lg:pb-[50px]'>Abrimos</h2>
                    <div className='flex flex-row justify-between w-full lg:w-[500px]'>
                        <p className='text-base lg:text-2xl'>Lunes a Domingos</p>
                        <p className='text-base lg:text-2xl'>13:00h a 0:00h</p>
                    </div>
                </div>            
            </div>

            <div className='hidden lg:block'>
                <div className='flex lg:w-[418px] lg:h-[3px] float-right'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1258.067 2703.583 417.867 2.833"><path d="M1260.5 2706h415" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#e6332a" fill="transparent" data-name="Línea 8"/></svg>
                </div>
            </div>
            
        </section>
    );
}