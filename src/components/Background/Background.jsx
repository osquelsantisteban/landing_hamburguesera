import React,{useEffect} from 'react';
import backFoodMob from './assets/back-food-mobile.png';
import leftFood from './assets/food-left.png';
import rightFood from './assets/food-right.png';
/* import back from './assets/back.png';
import backMob from './assets/back-mobile.png'; */
import Pizza from '../../assets/images/Pizza.png';

export function BackFood() {
    /* const backfoodMob={        
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
    }; */
    const backfoodRight={        
        backgroundImage: `url(${rightFood})`,
        height:'100vh',        
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '65%',
        backgroundPositionY: '-70px'
    };

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
                {/* {
                    isMobile ? 
                        <div className='' style={backfoodMob}></div>                        
                    : 
                    <>
                        <div className='w-2/4 mt-4' style={backfoodLeft}></div>
                        <div className='w-2/4 ml-auto mt-4' style={backfoodRight}></div>
                    </>
                } */}
                {/* <div className='w-1/4 ml-auto mt-4' style={backfoodRight}></div> */}

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
        <section className={`fixed w-full md:bg-[url('components/Background/assets/back.png')] bg-[url('components/Background/assets/back-mobile.png')] h-[100vh] z-0 pt-14`}>
        </section>
    );
}