import React from 'react'
import './CompoCss.css'
import Navbartop from './Navbar';
import Contact from './ContactUS'
import Footer from './fotter'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';







function Menu() {


    return (
        <>
            <Navbartop />
            <div className='aboutpage'>
                <div className='aboutinner'>
                    <table class="text-dark">
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                        
                            <td >
                            <h6>RESERVATIONS</h6>
                                 Lunch: <br></br>
                                12:00pm to 3:00pm<br></br>
                                (2:30pm last order)<br></br>
                                <br></br>
                                Dinner:<br></br>
                                6:30pm to 11:00pm<br></br>
                                (9:45pm last order)<br></br><br></br>
                                Open Tuesday to Sunday,
                                Closed on Mondays</td><br></br>
                                
                                
                            <td>
                                <h5>PleaseNote:</h5>
                                <ul>
                                    <li>We only accept guest aged 8 years old and above only.</li>
                                    <li>Dress code: Smart Casual. Please do not wear shorts, singlets, sandals and slippers.</li>
                                    <li>Reservations are held for 15 minutes after the appointed time, after which, Yantra has full discretion to release your reservation.Please contact us if you need to reschedule your booking.</li>
                                    <li>Your reservation is only valid for the number of guests you booked for. Please amend your booking if you have additional or lesser guests.</li>
                                    <li>We will try our best to accommodate your dietary restrictions but we cannot guarantee that we will meet all requirements.</li>
                                    <li>For reservation of more than 8 guests, please send an email to tim@yantra.com.sg</li>
                                    <li>Price listed are not inclusive of GST and Service Charge.</li>
                                    <li>Reservation is subject to terms and condition of use and privacy policy: terms</li>

                                </ul>
                                <br></br>
                                <h5>Private Rooms</h5>
                                <ul>
                                    <li>Should you require a private room, please email to tim@yantra.com.sg</li>
                                    <li>To check our private rooms, click here</li>

                                </ul>
                                <h5>Corkage Policy</h5>
                                <ul>
                                    <li>Corkage fee of S$80++ applies for each 75cl bottle of wine and S$150++ for each 75cl bottle of spirits.</li>
                                    <li>"One-for-One" wine corkage waiver policy: For each bottle of wine purchase from our wine list, one bottle corkage fee will be waived. Maximum of two bottles per visit.</li>

                                </ul>
                                <h5>Cancellation Policy</h5>
                                <ul>
                                    <li>If you need to cancel your reservation, please do so at least 48 hours before your booking date. A "No Show" or cancellation fee may be imposed. We hope for your understanding.</li>

                                </ul>
                                <br></br>
                                <h5>By continuing with the reservation, You agree with the above and following terms and conditions:</h5>
                                <ul>
                                    <form action="/action_page.php">
                                        <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" />
                                        <label htmlFor="vehicle1">Only Guest aged 8 years old and above are allowed</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" defaultValue="Car" />
                                        <label htmlFor="vehicle2"> Dress code: Smart Casual. Please</label><br />
                                        <input type="checkbox" id="vehicle3" name="vehicle3" defaultValue="Boat" />
                                        <label htmlFor="vehicle3">Yantra will refuse entry to guest who do not follow the terms and conditions.</label><br /><br />
                                        <input type="button" defaultValue="I agree, Make a Reservation" />
                                    </form>

                                </ul>
                            </td>
                        </tr>
                    </table>

                </div>
                <div className='press-extra-space'>

                </div>

            </div>
            <Footer />


        </>


    )
}

export default Menu;
