/* import logo from './logo.svg'; */
import './App.css';
import {arrow, position} from './components/config';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import MapZone from './components/Map/Map';
import Section2 from './components/Section2/Section2';
import ProductsList from './components/Products/ProductList';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Spaces from './components/Spaces/Spaces';

function App() {
  return (
    <>
      <main className=''>
        {/* <Background /> */}
        <Header />
        <section className='flex flex-col w-8/12 m-auto relative pt-10'>
          <Section2 />
          <Section3 />
          <Section4 />
          <Spaces space={300} hasArrow={true} arrow={arrow.ARROW_STRAIGHT} position={position.left} />
          <ProductsList></ProductsList>
          <Spaces space={300} hasArrow={true} arrow={arrow.ARROW_RIGHT} position={position.right} />
          <MapZone></MapZone>
          <Spaces space={200} />
          <ContactForm></ContactForm>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
