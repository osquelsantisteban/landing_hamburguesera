import React from 'react';
import Product from './Product';

function ProductsList() {
    return ( 
        <div className='flex gap-4'>
            <Product pos={1}></Product>
            <Product pos={2}></Product>
            <Product pos={3}></Product>
            <Product pos={4}></Product>
        </div>
     );
}

export default ProductsList;