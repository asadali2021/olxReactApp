import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Fb from '../facebook-24px.svg';

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <footer> */}
                <div className="main mt-5">
                    <div className="clm1">
                        <ul className="foot1">
                            <li><h6><b>POPULAR CATEGORIES</b></h6></li>
                            <li>Cars</li>
                            <li>Flats for rent</li>
                            <li>Jobs</li>
                            <li>Mobile Phones</li>
                        </ul>
                    </div>
                    <div className="clm2">
                        <ul className="foot2">
                            <li><h6><b>TRENDING SEARCHES</b></h6></li>
                            <li>Bikes</li>
                            <li>Watches</li>
                            <li>Books</li>
                            <li>Cars</li>
                        </ul>
                    </div>
                    <div className="clm3">
                        <ul className="foot3">
                            <li><h6><b>ABOUT US</b></h6></li>
                            <li>About Olx Group</li>
                            <li>Olx Blog</li>
                            <li>Contact Us</li>
                            <li>Olx for Businesses</li>
                        </ul>
                    </div>
                    <div className="clm4">
                        <ul className="foot4">
                            <li><h6><b>OLX</b></h6></li>
                            <li>Help</li>
                            <li>Site Map</li>
                            <li>Legal & Privacy Information</li>
                        </ul>
                    </div>
                    <div className="clm5">
                        <ul className="foot5">
                            <li><h6><b>FOLLOW US</b></h6>
                                <br /><img src={Fb} id="upf" /></li>
                            <li><button className="asb"><p>Download on the <br /><span className="as">App Store</span></p></button> <button className="gpb"><p>Get it on <br /><span className="gp">Google Play</span></p></button></li>
                        </ul>
                    </div>
                </div>
                <div className="comp">
                    <div className="fir">
                        <span className="count"><b id="otc">Other Countries</b><div>  <a className="one" href="https://www.olx.in/">India</a>-<a className="two" href="https://www.olx.co.za/">South Africa</a>-<a className="three" href="https://www.olx.co.id/">Indonesia</a></div></span>
                    </div>
                    <div className="sec">
                        <span><b id="frp">Free Classifieds in Pakistan</b> . &copy; 2006-2020 OLX</span>
                    </div>
                </div>
                {/* </footer> */}
            </div>
        )
    }
}
