import React,{useEffect,useState} from 'react';
import Burguer1 from './assets/Burguer SD 1.png';
import Burguer2 from './assets/Burguer SD 2.png';
import Pizza1 from './assets/Pizza ID 1.png';
import Pizza2 from './assets/Pizza ID 2.png';
import Pizza3 from './assets/Pizza SI.png';
import Vaso from './assets/Vaso.png';

export function BackFood() {
    
    const handleTouchStart = (event) => {
        setIsTouching(true);
      };
      
      const handleTouchEnd = (event) => {
        setIsTouching(false);
      };
      
      const handleMouseMove = (event) => {
        document.querySelectorAll('.mouseEffect').forEach((move) => {
          
          const movingValue = move.getAttribute('data-value');

          const x = (event.clientX * movingValue) / 250;
          const y = (event.clientY * movingValue) / 250;
      
          move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      };
      
      /* const handleScroll = (event) => {
        if (!isTouching) {
          const scrollFactor = window.scrollY / window.innerHeight;
          document.querySelectorAll('.mouseEffect').forEach((move) => {
            const movingValue = move.getAttribute('data-value');
            const xOld = event.clientX;
            const yOld = event.clientY;
            const x = (event.clientX * movingValue * Math.sin(scrollFactor)) / 250;
            const y = (event.clientY * movingValue * Math.sin(scrollFactor)) / 250;
      
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
        }
      }; */
        const startTime = Date.now();
        const totalTime = 5000; // 5 segundos en milisegundos

        const handleScroll = (event) => {
        if (!isTouching) {
            const timeElapsed = Date.now() - startTime;
            
            document.querySelectorAll('.mouseEffect').forEach((move) => {
                const movingValue = move.getAttribute('data-value');
                const delta = Math.sin(2 * Math.PI * timeElapsed / totalTime) * movingValue;
            const x = delta * event.clientX / 250;
            const y = delta * event.clientY / 250;

            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        }
        };

      
      const [isTouching, setIsTouching] = useState(false);
      
      useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('touchstart', handleTouchStart);
          window.removeEventListener('touchend', handleTouchEnd);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);   


    const isMobile = (window.innerWidth <= 648)
    return <section className='fixed h-screen w-screen bg-transparent z-20 pt-14 overflow-hidden'>                                    
            {
                isMobile ? 
                <div className='relative h-screen w-screen bg-transparent z-20 pt-14 overflow-hidden'>
                    <img src={Pizza1}   alt="" className='absolute mouseEffect object-contain' data-value="-5" />
                    <img src={Pizza2}   alt="" className='absolute mouseEffect object-contain' data-value="5" />
                    <img src={Vaso}     alt="" className='absolute mouseEffect object-contain' data-value="5" />
                    <img src={Pizza3}   alt="" className='absolute mouseEffect object-contain' data-value="10" />
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
}

export function Background(){    
    return (
        <section 
            className='fixed w-full min-h-screen z-0 pt-14 bg-back-mobile md:bg-back overflow-hidden bg-no-repeat bg-cover'>                
        </section>
    );
}