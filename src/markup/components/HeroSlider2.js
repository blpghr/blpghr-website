import React from 'react';

// Import Swiper React components
import 'swiper/swiper.scss';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// video lightbox
import VideoLightBox from './VideoLightBox';


// images
import sliderImage1 from '../../assets/images/index-2-hero-img.png';
import pattern1 from '../../assets/images/patterns/pattern-1.png';
import pattern2 from '../../assets/images/patterns/pattern-3.png';

SwiperCore.use([Pagination]);

const HeroSlider2 = () => {
    return (
        <div className="hero-2">
            <div className="hero-2-wrapper">
                <Swiper
                    className="hero-2-slider"
                    speed={100000}
                    autoplay={false}
                    pagination={{
                        el: '.hero-2-pagination',
                        type: 'bullets',
                        bulletActiveClass: 'hero-2-pagination-bullet-active bullet-active',
                        bulletClass: 'hero-2-pagination-bullet bullet',
                        clickable: false,
                    }}
                >
                    <SwiperSlide>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="hero-2-content">
                                        <h3>
                                        Businesses of all sides are threatened by unprecedented employment law risks. It is our mission to mitigate these hazards through our comprehensive HR and Compliance Services.
                                        </h3>
                                        <div className="button-group">
                                            <p>
                                                It is our mission to make this happen for you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero-2-image">
                                        <img className="main" src={sliderImage1} alt="slider" />
                                        <div className="circle">
                                            <img src={pattern1} alt="pattern" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="hero-2-absolute-img" src={pattern2} alt="pattern" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="hero-2-pagination bullet-pagination"></div>
            </div>
        </div>
    );
};

export default HeroSlider2;
