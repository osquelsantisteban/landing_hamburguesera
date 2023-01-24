/* import logo from './logo.svg'; */
import './App.css';
import {arrow, position} from 'components/config';
import Header from 'components/Header/Header';
import {Background, BackFood } from 'components/Background/Background';
import Footer from 'components/Footer';
import ContactForm from 'components/ContactForm/ContactForm';
import MapZone from 'components/Map/Map';
import Section2 from 'components/Section2/Section2';
import ProductsList from 'components/Products/ProductList';
import Section3 from 'components/Section3/Section3';
import Section4 from 'components/Section4/Section4';
import Spaces from 'components/Spaces/Spaces';
// import Slider from 'components/Carrusel/Slider';
import Offer from 'components/Offer/Offer';

function App() {
  const isMobile = (window.innerWidth <= 648)
  return (
    <>
      <main className="">
        <Header />
        <Background />
        <BackFood />
        {/* <Slider /> */}
        <section className='relative flex flex-col w-10/12 md:w-8/12 pt-10 m-auto'>
          <Section2 />
          <Section3 />
          <div className='hidden lg:block'>
            <Spaces space={300} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.right} />        
          </div>
          <Section4 />
          <Spaces space={isMobile ? 90 : 300} hasArrow={true} arrow={arrow.ARROW_RIGHT} position={position.right} />
          <Offer/>
          <Spaces space={isMobile ? 90 : 300} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.left} />
          {/* Ver Carta */}
          <section className='flex md:flex-row flex-col gap-10 items-center md:justify-around z-20'>
            <small>Vale, si has llegado hasta aquí <br/> es que quieres mira nuestra carta </small>
            <button type="button" className='mt-auto btn bordeDifuminado'>ver carta</button>
          </section>

          <Spaces space={isMobile ? 90 : 300} />
          <ProductsList></ProductsList>
          {
            isMobile 
            ? <Spaces space={90} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.right} />
            : <Spaces space={300} hasArrow={true} arrow={arrow.ARROW_RIGHT} position={position.right} />
          }
          <MapZone></MapZone>
          <Spaces space={isMobile ? 90 : 300} />
          <ContactForm></ContactForm>
          <Spaces space={isMobile ? 90 : 300} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
