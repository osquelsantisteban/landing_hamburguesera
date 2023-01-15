import React from 'react';
import MapBack from './assets/mapa-back.png'
import Map from './assets/mapa.png'
import MapStyle from './Map.module.css'

function MapZone() {
    return ( 
        <section className='z-20'>
            <h2>Puedes Llegarte</h2>
            <small>C. Canónigo Molina Alonso, 23, 04004 Almería</small>

            <figure className='relative'>
                <img src={MapBack} alt="" />
                <img className={MapStyle.mapImg}
                 src={Map} alt="" />
            </figure>
        </section>
     );
}

export default MapZone;