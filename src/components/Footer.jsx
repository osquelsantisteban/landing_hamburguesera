import React from 'react';

function Footer() {
    return (        
        <footer className='px-4 mt-auto text-center z-20'>
            <h3 className='text-sm lg:text-2xl'>
                <a href="/">AVISO LEGAL</a> / 
                <a href="/">POLITICA DE COOKIES</a> / 
                <a href="/">PRIVACIDAD</a>
            </h3>
            <small className='text-sm lg:text-lg'>Todos los derechos reservados 2023 </small>
        </footer>
    );
}

export default Footer;