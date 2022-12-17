import React, { useState } from 'react';
import './CompoCss.css'
import Navbartop from './Navbar';

import Footer from './fotter'

import 'bootstrap/dist/css/bootstrap.min.css';


function Press() {

    const [count, setCount] = useState(50);
    const [btncount, btnsetCount] = useState(1);

    function updateState(e) {
        setCount(e.target.value);

    }
    function increment() {

        btnsetCount(btncount + 1);

    }
    function decrement(e) {
        if (btncount > 1)
            btnsetCount(btncount - 1);

    }
    return (
        <>
            <Navbartop />
            <div className='aboutpage press'>
                <div className='aboutinner'>
                    <div >
                        <table class="text-dark">

                            <tr> <th colspan="2">Yantra e-Vouchers</th></tr>

                            <tr>
                                <td >
                                    <img className='evocher-img image-box' src='https://static.wixstatic.com/media/8821b6_ea196790726c492b8dc5276474b9a6b2~mv2.png'></img>
                                </td>
                                <td >
                                    <div>
                                        <h6>e-Voucher</h6><br></br>
                                        <h6>${count}</h6><br></br>
                                        <p>You can't go wrong with an e-Voucher. Choose an amount and write
                                            a personalized message to make this e-Voucher your own. Terms
                                            and Conditions Apply.</p>
                                        <h6>Denomination</h6>
                                        <table>
                                            <td><button value={'50'} className="btn  btn-sm   bg-white border-black btn-light " onClick={updateState} >$50</button></td>
                                            <td><button value={'100'} className="btn  btn-sm   bg-white  " onClick={updateState} >$100</button></td>
                                            <td><button value={'150'} className="btn  btn-sm   bg-white  " onClick={updateState} >$150</button></td>
                                            <td><button value={'300'} className="btn  btn-sm   bg-white  " onClick={updateState} >$300</button></td>
                                            <td><button value={'500'} className="btn  btn-sm   bg-white  " onClick={updateState} >$500</button></td>

                                        </table>
                                        <h6>Quantity</h6>
                                        <div className="input-group  align-items-center">
                                            <button className="btn  btn-sm   bg-white  " onClick={decrement}> - </button>
                                            <button className=" btn  btn-sm   bg-white ">{btncount}</button>
                                            <button className="btn  btn-sm  bg-white  " onClick={increment}> + </button>

                                        </div>
                                        <br></br>

                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Name</label>
                                            <input className="form-control" id="exampleFormControlInput1" /><br></br>
                                            <label htmlFor="exampleFormControlInput1">Email address*</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <br></br>

                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Message </label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                                            <br></br>
                                            <button type="button" class="form-control btn btn-dark">Buy Now</button>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                            <td colSpan="2">
                                <h6>Yantra's e-Voucher Terms and Conditions</h6>
                                <ol>
                                    <li>This voucher is to be used within the stipulated period printed on this voucher.</li>
                                    <li>This voucher is valid only with Yantra and its value is equivalent to the Singapore currency as printed.</li>
                                    <li>This voucher cannot be used in conjunction with other promotions coupon.</li>
                                    <li>This voucher is not refundable and cannot be replaced if lost, damaged, or expired.</li>
                                    <li>This voucher is not refundable or exchangeable for cash and any unused balance will not be refunded.</li>
                                    <li>This voucher is not legal tender and cannot be deposited into any bank account.</li>
                                </ol>
                            </td>
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
