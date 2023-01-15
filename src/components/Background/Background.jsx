import React from 'react';
import backleft from './assets/middle-back-left.png';
import backright from './assets/middle-back-right.png';
import back from './assets/back.png'
import backMob from './assets/back-mobile.png'
import middleMob from './assets/middle-back-mobile.png'

export function BackFood() {
    const isMobile = (window.innerWidth <= 648)
console.log(isMobile)
    return <>
        <section className='fixed w-full bg-transparent z-20 pt-10'>
                {
                    isMobile 
                    ? <div className={`relative flex`}>
                        <figure className='absolute left-[-109px]'>
                            <img src={middleMob} alt="" />
                        </figure>
                    </div>
                    : <div className={`relative flex`}>
                        <figure className='absolute left-[-159px]'>
                            <img src={backleft} alt=""  width="89%" />
                        </figure>
                        <figure className='absolute right-[-250px]'>
                            <img src={backright} alt=""  width="80%" />
                        </figure>
                    </div>
                }
        </section>
    </>
}

export function Background(){
    return (
        <section className={`fixed w-full md:bg-[url(${back})] bg-[url(${backMob})] h-[100vh] z-0 pt-10`}>
        </section>
    );
}