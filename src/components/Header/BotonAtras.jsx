import React from 'react';
import { Link } from 'react-router-dom';

export default function BotonAtras(){
    return (
        <Link to="/">                        
            <button className=' uppercase border border-red-strong h-[41px] w-[144px] rounded-3xl bordeDifuminado flex items-center justify-center'>
                <span className='text-white lg:text-base text-sm'>Volver</span>
            </button>
        </Link>
    );
}