import React from 'react';
import Logo from './Logo';
import BotonHeader from './BotonHeader';

export default function Header() {
    return (
        <header className='fixed w-full z-40'>{/* shadow-[0_20px_40px_3px_#000] */}
            <section className='flex h-16 bg-gradient-to-b from-black to-black/5 items-center'>
                <div className='flex items-center justify-between flex-1 mx-2 md:mx-6 lg:mx-24'>
                    
                    <div className=''>
                        <Logo />
                    </div>

                    <BotonHeader />
                </div>

            </section>
        </header>
    );
}