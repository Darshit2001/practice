import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './CompoCss.css'
import {Link} from "react-router-dom"


function NavbarAll() {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark bg-transparent fixed-top hover-underline-menu">
    <div class="navbar-collapse collapse  text-white">
        <ul class="navbar-nav mr-auto menu align-center">
            <li class="nav-item active">
                    <Link to="/"><img src="https://static.wixstatic.com/media/8821b6_2fb629ec88fb43f983f2894aa735b43d~mv2.png/v1/fill/w_193,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Yantra%20Logo%20White%20Landscape.png" alt="logo" srcset="" /></Link>
            </li>
           
        </ul>
    </div>
    
    <div className='text-white'>
        <ul class="navbar-nav  text-right flex-right text-white menu align-center">
            <li class="nav-item">
                <Link to="/" className='src-contact-navbarhome underline-from-center-home'>Home</Link>
            </li>
            <li class="nav-item">
            <Link to="/about" className='src-contact-navbarhome underline-from-center-home'>About</Link>
            </li>
            <li class="nav-item">
                <Link to="/menu" className='src-contact-navbarhome underline-from-center-home'>Menu</Link>
            </li>
            <li class="nav-item">
                <Link to="/press" className='src-contact-navbarhome underline-from-center-home'>Press</Link>
            </li>
            <li class="nav-item">
            <Link to="/reservation" className='src-contact-navbarhome underline-from-center-home'>Resevation</Link>
            </li>
            <li class="nav-item">
                <Link to="/thegrandtrunk" className='src-contact-navbarhome underline-from-center-home'>The Grand Trunk</Link>
            </li>
            <li class="nav-item">
            <Link to="/evoucher" className='src-contact-navbarhome underline-from-center-home'>e-Voucher</Link>
            </li>
            <li class="nav-item">
            <Link to="/contact" className='src-contact-navbarhome underline-from-center-home'>ContactUS</Link>
            </li>
        </ul>
    </div>
</nav>

           
        </>
    );
}

export default NavbarAll;




// <Navbar bg="transparent" expand="lg" fixed="top" variant="light" className='homepage-nav' >
//                 <Container fluid>
//                     <Navbar.Brand href="/">
// {/* <img src="https://static.wixstatic.com/media/8821b6_2fb629ec88fb43f983f2894aa735b43d~mv2.png/v1/fill/w_193,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Yantra%20Logo%20White%20Landscape.png" alt="logo" srcset="" />
// </Navbar.Brand> */}
//                     {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    
//                         <Nav className="justify-content-end color-me" activeKey="/home">
//                             <Nav.Item>
//                             <Link to='/' activeStyle >Home</Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                             <Link to='/about'>About</Link>
//                                 {/* <Nav.Link href="/about" className='color-me'>About</Nav.Link> */}
//                             </Nav.Item>
//                             <Nav.Item>
                                
//                                 <Link to='/menu'>Menu</Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                             <Link to='/menu'>Menu</Link>
//                                 <Nav.Link href="/press" className='color-me'>Press</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/home" className='color-me'>Reservation</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/home" className='color-me'>Menu</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/home" className='color-me'>The GrandTrunk</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/home" className='color-me'>e-vouture</Nav.Link>
//                             </Nav.Item>
//                             <Nav.Item>
//                                 <Nav.Link href="/contact" className='color-me'>ContactUS</Nav.Link>
//                             </Nav.Item>
                            
//                         </Nav>
                    
//                 </Container>
//             </Navbar>