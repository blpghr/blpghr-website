import React from 'react';

// sliders
import HeroSlider1 from '../components/HeroSlider1';
// button
// images
import pattern1 from '../../assets/images/patterns/pattern.png';



const Index = () => {

    return (
        <>
            {/* Hero Slider 1 - start */}
            <HeroSlider1/>
            {/* Hero Slider 1 - end */}

            {/* cta - start */}
            <div className="cta-section cta-section-1 sec-hero-slider b-primary">
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
                                {/* <div className="button-group">
                                    <Button
                                        className='button-1 txt-upper'
                                        to='/contact'
                                        icon='far fa-envelope'
                                        text='book appointment'
                                    />
                                    <Button
                                        className='button-2 txt-upper'
                                        to='/contact'
                                        icon='fas fa-headphones'
                                        text='talk to an expert'
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta - end*/}

            {/* intro section - start */}
            {/* <div className="intro">
                <div className="intro-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="intro-content">
                                    <h2>About BLPG HR</h2>
                                    <p className="paragraph-lg c-grey">
                                    HR consulting services <b>provide customized, 
                                    results driven, cost effective services to its client companies </b>so that human resources management problems can be addressed, 
                                    resolved, and stay resolved. 
                                    The HR department is a critical component of any business hence it should be management properly as productivity of the company is based on this.

                                    </p>
                                 
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="vertical-txt-wrapper right-align">
                                    <h1 className="vertical-txt">BLPG</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image intro-bg">
                        <img src={intro_bg} alt="intro-bg" />
                    </div>
                </div>
            </div> */}
            {/* intro section - end */}

        </>
    );
}

export default Index;
