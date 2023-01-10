import React from 'react';
import logo from '../../assets/images/Logo white.png' 
import BotonHeader from './BotonHeader';
import Carrusel from '../Carrusel/Carrusel';

export default function Header(){
    return (
        <header className='z-30'>

            <section className='flex h-[55px] bg-red-strong items-center'>
                <div className='flex items-center justify-between flex-1 mx-6 lg:mx-24'>
                    
                    <div className='h-[19px]'>
                        <img src={logo} alt=""  className='' />
                    </div>
                    
                    <BotonHeader />
                </div>
            </section>

            
        </header>
    );
}