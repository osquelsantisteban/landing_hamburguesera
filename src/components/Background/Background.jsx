import React from 'react';
import backFoodMob from './assets/back-food-mobile.png';
import leftFood from './assets/food-left.png';
import rightFood from './assets/food-right.png';
import back from './assets/back.png'
import backMob from './assets/back-mobile.png'

export function BackFood() {
    const backfoodMob={        
        backgroundImage: `url(${backFoodMob})`,
        height:'100vh',   
        width: '100%',     
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '80%',
        backgroundPositionY: '26px'
    },
    backfoodLeft={        
        backgroundImage: `url(${leftFood})`,
        height:'100vh',        
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '36%',
        backgroundPositionY: '-55px'
    },
    backfoodRight={        
        backgroundImage: `url(${rightFood})`,
        height:'100vh',        
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '65%',
        backgroundPositionY: '-70px'
    };

    const isMobile = (window.innerWidth <= 648)
    return <>
        <section className='fixed flex w-full bg-transparent z-20 pt-14'>
                {
                    isMobile ? 
                        <div className='' style={backfoodMob}></div>                        
                    : 
                    <>
                        <div className='w-2/4 mt-4' style={backfoodLeft}></div>
                        <div className='w-2/4 ml-auto mt-4' style={backfoodRight}></div>
                    </>
                }
                
        </section>
    </>
}

export function Background(){    
    return (
        <section className={`fixed w-full md:bg-[url(${back})] bg-[url(${backMob})] h-[100vh] z-0 pt-14`}>
        </section>
    );
}