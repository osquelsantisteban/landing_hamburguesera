import React from 'react';
import Vaso from '../../images/Vaso.png';
import Pizza from '../../images/Pizza.png';

export default function Background(){
    return (
        <div className='fixed w-full bg-black -z-10'>
            
                <div className='absolute'>
                    <div className='absolute h-[755px] w-[683px] -left-52 -top-44'>
                        <img src={Vaso} alt=""  className='' />
                    </div>
                    
                    <div className='absolute h-[556px] w-[561px] rotate-90 lg:left-24 lg:top-96'>
                        <img src={Pizza} alt=""  className='' />
                    </div>

                    <div className='absolute h-[440px] w-[431px] lg:left-9 lg:top-[601px]'>
                        <img src={Pizza} alt=""  className='' />
                    </div>

                    <div className='absolute h-[455px] w-[446px] lg:left-[1000px] lg:top-[106px]'>
                        <img src={Pizza} alt=""  className='' />
                    </div>
                    
                    <div className='absolute h-[772px] w-[665px] -rotate-45 lg:left-[1150px] lg:top-[308px]'>
                        <img src={Vaso} alt=""  className='' />
                    </div>
                </div>
                
        </div>
    );
}