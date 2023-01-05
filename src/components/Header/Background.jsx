import React from 'react';
import Vaso1 from '../../images/Vaso1.png';
import Vaso2 from '../../images/Vaso2.png';

export default function Background(){
    return (
        <section className='absolute flex flex-1 h-[1079px] bg-black'>
            
                <div className=''>
                    <img src={Vaso1} alt=""  className='' />
                </div>
                <div className=''>
                    <img src={Vaso2} alt=""  className='' />
                </div>
                
        </section>
    );
}