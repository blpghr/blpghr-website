import React from 'react';
import "../../assets/css/body.css";
import '../../assets/css/services.css';
// images
import header_image from '../../assets/images/page-header-img.jpg';
// components
import PageHeader from '../components/PageHeader';

import serviceImage from '../../assets/images/services.png';

const Service = () => {
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
                        <div className="container-service-div">
                        <img src={serviceImage} alt='icon' className="container-service-div-image"/>
                            {/* <div className="col-lg-12">
                                <div className="service-feature-single">
                                    <p className="large c-grey">
                                        <span className='service-title'>Risk Management: </span>
                                    </p>
                                    <ul className='service-details'>
                                        <li>
                                            Employee discipline and termination.
                                        </li>
                                        <li>
                                            HIPAA Compliance
                                        </li>
                                        <li>
                                            Compliance management
                                        </li>
                                        <li>
                                            E-Verify
                                        </li>
                                        <li>
                                            Background checks
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-feature-single">
                                    <p className="large c-grey">
                                        <span className='service-title'>HR Support: </span>
                                    </p>
                                    <ul className='service-details'>
                                        <li>
                                            Job postings
                                        </li>
                                        <li>
                                            Job descriptions
                                        </li>
                                        <li>
                                            Performance management
                                        </li>
                                        <li>
                                            Resume screening
                                        </li>
                                        <li>
                                            Applicant tracking and sourcing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-feature-single">
                                    <p className="large c-grey">
                                        <span className='service-title'>Payroll Services: </span>
                                    </p>
                                    <ul className='service-details'>
                                        <li>
                                            Dedicated payroll REP
                                        </li>
                                        <li>
                                            Quarterly tax flings
                                        </li>
                                        <li>
                                            Sick leave/PTO tracking
                                        </li>
                                        <li>
                                            Online time and attendance portal
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-feature-single">
                                    <p className="large c-grey">
                                        <span className='service-title'>Benefits administration: </span>
                                    </p>
                                    <ul className='service-details'>
                                        <li>
                                            New hire enrollment and group administration
                                        </li>
                                        <li>
                                            Health, dental, etc.
                                        </li>
                                        <li>
                                            Benefit invoicing
                                        </li>
                                        <li>
                                            Cobra administration
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="service-feature-single">
                                    <p className="large c-grey">
                                        <span className='service-title'>401(K) Retirement services: </span>
                                    </p>
                                    <ul className='service-details'>
                                        <li>
                                            Fiduciary service and risk transfer
                                        </li>
                                        <li>
                                            Portfolio design
                                        </li>
                                        <li>
                                            Compliance testing
                                        </li>
                                        <li>
                                            Government filings
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Americans with Disabilities Act (ADA): </span>This civil rights law was enacted in 1990 (amended in 2008), and prohibits discrimination against individuals with disabilities. ADA ensures equal opportunities for people with disabilities in areas of public accommodations, employment, transportation, and government services. For more background on the law, and common mistakes employers make, BLPG HR can help advise and council.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Applicant tracking system: </span>A software that helps an organization with all recruitment needs. Most of the versions allow employers to able to post to job boards and stay compliant with EEOC laws surrounding hiring practices.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>At-will employment: </span>An at-will employee can be fired at any time for any reason. If the employer decides to let that employee go, the employee has limited legal rights to fight the termination. Additionally, an employee may leave at any time for any reason with or without notice. Essentially, all states recognize at-will employment, but some states place limitations on it.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Background check: </span>A background check is a form of investigation into a potential employee???s background, based on certain criteria. That could include employment, education, criminal records, vehicle, and license record checks.  It also may or may not include a credit check, which investigates the credit history of a candidate (there are several laws surrounding this). While employers aren???t required to perform a background check, there are certain regulations that apply if making any employment decisions regarding the outcome.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Benefits: </span>Employee benefits come in many shapes and sizes. In general, benefits include some sort of ???perks??? provided to employees that an employee receives in addition to wages. This could include health insurance, pension plans, sick leave, vacation, etc. Anything non-monetary provided to employees as a ???benefit??? should be included in this summary.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>COBRA: </span>The Consolidated Omnibus Budget Reconciliation Act (COBRA), passed in 1985, is a law that requires employers with 20 or more employees that offer health care benefits to offer a continuing coverage option to those who lose their benefits due to termination, reduction in hours, etc. COBRA compliance failures can result in significant penalties for employers.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Department of Labor (DOL): </span>This cabinet-level department of the government is responsible for a few areas as it relates to the welfare of workers. This includes occupational safety, wage and hour standards, unemployment insurance benefits, and more. Most of the policies and procedures put in place at a business are guided by the Department of Labor and their rules and regulations published.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Employee (vs. independent contractor): </span>In the most basic sense of the word, an employee is someone who performs a service for a company. In general, a business owner must withhold income taxes, withhold, and pay Social Security and Medicare taxes, as well as pay unemployment tax on wages paid to an employee.
                                        An independent contractor is an individual who provides services or goods to another individual or business under terms laid out in a contract.
                                        Classification of employees can trip up employers and is critical for tax purposes, so be sure to review IRS guidelines and consult with BLPG HR in the event you are unsure.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Employee onboarding: </span>Onboarding in this case refers to the action of integrating a new employee into an organization by providing the necessary knowledge, skills, and behaviors to be successful in the role. The onboarding process starts with the background check and involves everything from filling out paperwork to meeting co-workers. It???s an integral step in employee retention. The success of employees in a company is dependent on the first impression: orientation and onboarding. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Equal Employment Opportunity (EEOC): </span>The EEOC is an organization responsible for enforcing federal laws that make it illegal to discriminate against a job applicant for a variety of factors. This includes a person???s race, color, religion, sex, national origin, age (40 or older), disability, or genetic information.  Most employers with at least 15 employees are covered by EEOC laws.
                                        Employees are entitled to file a complaint with the EEOC when they feel they have been discriminated against. This is not a lawsuit but a serious allegation, a strict process must be followed in the event a compliant is launched by an employee present or past. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Essential job functions: </span>The fundamental duties of a position are used to determine the rights of an employee under ADA. (Refer back to ADA for more information) If an employee cannot perform the essential job functions (even with reasonable accommodation), he or she is technically not considered qualified for the job, and therefore would not be protected from discrimination.  </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Exempt (and non-exempt) employees: </span>An exempt employee is excluded from minimum wage, overtime regulations, and other protections under the Fair Labor Standards Act.  A non-exempt employee is required to  </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Exit interview: </span>This is a conversation with an employee who is about to leave an organization, about said employee???s reasons for leaving and overall experience while at the organization. Learn some great ways to get incredible value from an exit interview through your BLPG HR advisor.  </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Fair Labor Standards Act (FLSA): </span>FLSA establishes minimum wage and overtime pay, recordkeeping, and child labor standards that affect full-time and part-time workers. The Wage and Hour Division (WHD) of the U.S. Department of Labor (DOL) enforces the FLSA. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Family and Medical Leave Act (FMLA): </span>FMLA provides certain employees with up to 12 weeks of unpaid, job-protected leave per year and that their group health benefits be maintained during that leave. This law applies to all public agencies, public and private elementary and secondary schools, and companies with 50 or more employees. There is a strict structure of documentation for this process including notices mailed to employees on approval or denial. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Full-time (and part-time): </span>The difference between full-time and part-time employees is based off the number of hours worked in a standard week. The distinction is critical for purposes of the Affordable Care Act (ACA). A basic answer would be that a full-time employee is someone who works between 30-40 hours a week, and part-time is usually less than 30 hours a week. However, under the ACA, the IRS explains that a full-time employee is employed on average at least 30 hours a week for a calendar month. The FLSA does not have a definition of full-time vs. part-time employment; employers determine their own definitions.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Handbook: </span>An employee handbook or manual, is a guide given to employees that includes everything related to your company policies. This could include information on culture, vacation time, and procedures. There are no federal or state laws that specifically require you to have one, but it is highly advised that you create one to hold employees accountable. It is also advised that you have each employee sign acknowledgement of said handbook for future legality issues that may arise.</p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Job description: </span>Basically, a job description is a written outline of a specific job that includes the job title, duties, scope, and information on the company. Having a thorough and well-written job description is the first step in obtaining great employees.  </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Labor law poster: </span>These posters are mandated state and federal employment law notices that employers are required to post conspicuously in an area frequented by all employees. If a business has at least one employee, labor law posters are required. What posters are required? How often do postings change? Find that information and more through meticulous research online, consult with BLPG HR to find these resources. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Minimum wage: </span>Minimum wage is the lowest wage permitted by law (from a federal or state level) that a worker can be paid. Currently, the federal minimum wage for covered non-exempt employees is $7.25 per hour ??? this has been unchanged since 2009. Minimum wage provisions are outlined by the FLSA. Find out your state???s current wage by reviewing online and through your state website. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Non-compete agreement: </span>A non-compete agreement is a contract between employees and employers that states the employee must not enter competition with the employer after that employee is no longer with the company. For a company with heavy competition in the area, it is advised that you have each employee fill out a specific agreement to protect your business.  </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Occupational Safety and Health Administration (OSHA): </span>Congress created OSHA from the Occupational Safety and Health Act of 1970, to ensure safe and healthy working conditions for employees. OSHA also sets and enforces standards by providing training, outreach, education, and assistance.  </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Overtime: </span>Unless an employee is exempt, an employee covered by the FLSA must receive overtime pay for over 40 hours in a workweek. According to the DOL, the rate is supposed to be not less than time and one-half of the employee???s regular rate of pay. There are specific state guidelines surrounding overtime as well, including daily rates. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Performance review: </span>A performance review is a discussion between the employer and employee that evaluates and documents the employee???s job performance. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Sexual harassment: </span>According to the EEOC, sexual harassment means that it is unlawful to harass someone by way of unwelcome sexual advances, requests for sexual favors, and other verbal or physical harassment. It can also include offensive remarks about a person???s sex. Training for sexual harassment is critical in staying compliant, no matter how large or small a business is. Some states require specific training for sexual harassment. It is advised that you develop a policy and training for each employee on sexual harassment. </p>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="service-feature-single">
                                    <p class="large c-grey"><span className='service-title'>Workers??? compensation: </span>Workers??? comp is a form of insurance that provides benefits to employees who suffer job-related injuries or illnesses. Each state has certain laws and standards for workers??? compensation. On the federal level, the government also has a separate workers??? comp program, but it???s mostly for federal employees. </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
