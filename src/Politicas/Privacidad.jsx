/* import logo from './logo.svg'; */

import React from 'react';
import Header from 'components/Header/Header';
import Background from 'components/Background/Background';
import Footer from 'components/Footer';
import './Politicas.css';


function Privacidad() {
  const isMobile = (window.innerWidth <= 648)
  return (
    <>
        <Header buttonType="2"/>
        <Background />
      
        <article className='mt-40 my-20 z-20 w-10/12 mx-auto flex flex-col justify-center items-center'>
              <h2 className='politicasH2'>Privacidad</h2>
              <p className='politicasP'>Según el REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos:<br/>
                Sus datos son utilizados para gestionar los pedidos que se realizan a través de nuestra web mediante su tratamiento como «Clientes». La base legal para el tratamiento de sus datos es su consentimiento explícito, prestado si marca este check box. No se cederán datos a terceros, salvo obligación legal.
                Podrá acceder, rectificar y suprimir los datos, así como otros derechos. La información adicional la encontrará en el AVISO LEGAL, de nuestra página web.
              </p>

        </article>
    
      <Footer />
    </>
  );
}

export default Privacidad;
