import React, { useState, useEffect } from 'react';
import ProductImg from './assets/product.png'
import BackImg from './assets/back.png'
import ProductStyle from './Product.module.css'

function Product({pos}) {
    const [rotate, setRotate] = useState('turn1')

    useEffect(() => {
        setRotate(`turn${pos}`)
    },[pos])

    const isMobile = (window.innerWidth <= 648)

    return ( 
        <a href='#' className={ProductStyle.rotation}>
            <figure className='relative'>
                <img id={rotate} className={ProductStyle[`${rotate}`]} src={BackImg} alt="" width='90%' />
                <img
                className={ProductStyle.product}
                src={ProductImg} alt="" />
            </figure>
        </a>
     );
}

export default Product;