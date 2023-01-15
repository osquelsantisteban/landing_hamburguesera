import React from 'react';

export default function Section3(){
    return (
        <section className='flex flex-col w-full'>
                    <h2 className='text-2xl lg:text-5xl pb-[25px] lg:pb-[50px] text-red-strong'>Abrimos</h2>
                    <div className='flex flex-row justify-between lg:w-[500px] w-[300px] items-center'>
                        <p className='text-base lg:text-2xl'>Lunes a Domingos</p>
                        <div className="flex items-center justify-between gap-5 lg:gap-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.833" height="16.833" viewBox="648.083 2533.083 16.833 16.833"><g dataname="Grupo 953"><path d="m649.5 2534.5 14 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#e6332a" fill="transparent" dataname="Línea 4"/><path d="m663.5 2534.5-14 14" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#e6332a" fill="transparent" dataname="Línea 5"/></g></svg>
                            <p className='text-base lg:text-2xl'>13:00h a 0:00h</p>
                        </div>
                    </div>
               
            
        </section>
    );
}