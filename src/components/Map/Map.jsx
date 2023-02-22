import React from 'react';
import MapBack from './assets/mapa-back.png'
import Map from './assets/mapa.png'
import MapStyle from './Map.module.css'

const address = 'https://goo.gl/maps/rrcs6zt1EbYi5U7j8';

function MapZone() {
    return ( 
        <section className='z-20'>
            <h2 className='stylesTextRed'>Puedes Llegarte</h2>
            <a href={address}>
                <small>C. Lucano, 3, 04001 Almería</small>
            </a>

            <a href={address}>
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