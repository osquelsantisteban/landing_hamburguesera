import React, { useState, useEffect } from 'react';

function Arrow({arrow}) {
    return <>
        {
            (arrow === 'left') &&
            <svg xmlns="http://www.w3.org/2000/svg" width="20%" viewBox="387.567 1857.083 273.367 272.85">
                <path d="m390 1859.5 270.5 270" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#e6332a" fill="transparent" dataname="Línea 7"/>
            </svg>
        }
        {
            (arrow === 'straight') &&
            <svg xmlns="http://www.w3.org/2000/svg" width="30%" viewBox="1258.067 2703.583 417.867 2.833">
                <path d="M1260.5 2706h415" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#e6332a" fill="transparent" dataname="Línea 8"/>
            </svg>
        }
        {
            (arrow === 'right') &&
            <svg xmlns="http://www.w3.org/2000/svg" width="20%" viewBox="1382.583 5563.083 289.85 290.833">
                <path d="m1672 5565.5-287 288" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#e6332a" fill="transparent" dataname="Línea 11"/>
            </svg>
        }
    </>
}

function Spaces({space, hasArrow, arrow, position}) {
    const div_style = {
        display: 'flex',
        height: `${space}px`,
        justifyContent: position
    }

    return ( 
        <div style={div_style}>
            { hasArrow && <Arrow arrow={arrow}></Arrow> }
        </div>
     );
}

export default Spaces;