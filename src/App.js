import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import News from './Pages/News';
import Services from './Pages/Services';
import Economy from './Pages/Municipality/Economy';
import Tourism from './Pages/Municipality/Tourism';
import Education from './Pages/Municipality/Education';
import MapunDay from './Pages/Municipality/MapunDay';
import Officials from './Pages/Government/Officials';
import Barangay from './Pages/Government/Barangay';
import Contact from './Pages/Contact';
import Nav from './Navigation/Nav';

function App() {

  const { pathname } = useLocation()

  const [openMunicipality, setOpenMunicipality] = useState(false)
  const [openGovernment, setOpenGovernment] = useState(false)

  console.log(pathname)

  return (
    <>
      <nav className='sticky top-0 w-full h-20 z-50 bg-rgba_black shadow-xl select-none'>
        {/* Logo holder */}
        <div className='absolute left-5 w-20 h-full'>
          <img src={require('./asset/Logo/mapun_logo.png')} alt="Mapun Logo" className='w-full h-full p-1' />
        </div>

        {/* Nav button holder */}
        <div>
          <Nav 
            pathname={pathname} 
            openMunicipality={openMunicipality}
            setOpenMunicipality={setOpenMunicipality}
            openGovernment={openGovernment}
            setOpenGovernment={setOpenGovernment} 
          />
        </div>

        {/* Nav Haburger Button */}
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/news" element={<News/>} />

        <Route path="/services" element={<Services/>} />

        <Route path="/municipality/economy" element={<Economy/>} />
        <Route path="/municipality/tourism" element={<Tourism/>} />
        <Route path="/municipality/education" element={<Education/>} />
        <Route path="/municipality/mapunday" element={<MapunDay/>} />

        <Route path="/government/officials" element={<Officials/>} />
        <Route path="/government/barangay" element={<Barangay/>} />

        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
