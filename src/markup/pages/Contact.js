import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';

import icon_1 from '../../assets/images/icons/icon-15.png';
import icon_2 from '../../assets/images/icons/icon-16.png';
import icon_3 from '../../assets/images/icons/icon-17.png';
import icon_4 from '../../assets/images/icons/icon-18.png';


const Contact = () => {
    
    return (
        <>
            {/* page header - start */}
            <PageHeader image={header_image}>
                <h1 className="c-dark">Contact Us</h1>
                <p className="small ln-ht-auto c-dark">
                    &nbsp;
                    <Link to="/contact" className="link link-inherit">
                        <span>&nbsp;</span>
                    </Link>
                </p>
            </PageHeader>
            {/* page header - end */}

            {/* contact details - start */}
            <div className="contact">
                <div className="contact-wrapper">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col">
                                <div className="contact-header">
                                    <h2 className="ln-ht-44">Contact Us</h2>
                                </div>
                            </div>
                        </div> */}
                        <div className="row contact-detail-row">
                            <div className="col-lg-3 col-sm-6 col-7">
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_2} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">support</h6>
                                        <a href="mailto:leah@blpghr.com" className="link  link-grey link-lg">
                                            <span>leah@blpghr.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-7">
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_3} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">phone</h6>
                                        <a href="tel:801-913-8424" className="link  link-grey link-lg">
                                            <span>801-913-8424</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-7">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact details - end */}

            {/* contact form - start */}
            <div className="contact-form pattern-bg">
                <div className="contact-form-wrapper">
                    <div className="container pattern-bg-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form-header">
                                    <h2 className="ln-ht-44">Write Us A Message</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pattern-bg-image" style={{backgroundImage: `url(${pattern2})`}}></div>
            </div>
            {/* contact form - end */}
        </>
    );
};

export default Contact;
