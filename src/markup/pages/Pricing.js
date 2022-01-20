import React from 'react';


// components
import PageHeader from '../components/PageHeader';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import pattern2 from '../../assets/images/patterns/pattern-2.png';
import '../../assets/css/pricing.css';
import "../../assets/css/body.css"
const Service = () => {

    return (
        <>
            {/* page header - start */}
            <PageHeader image={header_image}>
                <h1 className="c-dark">Pricing</h1>
            </PageHeader>
            {/* page header - end */}

            {/* icon box section - start */}
            <div className="icon-box-section">
                <div className='icon-box-section-wrapper section-wrapper pattern-bg'>
                    <div className="icon-box-section-inner pattern-bg-content">
                        <div className="container">
                            {/* <div className="row">
                                <div className="icon-box-section-heading-content">
                                    <h2 className="f-w-400 heading-40 text-center">Pricing.</h2>
                                </div>
                            </div> */}
                            <div class="pricingTable">

                                <div id="price">
                                    <div class="plan">
                                        <div class="plan-inner">
                                            <div class="entry-title">
                                                <h3>1-20 employees</h3>
                                                <h4>Pricing starts at</h4>
                                                <div class="price">
                                                    $1,000<span>/ Month</span>
                                                </div>
                                            </div>
                                            <div class="entry-content">
                                                <ul>
                                                    <li>
                                                        $1000/month, with annual payment of $12,000 or <br />
                                                        pay monthly $1100<br />

                                                    </li>
                                                    <li>
                                                        $1250/month with $3,750 quarterly payment or <br />
                                                        pay monthly $1500<br />
                                                        Hourly rate: $350

                                                    </li>
                                                    <li>
                                                        Inquire about our competitive pricing and<br /> whether these packages are good for you?
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div class="btn">
                                                <a href="#">Order Now</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="plan basic">
                                        <div class="plan-inner">
                                            {/* <div class="hot">hot</div> */}
                                            <div class="entry-title">
                                                <h3>20-50 employees</h3>
                                                <h4>Pricing starts at</h4>
                                                <div class="price">$2,000<span>/ Month</span>
                                                </div>
                                            </div>
                                            <div class="entry-content">
                                                <ul>
                                                    <li>
                                                        $2,000/month with annual payment of $24,000 or <br />
                                                        pay monthly $2200 <br />


                                                    </li>
                                                    <li>
                                                        $2,500/month with $7,500 quarterly payment or <br />
                                                        pay monthly $2,750 <br />
                                                        Hourly rate: $450

                                                    </li>
                                                    <li>
                                                        Inquire about our competitive pricing and<br /> whether these packages are good for you?
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div class="btn">
                                                <a href="#">Order Now</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="plan standard">
                                        <div class="plan-inner">
                                            <div class="entry-title">
                                                <h3>50-100 employees</h3>
                                                <h4>Pricing starts at</h4>
                                                <div class="price">$3,000<span>/ Month</span>
                                                </div>
                                            </div>
                                            <div class="entry-content">
                                                <ul>
                                                    <li>
                                                        $3,000/month with annual payment of $36,0000 or <br />
                                                        pay monthly $3300<br />


                                                    </li>
                                                    <li>
                                                        $3,500/month with quarterly payment of $10,500 or <br />
                                                        pay monthly $4,000 <br />
                                                        Hourly rate: $450

                                                    </li>
                                                    <li>
                                                        Inquire about our competitive pricing and<br />whether these packages are good for you?
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <div class="btn">
                                                <a href="#">Order Now</a>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="plan ultimite">
                                        <div class="plan-inner">
                                            <div class="entry-title">
                                                <h3>100-200 employees</h3>
                                                <h4>Pricing starts at</h4>
                                                <div class="price">$4,500<span>/ Month</span>
                                                </div>
                                            </div>
                                            <div class="entry-content">
                                                <ul>
                                                    <li>
                                                        $4,000/month with annual payment of $48,000 or <br />
                                                        pay monthly $4400<br />

                                                    </li>
                                                    <li>
                                                        $4,500/month with quarterly payment of $13,500 or <br />
                                                        pay monthly $5,250<br />
                                                        Hourly rate: $450


                                                    </li>
                                                    <li>
                                                        Inquire about our competitive pricing and<br /> whether these packages are good for you?
                                                    </li>

                                                </ul>
                                            </div>
                                            {/* <div class="btn">
                                                <a href="#">Order Now</a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                               
                                <div class="pricingTable">
                                    <ul class="pricingTable-firstTable">
                                        <li class="pricingTable-firstTable_table">
                                            <h1 class="pricingTable-firstTable_table__header">Company size 1-20 employees</h1>
                                            <p class="pricingTable-firstTable_table__pricing"><span>$</span><span>1100</span><span>/Month</span></p>
                                            <ul class="pricingTable-firstTable_table__options">
                                                <li>$12,000 for year subscription</li>
                                                <li>$3,000 for quarterly subscription</li>
                                                <li>Approve Reviews</li>
                                            </ul>
                                            <button class="pricingTable-firstTable_table__getstart">Get Started Now</button>
                                        </li><li class="pricingTable-firstTable_table">
                                            <h1 class="pricingTable-firstTable_table__header">Gold Packege</h1>
                                            <p class="pricingTable-firstTable_table__pricing"><span>$</span><span>19</span><span>Month</span></p>
                                            <ul class="pricingTable-firstTable_table__options">
                                                <li>Unlimited Listing</li>
                                                <li>Edit Your Listing</li>
                                                <li>Approve Reviews</li>
                                                <li>Take Booking Online</li>
                                                <li>24/7 Support Service</li>
                                            </ul>
                                            <button class="pricingTable-firstTable_table__getstart">Get Started Now</button>
                                        </li>
                                        <li class="pricingTable-firstTable_table">
                                            <h1 class="pricingTable-firstTable_table__header">Platinum Packege</h1>
                                            <p class="pricingTable-firstTable_table__pricing"><span>$</span><span>49</span><span>Month</span></p>
                                            <ul class="pricingTable-firstTable_table__options">
                                                <li>Unlimited Listing</li>
                                                <li>Edit Your Listing</li>
                                                <li>Approve Reviews</li>
                                            </ul>
                                            <button class="pricingTable-firstTable_table__getstart">Get Started Now</button>
                                        </li>
                                        <li class="pricingTable-firstTable_table">
                                            <h1 class="pricingTable-firstTable_table__header">Platinum Packege</h1>
                                            <p class="pricingTable-firstTable_table__pricing"><span>$</span><span>49</span><span>Month</span></p>
                                            <ul class="pricingTable-firstTable_table__options">
                                                <li>Unlimited Listing</li>
                                                <li>Edit Your Listing</li>
                                                <li>Approve Reviews</li>
                                            </ul>
                                            <button class="pricingTable-firstTable_table__getstart">Get Started Now</button>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="pattern-bg-image" style={{ backgroundImage: `url(${pattern2})` }}></div>
                </div>
            </div>
            {/* icon box section - end */}

            {/* cta section - start */}
            {/* <div className="cta-section b-primary">
                <div className="cta-section-wrapper section-wrapper" style={{ backgroundImage: `url(${pattern1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content txt-center">
                                <h2 className="c-white f-w-400 heading-40 mg-center">Hire a professional CPA & Accounting firm.</h2>
                                <div className="button-group">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* cta section - end */}
        </>
    );
};

export default Service;
