import React, { useState, useEffect } from 'react';
import ProductImg from './assets/product.png'
import BackImg from './assets/back.png'
import ProductStyle from './Product.module.css'

function Product({pos}) {
    const [rotate, setRotate] = useState('turn1')

    useEffect(() => {
        setRotate(`turn${pos}`)
    },[pos])

    return ( 
        <a href='#' className={ProductStyle.rotation}>
            <figure className='relative'>
                <img className={ProductStyle[`${rotate}`]} src={BackImg} alt="" />
                <img 
                className={ProductStyle.product}
                src={ProductImg} alt="" />
            </figure>
        </a>
     );
}

export default Product;