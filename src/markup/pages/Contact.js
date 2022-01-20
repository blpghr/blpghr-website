import React from 'react';

// components
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import pattern2 from '../../assets/images/patterns/pattern-2.png';

import icon_2 from '../../assets/images/icons/icon-16.png';
import icon_3 from '../../assets/images/icons/icon-17.png';
import icon_4 from '../../assets/images/icons/icon-19.png';
import "../../assets/css/body.css"
import "../../assets/css/contact.css"

const Contact = () => {

    return (
        <>
            {/* page header - start */}
            <PageHeader image={header_image}>
                <h1 className="c-dark">Contact Us</h1>
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
                                            <span>info@blpghr.com</span>
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
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_4} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">Fax</h6>
                                        <a href="tel:801-595-0976" className="link  link-grey link-lg">
                                            <span>801-595-0976</span>
                                        </a>
                                    </div>
                                </div>
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
                                    <h2 className="ln-ht-44">Contact us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pattern-bg-image" style={{ backgroundImage: `url(${pattern2})` }}></div>
            </div>
            {/* contact form - end */}
        </>
    );
};

export default Contact;
