import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/ContactUS'
import Menu from './Components/Menu'
import PageNotFound from './Components/PageNotFound'
import Navbar from './Components/Navbar';
import Press from './Components/Press'
import NavabarHome from './Components/NavbarHome'
import Reservation from './Components/Reservation'
import Evoucher from './Components/Evoucher'
import TheGrandTrunk from './Components/TheGrandTrunk'
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/press" element={<Press />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/evoucher" element={<Evoucher />} />
        <Route path="/thegrandtrunk" element={<TheGrandTrunk />} />
        
      </Routes>
    </>
  );
}

export default App;