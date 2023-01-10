/* import logo from './logo.svg'; */
import './App.css';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';


function App() {
  return (
    <>
      <main className=''>
        {/* <Background /> */}
        <Header />
        <section className='w-[80%] m-auto relative'>
          <Section2 />
          <Section3 />
          <Section4 />
          <ContactForm></ContactForm>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
