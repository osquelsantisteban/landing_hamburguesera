import React from 'react';

function Arrow({arrow, isMobile}) {
    return <>
        {
            (arrow === 'left') &&
            <svg xmlns="http://www.w3.org/2000/svg" width={ isMobile ? '50%' : '100%'} viewBox="387.567 1857.083 273.367 272.85">
                <path d="m390 1859.5 270.5 270" strokeLinejoin="round" strokeLinecap="round" strokeWidth={ isMobile ? '6' : '2'} stroke="#e6332a" fill="transparent" dataname="Línea 7"/>
            </svg>
        }
        {
            (arrow === 'straight') &&
            <svg xmlns="http://www.w3.org/2000/svg" width={ isMobile ? '40%' : '25%'} viewBox="1258.067 2703.583 417.867 2.833">
                <path d="M1260.5 2706h415" strokeLinejoin="round" strokeLinecap="round" strokeWidth={ isMobile ? '6' : '2'} stroke="#e6332a" fill="transparent" dataname="Línea 8"/>
            </svg>
        }
        {
            (arrow === 'right') &&
            <svg xmlns="http://www.w3.org/2000/svg" width={ isMobile ? '30%' : '15%'} viewBox="1382.583 5563.083 289.85 290.833">
                <path d="m1672 5565.5-287 288" strokeLinejoin="round" strokeLinecap="round" strokeWidth={ isMobile ? '6' : '2'} stroke="#e6332a" fill="transparent" dataname="Línea 11"/>
            </svg>
        }
    </>
}

function Spaces({space, hasArrow, arrow, position, clas}) {
    const isMobile = (window.innerWidth <= 648)
    
    const div_style = {
        display: 'flex',
        height: `${space}px`,
        justifyContent: position,
        zIndex: '10'
    }

    return ( 
        <div style={div_style} className={clas}>
            { hasArrow && <Arrow arrow={arrow} isMobile={isMobile}></Arrow> }
        </div>
     );
}

export default Spaces;