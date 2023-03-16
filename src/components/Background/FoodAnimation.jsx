import React, { useEffect, useState } from 'react';
import Burguer1 from './assets/Burguer SD 1.png';
import Burguer2 from './assets/Burguer SD 2.png';
import Pizza1 from './assets/Pizza ID 1.png';
import Pizza2 from './assets/Pizza ID 2.png';
import Pizza3 from './assets/Pizza SI.png';
import Vaso from './assets/Vaso.png';
// import Vaso from './../Offer/assets/producto_1.png';

const FoodAnimation = () => {

  const handleMouseMove = (event) => {
    document.querySelectorAll('.mouseEffect').forEach((move) => {
      const movingValue = move.getAttribute('data-value');

      const x = (event.clientX * movingValue) / 250;
      const y = (event.clientY * movingValue) / 250;

      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  const [scrollDirection, setScrollDirection] = useState('none');  
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0); 

  useEffect(() => {

    const handleScroll = (event) => {
      const currentScrollPosition = window.pageYOffset;
      const direction = currentScrollPosition > previousScrollPosition ? 'down' : 'up';      

      
      document.querySelectorAll('.image-scroller').forEach((move) => {
        const movingValue = move.getAttribute('data-value');
  
        const x = (currentScrollPosition * movingValue) / 250;
        const y = (currentScrollPosition * movingValue) / 250;
  
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });


      setScrollDirection(direction);
      setPreviousScrollPosition(currentScrollPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = (window.innerWidth <= 648)
    return <section className='fixed h-screen w-screen bg-transparent z-20 pt-14 overflow-hidden'>                                    
            {
                isMobile ? 
                <div className='relative h-screen w-screen bg-transparent z-20 pt-14 overflow-hidden'>
                    <img src={Pizza1}   alt="" className='absolute object-contain image-scroller' data-value="-5" />
                    <img src={Pizza2}   alt="" className='absolute object-contain image-scroller' data-value="5" />
                    <img src={Vaso}     alt="" className='absolute object-contain image-scroller' data-value="5" />
                    <img src={Pizza3}   alt="" className='absolute object-contain image-scroller' data-value="-5" />
                </div>                            
                : 
                <div className='relative flex flex-1 flex-wrap w-full overflow-hidden h-screen justify-center items-center object-contain'>
                    <img src={Burguer2} alt="" className='absolute mouseEffect object-contain' data-value="5" />
                    <img src={Burguer1} alt="" className='absolute mouseEffect object-contain' data-value="-5" />
                    <img src={Pizza1}   alt="" className='absolute mouseEffect object-contain' data-value="-3" />
                    <img src={Pizza2}   alt="" className='absolute mouseEffect object-contain' data-value="4" />
                    <img src={Pizza3}   alt="" className='absolute mouseEffect object-contain' data-value="10" />
                    <img src={Vaso}     alt="" className='absolute mouseEffect object-contain' data-value="-9" />
                </div>
            }

        </section>
};

export default FoodAnimation;
