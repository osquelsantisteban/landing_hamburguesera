/* import logo from './logo.svg'; */
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Header />
      
      <main className='w-[80%] m-auto'>
        <ContactForm></ContactForm>
      </main>

      <Footer />
    </>
  );
}

export default App;
