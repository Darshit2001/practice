import React, { useState } from 'react';
import './CompoCss.css'
import Navbartop from './Navbar';

import Footer from './fotter'

import 'bootstrap/dist/css/bootstrap.min.css';


function Press() {


  return (
    <>
      <Navbartop />
      <div className='aboutpage press'>
        <div className='aboutinner'>
          <div >
            <table class="text-dark">
              <tr>
                <td>
                  <h6>Contact Us</h6>
                  <p>​WhatsApp |  iPhone's iMessage <br></br>
                    Telephone: +65 6836 3088</p>
                  <br></br>
                  <h6>Yantra Address:</h6>
                  <p>
                    163 Tanglin Road<br></br>#01-129/130/131 Tanglin Mall<br></br>Singapore 247933
                  </p>
                  <br></br>
                  <h6>Operating Hours:</h6>
                  <p>
                    Lunch: 12:00pm to 3:00pm (2:30pm last order)<br></br>Dinner: 6:30pm to 11:00pm (9:45pm last order)<br></br>
                    Tuesday to Sunday, Closed on Monday<br></br><br></br>For reservations, private events and other restaurant<br></br>
                    queries: tim@yantra.com.sg<br></br><br></br>For job applications: hr@yantra.com.sg<br></br><br></br>
                  </p>

                  <h6>Social</h6><br></br>
                  <a href="https://www.facebook.com/yantrasg" className="src-contact">Yantra's Facebook</a><br></br>
                  <a href="https://www.instagram.com/yantrasg/" className="src-contact">Yantra's Instagram</a>
                </td>
                <td>
                  <h6>Direction</h6><br></br>
                  <div id="map-container-google-1" className="z-depth-1-half map-container map" >
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" className='map' style={{ border: 0 }} allowFullScreen />
                  </div>
                  <br></br>
                  <p>Located at Level 1 inside Tanglin Mall.<br></br>If you intend to drive, parking is available at Tanglin Mall with car park
                  <br></br>entrances at Grange Road and Cuscaden Road.</p>
                  <br></br><br></br><br></br><br></br><br></br>
                  <div>
                  <a href="https://www.google.com/maps/dir/26.9182798,80.9539467/163+Tanglin+Rd,+Singapore+247933/@13.4191363,74.0167185,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da198a4feaafff:0x36213423628bf688!2m2!1d103.823845!2d1.305035" class="btn btn-tran  btn-lg active" role="button" aria-pressed="true">Open Google Maps</a>
                  </div>
                </td>
                
              </tr>

            </table>

          </div>

        </div>
        <div className='press-extra-space'>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Press;
