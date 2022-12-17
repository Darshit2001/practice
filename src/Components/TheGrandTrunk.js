import React, { useState } from 'react'
import './CompoCss.css'
import Navbartop from './Navbar';
import Footer from './fotter';

import Allelement from './GrandComponent/Allelement';
import Ira from './GrandComponent/Ira';
import KashmirLooms from './GrandComponent/KashmirLooms';
import Artchives from './GrandComponent/ArtChives'
import NavbarGrand from './GrandComponent/NavbarGrand';
import 'bootstrap/dist/css/bootstrap.min.css';



function Menu() {
    const [whatToShow, setwhatToShow] = useState(1);
    function All() {
        setwhatToShow(1)
    }

    function IRA() {
        setwhatToShow(2)
    }
    function ArtChives() {
        setwhatToShow(3)
    }
    function Kashmirloom() {
        setwhatToShow(4)
    }


    return (
        <>
            <Navbartop />
            <NavbarGrand />
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-trans fixed-top nav-mar">

                    <div className="flex-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <div className='align-center-grand'><h1><b>THE GRAND TRUNK</b></h1></div>
                                
                            </li>
                            <li className="nav-item">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </li>
                            <li className="nav-item dropdown">
                            <img className='img-cart' src="https://www.clipartmax.com/png/small/334-3348736_shopping-cart-svg-png-icon-free-download-shopping-cart-icon-svg.png" alt="Shopping Cart Svg Png Icon Free Download - Shopping Cart Icon Svg @clipartmax.com"/>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
            <div className='aboutpage'>
                <div className='aboutinner'>

                    <table>

                        <tr>
                            <td>
                                <h5>ChooseCollection</h5>
                                <hr />
                                <nav class="navbar  bg-trans">
                                    <div class="container-fluid bg-trans">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" onClick={All}>All</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" onClick={IRA}>IRA</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" onClick={ArtChives}>ArtChives</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" onClick={Kashmirloom}>KashmirLoom</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <hr />
                            </td>
                            <td>
                                <div className='container'>
                                    {whatToShow == 1 ? (
                                        <Allelement />

                                    ) : whatToShow == 2 ? (
                                        <Ira />
                                    ) : whatToShow == 3 ? (
                                        <Artchives />
                                    ) : (
                                        <KashmirLooms />
                                    )}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
            <Footer />


        </>


    )
}

export default Menu;
