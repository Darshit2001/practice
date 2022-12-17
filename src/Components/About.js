import React from 'react'
import './CompoCss.css'
import Navbar from './Navbar';
import Footer from './fotter'
import { BrowserRouter as Router } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';



function About() {
  return (
    <>
      <Navbar/>
      <div className='aboutpage'>
        <div className='aboutinner'>

          <div>
            <h1>The Place</h1>
            <p>Inspired by India in every aspect – from our silk wallpapers to our stately, fort-inspired door,
              celebrated designers Matthew and Paul of MSDO have artfully composed five uniquely Indian spaces within Yantra.
              Drawing on décor that wends masterfully through the depths of the subcontinent, each visit to Yantra promises
              a new adventure.</p>
            <Carousel indicators={false}>
              <Carousel.Item className='carousel-inner'>
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_35339f57d0aa49008efdb9194bdf94bc~mv2.jpg/v1/fit/w_978,h_656,q_90/8821b6_35339f57d0aa49008efdb9194bdf94bc~mv2.webp"
                  alt="First slide"
                />
                <Carousel.Caption className='carousel-caption'>
                  <h5>Corbett</h5>
                  <p>A cosy bar that brings both jungle lodge and ultra modern luxury in equal measure. Adorned with leopard wallpaper, real photographs from safari camps in Botswana,
                    and whisky lockers, Corbett Bar is where conversation and libation flow freely.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='carousel-inner'>
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_b466b6c0256a40f7bb979447f2ae2a38~mv2.jpg/v1/fit/w_978,h_656,q_90/8821b6_b466b6c0256a40f7bb979447f2ae2a38~mv2.webp"
                  alt="Second slide"
                />
                <Carousel.Caption className='carousel-caption'>
                  <h5>Nilgiri Room</h5>
                  <p>Following on from the main dining hall Jaipur, arched passages and a majestic colonnade lead to The Nilgiri. The mesmerising wallpaper with flora and fauna,
                    hand painted in India.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='carousel-inner'>
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_ed79ac479fd4419aab294e10b35f9ae3~mv2.jpg/v1/fit/w_978,h_656,q_90/8821b6_ed79ac479fd4419aab294e10b35f9ae3~mv2.webp"
                  alt="Third slide"
                />
                <Carousel.Caption className='carousel-caption'>
                  <h5>Polo Room</h5>
                  <p>
                    Adjacent to Jaipur, The Polo Room offers an airy private dining space, comfortably s
                    eating 6-8 guests, with an outdoor patio to enjoy pre-dinner aperitives
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <h1>The Food</h1>
            <p>Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha
              Sen and Executive Chef Pinaki Ray create an extensive menu offering both vegetarian and non-vegetarian dishes.
              Featuring niche ingredients sourced across South East Asia,
              a poetic and irreverent experience awaits.</p>
            <Carousel indicators={false}>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_eec67c5ab3604f7b9fef2bfac5a80982~mv2.jpg/v1/fill/w_981,h_651,q_90/8821b6_eec67c5ab3604f7b9fef2bfac5a80982~mv2.webp"
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_b16432ac4fa64b2ea138a65d5cee8d40~mv2.jpg/v1/fill/w_981,h_651,q_90/8821b6_b16432ac4fa64b2ea138a65d5cee8d40~mv2.webp"
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_efa5f59dce344838a08386b887840271~mv2.jpg/v1/fill/w_981,h_651,q_90/8821b6_efa5f59dce344838a08386b887840271~mv2.webp"
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <h1>The People</h1>
            <p>People passionate about Indian cuisine. A celebrated revivalist of rare and bygone recipes, 
            Pith Sen brings her love of Indian cusuine to Singapore with a recipes that span the length and 
            breadth of the subcontinent. Alongside our
             ever-talented Executive Chef Pinaki Ray, Sen is also joined by Head Chef Prashant Dhanwariya.</p>
            <Carousel indicators={false}>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_e7d97b369cfd4e3b8dc3f32c1472a01f~mv2.jpg/v1/fill/w_981,h_651,q_90/8821b6_e7d97b369cfd4e3b8dc3f32c1472a01f~mv2.webp"
                  alt="First slide"
                />

              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_5833e3497bc04d33a59c0b3c42d69a65~mv2.jpg/v1/fill/w_981,h_651,q_90/8821b6_5833e3497bc04d33a59c0b3c42d69a65~mv2.webp"
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item >
                <img
                  className="d-block w-100"
                  src="https://static.wixstatic.com/media/8821b6_4dfacf855a33453884e3ae1e94b6e7c8~mv2.jpg/v1/fill/w_981,h_651,q_90/8821b6_4dfacf855a33453884e3ae1e94b6e7c8~mv2.webp"
                  alt="Third slide"
                />

              </Carousel.Item>
            </Carousel>
          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default About;
