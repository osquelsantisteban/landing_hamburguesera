import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (        
        <footer className='px-4 mt-auto text-center z-20'>
            <h3 className='text-sm lg:text-lg'>
                <Link to="/aviso" >
                    AVISO LEGAL/ 
                </Link>
                <Link to="/cookies" >
                    POLITICA DE COOKIES / 
                </Link>
                <Link to="/privacidad" >                    
                    PRIVACIDAD
                </Link>
            </h3>
            <small className='text-sm lg:text-base'>Todos los derechos reservados 2023 </small>
        </footer>
    );
}

export default Footer;