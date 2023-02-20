import React from 'react';
import MapBack from './assets/mapa-back.png'
import Map from './assets/mapa.png'
import MapStyle from './Map.module.css'

function MapZone() {
    return ( 
        <section className='z-20'>
            <h2 className='stylesTextRed'>Puedes Llegarte</h2>
            <a href="https://www.google.com/maps/@36.8380853,-2.4649583,17.29z">
                <small>C. Lucano, 3, 04001 Almería</small>
            </a>

            <a href="https://www.google.com/maps/@36.8380853,-2.4649583,17.29z">
                <figure className='relative'>
                    <img src={MapBack} alt="" />
                    <img className={MapStyle.mapImg}
                    src={Map} alt="" />
                </figure>
            </a>
        </section>
     );
}

export default MapZone;