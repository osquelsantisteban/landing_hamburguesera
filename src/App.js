/* import logo from './logo.svg'; */
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home/Home';
import Cookies from 'Politicas/Cookies';
import Aviso from 'Politicas/Aviso';
import Privacidad from 'Politicas/Privacidad';

function App() {

  return (
    <>
      <Router>      
        <Routes>      
          <Route exact path='/landing_hamburguesera' element={<Home/>} />
          <Route exact path='/'           element={<Home/>} />
          <Route exact path='/aviso'      element={<Aviso/>} />        
          <Route exact path='/cookies'    element={<Cookies/>} />        
          <Route exact path='/privacidad' element={<Privacidad/>} />        
        </Routes>
      </Router>
    </>
  );
}

export default App;
