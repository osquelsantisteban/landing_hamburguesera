import React from 'react';
import Product from './Product';

function ProductsList() {
    return ( 
        <section className='flex gap-4 z-20'>
            <Product pos={1}></Product>
            <Product pos={2}></Product>
            <Product pos={3}></Product>
            <Product pos={4}></Product>
        </section>
     );
}

export default ProductsList;