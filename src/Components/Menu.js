import React, { useState } from 'react'
import './CompoCss.css'
import Navbartop from './Navbar';
import Footer from './fotter';
import SmallPlates from './MenuComponents/SmallPlates';
import LargePlates from './MenuComponents/LargePlates';
import Sides from './MenuComponents/Sides';
import Desserts from './MenuComponents/Desserts';
import Beverages from './MenuComponents/Beverages'
import Wines from './MenuComponents/Wines'
import 'bootstrap/dist/css/bootstrap.min.css';



function Menu() {
  const [whatToShow,setwhatToShow]=useState(1);
  function setSmaleplate(){
      setwhatToShow(1)
  }

  function largeplates(){
    setwhatToShow(2)
}
function sideRice(){
  setwhatToShow(3)
}
function Desserts(){
  setwhatToShow(4)
}
function Wines(){
  setwhatToShow(5)
}
function Beverages()
{ setwhatToShow(6)

}

  return (
    <>
      <Navbartop />
      
      <div className='aboutpage'>
        <div className='aboutinner'>
          <div>
            <h1>Menu</h1>
            <p>Blending a culinary philosophy that pays tribute to India’s rich legacy, culinary historian Pritha
              Sen and Executive Chef Pinaki Ray serve up a menu featuring niche ingredients
              sourced across South East Asia, a poetic and irreverent experience awaits...</p>
            <div className="continer pos getSize">
              <div className="container  p-3 mb-5   my-3 out">
               
                <nav className='hover-underline-menu' >
                  <ul class="nav nav-tabs menu align-center">
                    <li class="nav-item">
                      <button
                        class="btn  bg-trans src-contact underline-from-center"
                       onClick={setSmaleplate}
                      >
                       Small Plate
                      </button>
                    </li>
                    <li class="nav-item ">
                      <button class="btn  bg-trans src-contact underline-from-center" onClick={largeplates}>
                        Large Plates
                      </button>
                    </li>
                    <li class="nav-item">
                      <button class="btn  bg-trans src-contact underline-from-center" onClick={sideRice}>
                        Sides/Rice
                      </button>
                    </li>
                    <li class="nav-item">
                      <button class="btn  bg-trans src-contact underline-from-center" onClick={Desserts}>
                        Desserts
                      </button>
                    </li>
                    <li class="nav-item">
                      <button class="btn  bg-trans src-contact underline-from-center" onClick={Beverages}>
                      Beverages
                      </button>
                    </li>
                    
                  </ul>
                </nav>

                
              </div>
            </div>
            <div className='container'>
              {whatToShow==1 ?(
                <SmallPlates/>
               
              ) : whatToShow==2?(
               <LargePlates/>
              ):whatToShow==3?(
               <Sides/>
              ):whatToShow==4?(
                <SmallPlates/>
              ):whatToShow==5?(
                <LargePlates/>
              ):(
                <Sides/>
              )}
            </div>
            <br/><br/>
            <div className='menu-footer'>
             <h6>All prices are subject service charge and 7% Goods and Services Tax.</h6>
             <p>Menu and price is subject to change without prior notice. Menu may change based on 
             seasonality and <br></br> availability of ingredients. If you have a food allergy, please notify your server.</p>
            </div>
            
          </div>

        </div>

      </div>
      <Footer />


    </>


  )
}

export default Menu;
