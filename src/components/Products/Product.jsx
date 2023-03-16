import React, { useState, useEffect } from 'react';
import BackImg from './assets/back.png'
import ProductStyle from './Product.module.css'

function Product({pos,src}) {
    
    const [rotate, setRotate] = useState('turn1'),
        isMobile = (window.innerWidth <= 648)

    useEffect(() => {
        setRotate(`turn${pos}`)
    },[pos])
    
    return ( 
        <div className={ProductStyle.rotation}>
            <figure className='relative '>
            <img id={rotate} className={ProductStyle[`${rotate}`]} src={BackImg} alt="" width={isMobile ? '90%' : '100%'} />
                <img className={ProductStyle.product}
                src={src} alt="" width={isMobile ? '90%' : '20%'} />
            </figure>
        </div>
     );
}

export default Product;