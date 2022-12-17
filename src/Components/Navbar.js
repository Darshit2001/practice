
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './CompoCss.css'
import { Link } from "react-router-dom"


function NavbarAll() {
    return (
        <>
            <nav class="navbar navbar-expand-md  navbar-all fixed-top hover-underline-menu">
                <div class="navbar-collapse collapse  text-white">
                    <ul class="navbar-nav mr-auto menu align-center">
                        <li class="nav-item active">
                            <Link to="/"><img src="https://static.wixstatic.com/media/8821b6_ed415e4b433d490189b2fb1ef7b82326~mv2.png/v1/fill/w_193,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Yantra%20Logo%20Black%20Landscape.png" alt="logo" srcset="" /></Link>
                        </li>

                    </ul>
                </div>

                <div className='text-white'>
                    <ul class="navbar-nav  text-right flex-right text-white menu align-center">
                        <li class="nav-item">
                            <Link to="/" className='src-contact underline-from-center'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" className='src-contact underline-from-center'>About</Link>
                        </li>
                        <li class="nav-item" >
                            <Link to="/menu" className='src-contact underline-from-center'>Menu</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/press" className='src-contact underline-from-center'>Press</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/reservation" className='src-contact underline-from-center'>Resevation</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/thegrandtrunk" className='src-contact underline-from-center'>The Grand Trunk</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/evoucher" className='src-contact underline-from-center'>e-Voucher</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" className='src-contact underline-from-center'>ContactUS</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    );
}

export default NavbarAll;




