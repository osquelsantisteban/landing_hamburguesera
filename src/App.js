/* import logo from './logo.svg'; */
import './App.css';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <>
      <main className=''>
        <Background />
        <Header />
        <section className='w-[80%] m-auto relative'>
          <ContactForm></ContactForm>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
