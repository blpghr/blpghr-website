import React from 'react';

// sliders
import HeroSlider2 from '../components/HeroSlider2';
// button
// images
// import pattern1 from '../../assets/images/patterns/pattern.png';

import icon1 from '../../assets/images/icons/icon-4.png';
import icon2 from '../../assets/images/icons/icon-5.png';
import icon3 from '../../assets/images/icons/icon-6.png';
import icon4 from '../../assets/images/icons/icon-7.png';
import "../../assets/css/body.css"
const Index = () => {

    return (
        <>
            {/* Hero Slider 1 - start */}
            <HeroSlider2 />
            {/* Hero Slider 1 - end */}
            <div className="service">
                <div className="service-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">HR Consulting</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Recruiting</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon3} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Payroll Services</h3>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Benefit Administration</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta - start */}
            {/* <div className="cta-section cta-section-1 sec-hero-slider b-primary">
                <div className="cta-section-wrapper sec-hero-slider-wrapper section-wrapper" style={{ backgroundImage: `url(${pattern1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content sƒec-hero-slider-content txt-center">
                                <h3 className='c-white f-w-400 ln-ht-44'>About BLPG HR.</h3>
                                <h4 className="c-white f-w-400 heading-50 mg-center">
                                HR consulting services <b>provide customized, 
                                    results driven, cost effective services to its client companies </b>so that human resources management problems can be addressed, 
                                    resolved, and stay resolved. 
                                    The HR department is a critical component of any business hence it should be management properly as productivity of the company is based on this.

                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* cta - end*/}


        </>
    );
}

export default Index;
