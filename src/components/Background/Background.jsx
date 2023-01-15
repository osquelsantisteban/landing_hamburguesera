import React from 'react';
import backleft from './assets/middle-back-left.png';
import backright from './assets/middle-back-right.png';
import back from './assets/back.png'

export function BackFood() {
    return <>
        <section className='fixed w-full bg-black z-20'>
            <div className={`relative flex`}>
                <figure className='absolute left-[-159px]'>
                    <img src={backleft} alt=""  width="89%" />
                </figure>
                <figure className='absolute right-[-250px]'>
                    <img src={backright} alt=""  width="80%" />
                </figure>
            </div>
        </section>
    </>
}

export function Background(){
    return (
        <section className={`fixed w-full bg-[url(${back})] h-[100vh] z-0`}>
        </section>
    );
}