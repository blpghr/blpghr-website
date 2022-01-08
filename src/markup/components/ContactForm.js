import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const [firstName, setFirstName] = useState('');
    //const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isProgress, setIsProgress] = useState(false);

    function handleValidation() {
        let formIsValid = true;
        // if (firstName === undefined || firstName === null) {
        //     formIsValid = false;
        //     setFirstNameError("Firstname is required");
        // }
        return formIsValid;
    }

    function sendEmail(e) {
        e.preventDefault();
        if (handleValidation()) {
            setIsProgress(true);
            var body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            }
            emailjs.send('service_j0ecvzo', 'template_nal2uop', body, 'user_PXxlpHrhiXG0pciJDodoY')
                .then((result) => {
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setSubject("");
                    setMessage("");
                    setIsProgress(false);
                    alert("We recived your message.")

                }, (error) => {
                    console.log(error.text);
                    alert("Something went wrong, Please try again.")
                    setIsProgress(false);
                });
        }
    }
    return (
        <form onSubmit={sendEmail}>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <input type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-lg-6">
                    <input type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <textarea type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button className="button button-3 txt-upper"
                    disabled={isProgress}
                    type="submit">
                        <div>
                            <i className="far fa-comment"></i>
                            <span>
                            {isProgress ? 'Please wait...' : 'Send message'}
                                
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
