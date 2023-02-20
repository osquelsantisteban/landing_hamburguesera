/* import logo from './logo.svg'; */

import React from 'react';
import Header from 'components/Header/Header';
import {Background, BackFood } from 'components/Background/Background';
import Footer from 'components/Footer';


function Cookies() {
  const isMobile = (window.innerWidth <= 648)
  return (
    <>
        <Header />
        <Background />
      
        <section className='mt-40 my-20 z-20 w-10/12 mx-auto flex flex-col justify-center items-center'>
          <h2 className='mb-20'>Políticas de Cookies</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio accusamus, cum soluta minima aperiam aut quaerat earum expedita non tenetur esse officia sunt ad magnam delectus sed consequatur facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio accusamus, cum soluta minima aperiam aut quaerat earum expedita non tenetur esse officia sunt ad magnam delectus sed consequatur facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio accusamus, cum soluta minima aperiam aut quaerat earum expedita non tenetur esse officia sunt ad magnam delectus sed consequatur facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio accusamus, cum soluta minima aperiam aut quaerat earum expedita non tenetur esse officia sunt ad magnam delectus sed consequatur facilis.</p>
        </section>
    
      <Footer />
    </>
  );
}

export default Cookies;
