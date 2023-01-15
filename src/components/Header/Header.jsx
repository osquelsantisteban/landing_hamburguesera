import React from 'react';
import Logo from './Logo';
import BotonHeader from './BotonHeader';

export default function Header() {
    return (
        <header className='z-30'>

            <section className='flex h-[55px] bg-black items-center'>
                <div className='flex items-center justify-between flex-1 mx-6 lg:mx-24'>

                    <div className='h-[19px]'>
                        <Logo />
                    </div>

                    <BotonHeader />
                </div>

            </section>
        </header>
    );
}