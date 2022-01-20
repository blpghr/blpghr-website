import React from 'react';

// components
import PageHeader from '../components/PageHeader';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import intro_bg_2 from '../../assets/images/intro-bg-2.jpg';

import icon4 from '../../assets/images/icons/icon-4.png';

import '../../assets/css/services.css'
import "../../assets/css/body.css"
const Service = () => {
    // <style>
    //     .ln-ht-3{
    //         font - size: 2rem;
    //     }
    // </style>

    return (
        <>
            {/* page header - start */}
            <PageHeader image={header_image}>
                <h1 className="c-dark">Services</h1>
            </PageHeader>
            {/* page header - end */}


            {/* service - start */}
            <div className="service">
                <div className="service-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">HR Consulting</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Recruiting Strategy and services</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Pay and Compensation Analysis</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Hiring Process and onboarding</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Employee Engagement Benchmarking</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Handbook/Policies and Procedures Creation/Revision </h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Job description creation/revision</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Strategic retention services</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Payroll Services</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Benefits Administration and open enrollment</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Internal Org Chart Structure and Succession Planning</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Employment Contracts and Agreements</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Human Resources monthly training/quarterly</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">HR department support/HR Manager Services</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">EEOC Complaints</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">ADA Regulations and Laws</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">HR Regulatory and Compliance</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Discrimination Lawsuits</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Disciplinary and Performance Management</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Terminations and follow through</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Diversity and Inclusion consultation</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Annual Audits</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Live Phone Support</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image intro-bg">
                    <img src={intro_bg_2} alt="intro-background" />
                </div>
            </div>
            {/* service - end */}

        </>
    );
};

export default Service;
