
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import NavbarHome from './NavbarHome'
export default function App() {
  return (
    <>
    <NavbarHome/>
    <MDBCarousel interval={2000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://static.wixstatic.com/media/8821b6_b466b6c0256a40f7bb979447f2ae2a38~mv2.jpg/v1/fit/w_978,h_656,q_90/8821b6_b466b6c0256a40f7bb979447f2ae2a38~mv2.webp'
        alt='...'
        
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://static.wixstatic.com/media/8821b6_239f3cff7c304422b22842bf1b9fa24a~mv2.jpg/v1/fit/w_978,h_656,q_90/8821b6_239f3cff7c304422b22842bf1b9fa24a~mv2.webp'
        alt='...'
        
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://static.wixstatic.com/media/8821b6_ed79ac479fd4419aab294e10b35f9ae3~mv2.jpg/v1/fit/w_978,h_656,q_90/8821b6_ed79ac479fd4419aab294e10b35f9ae3~mv2.webp'
        alt='...'
        
      />
    </MDBCarousel>
    </>
  );
}