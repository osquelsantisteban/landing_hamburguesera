import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import BotonHeader from './BotonHeader';
import BotonAtras from './BotonAtras';

export default function Header({buttonType}) {
    return (
        <header className='fixed w-full z-40 shadow-[0_5px_15px_3px_#000] md:shadow-[0_10px_20px_3px_#000] '>{/* lg:shadow-[0_20px_40px_3px_#000] */}
            <section className='flex h-16 bg-black items-center'>
                <div className='flex items-center justify-between w-full mx-2 md:mx-6 lg:mx-24'>
                    
                    <Link to="/">
                        <Logo />
                    </Link>

                    {buttonType === '1' && <BotonHeader />}
                    {buttonType === '2' && <BotonAtras />}
                    
                </div>
            </section>
        </header>
    );
}