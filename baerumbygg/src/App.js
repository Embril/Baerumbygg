import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Home'
import Footer from './Components/Footer';
import About from './About';
import Tjenester from './Tjenester'
import './Styles/style'

function App() {
  return (
    <>
    <div className='layout'>
    <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>} /> 
            <Route path="/Tjenester" element={<Tjenester/>}/>
          </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
    </>

  );
}

export default App;
