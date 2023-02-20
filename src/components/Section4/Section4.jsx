import React from 'react';
import n1 from './assets/1.svg';
import n2 from './assets/2.svg';
import n3 from './assets/3.svg';

export default function Section4() {
    return (
        <section className='relative mb-32 lg:mb-4 z-20'>
            <div className='w-full'>
                <h2 className='stylesTextRed'>¿Qué es lo diferente?</h2>
            </div>
            
            <div className='relative gap-32 grid lg:items-center grid-cols-1 lg:grid-cols-4 lg:gap-0'>
                <div className='relative col-span-1 h-20 lg:h-12 lg:col-span-2 lg:col-start-3 lg:my-28'>
                    {/* Numero1 */}
                    <div className='flex w-[48px] h-[64px] lg:w-24 lg:h-[137px]'>                        
                        <img src={n1} alt="1" />
                    </div>
                    {/* Texto */}
                    <p className='absolute top-5 left-8 w-[245px] lg:top-11 lg:left-16 lg:w-[417px] text-base lg:text-2xl'>¡Sin manchas en el sofá! No te ensucias. Al ser una hamburguesa cerrada evitas en parte la molestia de que se salgan los ingredientes.</p>
                </div>

                <div className='relative flex flex-row-reverse h-12 lg:h-12 lg:col-span-2 lg:col-start-1 mb-28 lg:mt-28 lg:mb-28 lg:justify-self-end'>
                    {/* Numero2 */}
                    <div className='flex w-[48px] h-[64px] lg:w-24 lg:h-[137px]'>                        
                        <img src={n2} alt="2" />
                    </div>
                    {/* Texto */}
                    <p className='absolute top-5 right-8 w-[245px] lg:top-11 lg:right-16 lg:w-[417px] text-base lg:text-2xl text-right'>Calentita va mejor. Por su propia forma mantiene la temperatura por más tiempo.</p>
                </div>
            </div>

            <div className='relative gap-32 grid lg:items-center grid-cols-1 lg:grid-cols-4 lg:gap-0'>
                <div className='relative col-span-1 h-12 lg:h-12 lg:col-span-2 lg:col-start-3 lg:my-28'>
                    {/* Numero3 */}
                    <div className='flex w-[48px] h-[64px] lg:w-24 lg:h-[137px]'>
                        <img src={n3} alt="2" />
                    </div>
                    {/* Texto */}
                    <p className='absolute top-5 left-8 w-[245px] lg:top-11 lg:left-16 lg:w-[417px] text-base lg:text-2xl'>No es solo cocina es arte. Por eso todos los ingredientes y componentes son de alta calidad y artesanales.</p>
                </div>
            </div>

        </section>
    );
}