import React from 'react';
import Horario_D from './assets/Horario_D.svg';
import Horario_MMJ from './assets/Horario_MMJ.svg';
import Horario_VS from './assets/Horario_VS.svg';

export default function Horario(){
    return (
        <section className='flex flex-col w-full mb-[90px] lg:mb-0 z-20'>
            <h2 className='stylesTextRed'>Abrimos</h2>
            <div className='flex flex-col lg:flex-row justify-center w-full items-center gap-14 md:gap-10'>                                
                <img src={Horario_D}   className='w-44' alt="horario domingo" />
                <img src={Horario_MMJ} className='w-64' alt="horario martes miercoles jueves" />
                <img src={Horario_VS}  className='w-48' alt="horario viernes sabado" />
            </div>
        </section>
    );
}