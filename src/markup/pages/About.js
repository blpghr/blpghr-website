import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import intro_bg from '../../assets/images/intro-bg-1.jpg';
import "../../assets/css/body.css";
import "../../assets/css/about.css";
const About = () => {

    return (
        <>
            {/* page header - start */}
            <PageHeader image={header_image}>
                <h1 className="c-dark">About BLPG HR</h1>
            </PageHeader>
            {/* page header - end */}


            {/* intro section - start */}

            <div className="intro-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="intro-content">
                                <h4>
                                    Bio of Leah Jacobson – BLPG HR President
                                </h4>
                                <p className="paragraph-lg c-grey">Before beginning her career in human resources, Leah served as a sergeant in the United States Marine Corps. She holds a Bachelor of Communication and Business from the University of Utah and is formally certified as SHRM-Senior Certified Professional and HRCI-Professional in Human Resources. Her prior work with healthcare companies has resulted in an extensive knowledge of employee policies and procedures, benefits administration, compensation, and recruitment. Leah has an adventurous spirit that leads her to hike, camp, climb, fish, and swim whenever possible.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image intro-bg text-center">
                                <img src={intro_bg} alt="intro-bg" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* intro section - end */}

        </>
    );
};

export default About;
