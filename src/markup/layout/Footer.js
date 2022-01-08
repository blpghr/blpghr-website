import React from 'react'

// react router dom
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">contact</h6>
                                <ul className="txt-sm-1 c-grey number-list">
                                    <li>
                                        <a href="tel:801-913-8424" className="link  link-md link-grey">
                                            <span>801-913-8424</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">location</h6>
                                <p className="c-grey ln-ht-3">200 East South Temple Suite 190,
                                    <br />Salt Lake City, UT 84111</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">company</h6>
                                <ul className="txt-sm-1 c-grey">
                                    <li>
                                        <Link to='/about-us' className='link link-md link-grey'>
                                            <span>About Us</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/services' className='link link-md link-grey'>
                                            <span>Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/pricing' className="link link-md link-grey">
                                            <span>Pricing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact-us' className='link link-md link-grey'>
                                            <span>Contact Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-10" >
                        <div className="col-lg-12">
                            <h6 className="copyright txt-sm c-grey">&copy; 2022 BLPG-HR</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
