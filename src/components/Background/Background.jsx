import React from 'react';
import Vaso1 from '../../images/Vaso1.png';
import Vaso2 from '../../images/Vaso2.png';

export default function Background(){
    return (
        <div className='fixed w-full bg-black -z-10'>
            
                <div className='flex flex-1'>
                    <div className=''>
                        <img src={Vaso1} alt=""  className='' />
                    </div>
                    <div className=''>
                        <img src={Vaso2} alt=""  className='' />
                    </div>
                </div>
                
        </div>
    );
}