import React  from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
// import Home from './Pages/Home';
// import Department from './Pages/Department';
// import About from './Pages/About';
// import Services from './Pages/Services';
// import Economy from './Pages/Municipality/Economy';
// import Tourism from './Pages/Municipality/Tourism';
// import Education from './Pages/Municipality/Education';
// import MapunDay from './Pages/Municipality/MapunDay';
// import Officials from './Pages/Government/Officials';
// import Barangay from './Pages/Government/Barangay';
// import Contact from './Pages/Contact';
import Nav from './Navigation/Nav';
import NavBurger from './Navigation/NavBurger';
import Footer from './Footer/Footer'

// import ServicesDetails from './SubPages/Services/ServicesDetails';

// import OfficialsDetails from './SubPages/Government/Officials/OfficialsDetails';
// import BarangayDetails from './SubPages/Government/Barangay/BarangayDetails';

import ScrollToTop from './ScrollToTop';

import Spinner from './Spinner';

const Home = React.lazy(() => import('./Pages/Home'))
const About = React.lazy(() => import('./Pages/About'))
const Department = React.lazy(() => import('./Pages/Department'))
const Services = React.lazy(() => import('./Pages/Services'))
const ServicesDetails = React.lazy(() => import('./SubPages/Services/ServicesDetails'))
const Economy = React.lazy(() => import('./Pages/Municipality/Economy'))
const Tourism = React.lazy(() => import('./Pages/Municipality/Tourism'))
const Education = React.lazy(() => import('./Pages/Municipality/Education'))
const MapunDay = React.lazy(() => import('./Pages/Municipality/MapunDay'))
const Officials = React.lazy(() => import('./Pages/Government/Officials'))
const OfficialsDetails = React.lazy(() => import('./SubPages/Government/Officials/OfficialsDetails'))
const Barangay = React.lazy(() => import('./Pages/Government/Barangay'))
const BarangayDetails = React.lazy(() => import('./SubPages/Government/Barangay/BarangayDetails'))
const Contact = React.lazy(() => import('./Pages/Contact'))

function App() {

  const { pathname } = useLocation()

  const [openMunicipality, setOpenMunicipality] = useState(false)
  const [openGovernment, setOpenGovernment] = useState(false)

  const [navBurger, setNavBurger] = useState(false)

  const location = useLocation()

  const [showToTop, setShowToTop] = useState(false)

  window.addEventListener('scroll', () => {
    let scroll =  window.pageYOffset

    if(scroll > 0) {
      setShowToTop(true)
    }
    else{
      setShowToTop(false)
    }
  })

  useEffect(() => {
    // runs on location, i.e. route, change
    setNavBurger(false)
  }, [location])

  return (
    <>
      <nav className='sticky top-0 z-50 w-full h-20 shadow-xl select-none backdrop-blur-3xl bg-rgba_black_05'>
        {/* Logo holder */}
        <section className='absolute w-20 h-full left-5'>
          <img src={require('./asset/Logo/mapun_logo.png')} alt="Mapun Logo" className='w-full h-full p-1' />
        </section>

        {/* Nav button holder */}
        <section className='screen900px:hidden'>
          <Nav 
            pathname={pathname} 
            openMunicipality={openMunicipality}
            setOpenMunicipality={setOpenMunicipality}
            openGovernment={openGovernment}
            setOpenGovernment={setOpenGovernment} 
          />
        </section>

        {/* Nav Haburger Button */}
        <section className='hidden screen900px:block'> 
          <article className='absolute right-0 flex items-center justify-center w-20 h-full'>
            <GiHamburgerMenu onClick={() => setNavBurger(true)} className={`${navBurger && 'hidden'} w-10 h-10 text-white cursor-pointer hover:text-blue duration-300`}/>
            <MdOutlineClose onClick={() => setNavBurger(false)} className={`${navBurger ? 'block' : 'hidden'}  w-10 h-10 text-white cursor-pointer hover:text-red duration-300`}/>
          </article>

          <NavBurger 
            open={navBurger}
            pathname={pathname} 
            openMunicipality={openMunicipality}
            setOpenMunicipality={setOpenMunicipality}
            openGovernment={openGovernment}
            setOpenGovernment={setOpenGovernment}            
          />
        </section>
      </nav>

      <Routes>
        <Route path="/mapun" element={<React.Suspense fallback={<Spinner/>}><Home/></React.Suspense>} />

        <Route path="/department" element={<React.Suspense fallback={<Spinner/>}><Department/></React.Suspense>} />

        <Route path="/about" element={<React.Suspense fallback={<Spinner/>}><About/></React.Suspense>} />

        <Route path="/services" element={<React.Suspense fallback={<Spinner/>}><Services/></React.Suspense>} />
        <Route path="/services/:title/:bg" element={<React.Suspense fallback={<Spinner/>}><ServicesDetails/></React.Suspense>}/>

        <Route path="/municipality/economy" element={<React.Suspense fallback={<Spinner/>}><Economy/></React.Suspense>} />
        <Route path="/municipality/tourism" element={<React.Suspense fallback={<Spinner/>}><Tourism/></React.Suspense>} />
        <Route path="/municipality/education" element={<React.Suspense fallback={<Spinner/>}><Education/></React.Suspense>} />
        <Route path="/municipality/mapunday" element={<React.Suspense fallback={<Spinner/>}><MapunDay/></React.Suspense>} />

        <Route path="/government/officials" element={<React.Suspense fallback={<Spinner/>}><Officials/></React.Suspense>} />
        <Route path="/government/officials/:name/:position/:image" element={<React.Suspense fallback={<Spinner/>}><OfficialsDetails/></React.Suspense>} />

        <Route path="/government/barangay" element={<React.Suspense fallback={<Spinner/>}><Barangay/></React.Suspense>} />
        <Route path="/government/barangay/:name" element={<React.Suspense fallback={<Spinner/>}><BarangayDetails/></React.Suspense>} />

        <Route path="/contact" element={<React.Suspense fallback={<Spinner/>}><Contact/></React.Suspense>} />
      </Routes>

      <Footer/>

      <ScrollToTop showToTop={showToTop}/>
    </>
  );
}

export default App;
