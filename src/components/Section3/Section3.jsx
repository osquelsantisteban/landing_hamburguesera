import React from 'react';

export default function Section3(){
    return (
        <>
        <section className='flex justify-between'>

            <div className='flex flex-col'>
                <h2 className='text-2xl lg:text-5xl pb-[25px] lg:pb-[50px]'>Abrimos</h2>
                <div className='flex flex-row justify-between w-full lg:w-[500px]'>
                    <p className='text-base lg:text-2xl'>Lunes a Domingos</p>
                    <p className='text-base lg:text-2xl'>13:00h a 0:00h</p>
                </div>
            </div>

            <div className='lg:w-[418] lg:h-[3px]'>{/* hidden lg:flex  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1258.067 2703.583 417.867 2.833"><path d="M1260.5 2706h415" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#e6332a" fill="transparent" data-name="Línea 8"/></svg>
            </div>
        </section>
        </>
    );
}