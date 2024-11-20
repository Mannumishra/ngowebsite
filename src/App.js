
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Investment from './pages/Investment';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Cousesdetails from './components/Cousesdetails';
import Causes from './pages/Causes';
import Makedonation from './components/Makedonation';
import Imagecontainer from './components/Imagecontainer';
import MarriageDetails from './components/MarriageDetails';
import GirlBorn from './components/GirlBorn';
import Accidental from './components/Accidental';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='MarriageDetails' element={<MarriageDetails />} />
          <Route path='/GirlBorn' element={<GirlBorn/>}/>
          <Route path='/Accidental' element={<Accidental/>}/>
          <Route path='/Investment' element={<Investment />} />
          <Route path='/Causes' element={<Causes />} />
          <Route path='/Makedonation' element={<Makedonation />} />
          <Route path='/Imagecontainer' element={<Imagecontainer />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cousesdetails' element={<Cousesdetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
