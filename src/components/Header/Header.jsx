import React from 'react';
import logo from '../../images/Logo Impasto.png' 
import BotonHeader from './BotonHeader';
import Carrusel from '../Carrusel/Carrusel';

export default function Header(){
    return (
        <header className='z-30'>

            <section className='flex h-[55px] bg-red-strong items-center'>
                <div className='flex items-center justify-between flex-1 mx-24'>
                    
                    <div className='h-[19px]'>
                        <img src={logo} alt=""  className='' />
                    </div>
                    
                    <BotonHeader />
                </div>
            </section>

            <section className='relative'>
                <Carrusel />
            </section>
        </header>
    );
}