import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Services from './pages/Services';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/works" element={ <Work/>}/>
        <Route path="/services" element={ <Services/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
