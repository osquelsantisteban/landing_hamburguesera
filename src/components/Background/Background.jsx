import React,{useEffect} from 'react';
import backFoodMob from './assets/back-food-mobile.png';
import leftFood from './assets/food-left.png';
import rightFood from './assets/food-right.png';
import Pizza from '../../assets/images/Pizza.png';

export function BackFood() {
    
    const handleMouseMove = (event) => {

        document.querySelectorAll(".moueseEffect").forEach(function(move){

            let moving_value = move.getAttribute('data-value');            
            let x = (event.clientX *moving_value)/250;
            let y = (event.clientY *moving_value)/250;
            
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      };
    
      React.useEffect((e) => {
        window.addEventListener('mousemove', handleMouseMove);

        // cleanup this component
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);


    const isMobile = (window.innerWidth <= 648)
    return <>
        <section className='fixed flex w-full bg-transparent z-20 pt-14'>
                
                <div className='relative overflow-hidden flex-1 w-full flex h-screen justify-center items-center'>
                    <img src={Pizza} alt="" className='moueseEffect object-contain' data-value="-5" />
                    <img src={Pizza} alt="" className='moueseEffect object-contain' data-value="5" />
                    <img src={Pizza} alt="" className='moueseEffect object-contain' data-value="19" />
                </div>

        </section>
    </>
}

export function Background(){    
    return (
        <section className={`fixed w-full md:bg-back bg-back-mobile h-[100vh] z-0 pt-14`}>
        </section>
    );
}