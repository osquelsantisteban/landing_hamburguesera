import React,{useEffect} from 'react';
import Burguer1 from './assets/Burguer SD 1.png';
import Burguer2 from './assets/Burguer SD 2.png';
import Pizza1 from './assets/Pizza ID 1.png';
import Pizza2 from './assets/Pizza ID 2.png';
import Pizza3 from './assets/Pizza SI.png';
import Vaso from './assets/Vaso.png';

export function BackFood() {
    
    const handleMouseMove = (event) => {

        document.querySelectorAll(".moueseEffect").forEach(function(move){

            let moving_value = move.getAttribute('data-value');            
            let x = (event.clientX *moving_value)/250;
            let y = (event.clientY *moving_value)/250;
            
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      };
    
      useEffect((e) => {
        window.addEventListener('mousemove', handleMouseMove);

        // cleanup this component
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);


    const isMobile = (window.innerWidth <= 648)
    return <section className='fixed h-screen w-screen bg-transparent z-20 pt-14 overflow-hidden'>                                    
            {
                isMobile ? 
                <div className='relative h-screen w-screen bg-transparent z-20 pt-14 overflow-hidden'>
                    <img src={Pizza1}   alt="" className='absolute moueseEffect w-[500%]' data-value="-5" />
                    <img src={Pizza2}   alt="" className='absolute moueseEffect object-contain' data-value="-5" />
                    <img src={Vaso}     alt="" className='absolute moueseEffect object-contain' data-value="-5" />
                </div>                            
                : 
                <div className='relative flex flex-1 flex-wrap w-full overflow-hidden h-screen justify-center items-center object-contain'>
                    <img src={Burguer2} alt="" className='absolute moueseEffect object-contain' data-value="5" />
                    <img src={Burguer1} alt="" className='absolute moueseEffect object-contain' data-value="-5" />
                    <img src={Pizza1}   alt="" className='absolute moueseEffect object-contain' data-value="-3" />
                    <img src={Pizza2}   alt="" className='absolute moueseEffect object-contain' data-value="4" />
                    <img src={Pizza3}   alt="" className='absolute moueseEffect object-contain' data-value="10" />
                    <img src={Vaso}     alt="" className='absolute moueseEffect object-contain' data-value="-9" />
                </div>
            }

        </section>
}

export function Background(){    
    return (
        <section 
            className={`fixed w-full min-h-screen z-0 pt-14 bg-back-mobile md:bg-back overflow-hidden bg-no-repeat`}>
                {/* `   bg-cover    ` */}
        </section>
    );
}