import React from 'react'

// react router dom
import { Link } from 'react-router-dom';

import "../../assets/css/footer.css";

const Footer = () => {
    return (
        <footer className="footer b-primary">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-white f-w-500 txt-upper">contact</h6>
                                <p className="c-white  ln-ht-3">T: 801-913-8424</p>
                                <p className="c-white  ln-ht-3">F: 801-595-0976</p>
                                <p className="c-white  ln-ht-3">Leah Jacobson</p>
                                <p className="c-white  ln-ht-3">E: ljacobson@blpghr.com</p>

                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-white  f-w-500 txt-upper">location</h6>
                                <p className="c-white  ln-ht-3">200 East South Temple Suite 190,
                                    <br />Salt Lake City, UT 84111</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-white  f-w-500 txt-upper">company</h6>
                                <ul className="txt-sm-1 c-grey">
                                    <li>
                                        <Link to='/about-us' className='c-white'>
                                            <span>About Us</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/services' className='c-white '>
                                            <span>Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/pricing' className="c-white ">
                                            <span>Pricing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact-us' className='c-white '>
                                            <span>Contact Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-10" >
                        <div className="col-lg-12">
                            <h6 className="txt-sm c-white mt-10">&copy; 2022 BLPG-HR</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
