import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
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
import NavBurger from './Navigation/NavBurger';

function App() {

  const { pathname } = useLocation()

  const [openMunicipality, setOpenMunicipality] = useState(false)
  const [openGovernment, setOpenGovernment] = useState(false)

  const [navBurger, setNavBurger] = useState(false)

  return (
    <>
      <nav className='sticky top-0 z-50 w-full h-20 shadow-xl select-none backdrop-blur-3xl bg-rgba_black_05'>
        {/* Logo holder */}
        <div className='absolute w-20 h-full left-5'>
          <img src={require('./asset/Logo/mapun_logo.png')} alt="Mapun Logo" className='w-full h-full p-1' />
        </div>

        {/* Nav button holder */}
        <div className='screen900px:hidden'>
          <Nav 
            pathname={pathname} 
            openMunicipality={openMunicipality}
            setOpenMunicipality={setOpenMunicipality}
            openGovernment={openGovernment}
            setOpenGovernment={setOpenGovernment} 
          />
        </div>

        {/* Nav Haburger Button */}
        <div className='hidden screen900px:block'> 
          <div className='absolute right-0 flex items-center justify-center w-20 h-full'>
            <GiHamburgerMenu onClick={() => setNavBurger(true)} className={`${navBurger && 'hidden'} w-10 h-10 text-white cursor-pointer hover:text-blue duration-300`}/>
            <MdOutlineClose onClick={() => setNavBurger(false)} className={`${navBurger ? 'block' : 'hidden'}  w-10 h-10 text-white cursor-pointer hover:text-red duration-300`}/>
          </div>

          <NavBurger 
            open={navBurger}
            pathname={pathname} 
            openMunicipality={openMunicipality}
            setOpenMunicipality={setOpenMunicipality}
            openGovernment={openGovernment}
            setOpenGovernment={setOpenGovernment}            
          />
        </div>
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
