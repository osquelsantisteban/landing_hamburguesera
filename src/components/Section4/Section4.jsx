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
                <div className='relative col-span-1 h-36 lg:h-36 lg:col-span-2 lg:col-start-3 lg:my-28'>
                    {/* Numero1 */}
                    <div className='flex w-[48px] h-[64px] lg:w-[100px] lg:h-[137px]'>                        
                        <img src={n1} alt="1" />
                    </div>
                    {/* Texto */}
                    <p className='absolute top-5 left-8 w-[245px] lg:top-11 lg:left-16 lg:w-[417px] text-base lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>

                <div className='relative flex flex-row-reverse h-36 lg:h-36 lg:col-span-2 lg:col-start-1 mb-32 lg:mt-28 lg:mb-40 lg:justify-self-end'>
                    {/* Numero2 */}
                    <div className='flex w-[48px] h-[64px] lg:w-[100px] lg:h-[137px]'>                        
                        <img src={n2} alt="2" />
                    </div>
                    {/* Texto */}
                    <p className='absolute top-5 right-8 w-[245px] lg:top-11 lg:right-16 lg:w-[417px] text-base lg:text-2xl text-right'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>
            </div>

            <div className='relative gap-32 grid lg:items-center grid-cols-1 lg:grid-cols-4 lg:gap-0'>
                <div className='relative col-span-1 h-36 lg:h-36 lg:col-span-2 lg:col-start-3 lg:my-28'>
                    {/* Numero3 */}
                    <div className='flex w-[48px] h-[64px] lg:w-[100px] lg:h-[137px]'>
                        <img src={n3} alt="2" />
                    </div>
                    {/* Texto */}
                    <p className='absolute top-5 left-8 w-[245px] lg:top-11 lg:left-16 lg:w-[417px] text-base lg:text-2xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea co</p>
                </div>
            </div>

        </section>
    );
}