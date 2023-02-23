/* import logo from './logo.svg'; */
import './Home.css';
import React from 'react';
import {arrow, position} from 'components/config';
import Header from 'components/Header/Header';
import {Background, BackFood } from 'components/Background/Background';
import Footer from 'components/Footer';
import ContactForm from 'components/ContactForm/ContactForm';
import MapZone from 'components/Map/Map';
import Section2 from 'components/Section2/Section2';
import ProductsList from 'components/Products/ProductList';
import Horario from 'components/Horario/Horario';
import Section4 from 'components/Section4/Section4';
import Spaces from 'components/Spaces/Spaces';
import Slider from 'components/Carrusel/Slider';
import Offer from 'components/Offer/Offer';

function Home() {
  const isMobile = (window.innerWidth <= 648)
  return (
    <>
      <main className="">
        <Header />
        <Background />
        <BackFood />
        <Slider />
        <section className='relative flex flex-col w-10/12 pt-10 m-auto md:w-8/12'>
          <Section2 />
          <Horario />
          <div className='hidden lg:block'>
            <Spaces space={150} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.right} />        
          </div>
          <Section4 />
          <Spaces space={isMobile ? 90 : 150} hasArrow={true} arrow={arrow.ARROW_RIGHT} position={position.right} />
          <Offer/>
          <Spaces space={isMobile ? 90 : 150} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.left} />
          {/* Ver Carta */}
          <section className='z-20 flex flex-col items-center gap-10 md:flex-row md:justify-around'>
            <small>Vale, si has llegado hasta aquí <br/> es que quieres mira nuestra carta </small>
            <button type="button" className='mt-auto btn bordeDifuminado'>ver carta</button>
          </section>

          <Spaces space={isMobile ? 90 : 150} />
          <ProductsList></ProductsList>
          {
            isMobile 
            ? <Spaces space={90} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.right} />
            : <Spaces space={150} hasArrow={true} arrow={arrow.ARROW_RIGHT} position={position.right} />
          }
          <MapZone></MapZone>
          <Spaces space={isMobile ? 90 : 150} />
          <ContactForm></ContactForm>
          <Spaces space={isMobile ? 30 : 90} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
