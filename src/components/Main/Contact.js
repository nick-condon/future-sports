import React from "react";
import './Contact.css';

//Define the valid charters for email
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class Contact extends React.Component {

    //Create placeholders for content entered into form and errors
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            message: null,
            errors: {
                fullName: '',
                email: '',
                message: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        //Define the rules for each field and associated error messages
        switch (name) {
            case 'fullName':
                errors.fullName =
                    value.length < 5
                        ? 'Full Name must be at least 5 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'message':
                errors.password =
                    value.length < 10
                        ? 'Message must have at least 10 characters!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.fullName == null || this.state.email == null || this.state.message == null)  {
            alert('please fill in all the fields');
        } else if (validateForm(this.state.errors)) {
            console.info('Valid Form')
            alert('Thank you for your message!')
            document.getElementById("ContactFullName").value = '';
            document.getElementById("ContactEmail").value = '';
            document.getElementById("ContactMessage").value = '';
        } else {
            console.error('Invalid Form')
        }
    }

    //Render content. Fields are checked as the user enters data and an error message is displayed while it is incorrect.
    render() {
        const { errors } = this.state;
        return (
            <div className="Contact" id="Contact">
                <div></div>
                <div className="ContactForm">
                    <h2 style={{ color: "white", textAlign: "left", paddingTop: "0px" }}>Contact</h2>
                    <h3 style={{ color: "white", textAlign: "left" }}>and we'll return with an answer!</h3>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <input type="text" id="ContactFullName" style={{ height: "20px", fontSize: "14pt" } } name="fullName" onChange={this.handleChange} placeholder="Full Name*" />
                        <br />
                        {errors.fullName.length > 0 && <span className='Error'>{errors.fullName}</span>}
                        <br />
                        <br />
                        <input type="text" id="ContactEmail" style={{ height: "20px", fontSize: "14pt" }} name="email" onChange={this.handleChange} placeholder="Email Address*" />
                        <br />
                        {errors.email.length > 0 && <span className='Error'>{errors.email}</span>}
                        <br />
                        <br />
                        <textarea rows="5" cols="40" style={{ fontSize: "14pt" }} id="ContactMessage" name="message" onChange={this.handleChange} placeholder="Enter your message*" ></textarea>
                        <br />
                        {errors.message.length > 0 && <span className='Error'>{errors.message}</span>}
                        <br />
                        <br />
                        <button type="submit" style={{ height: "40px", width: "200px", fontSize: "14pt" }}>Send</button>
                    </form>
                </div>
                <div>
                    <p style={{ color: "white" }}><strong>Address: </strong>Brisbane st, Mellbourne</p>
                    <p style={{ color: "white" }}><strong>Ph: </strong>03 4444 3333</p>
                    <p style={{ color: "white" }}><strong>Email: </strong>admin@futuresports.com.au</p>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14047.89060974969!2d153.3950935!3d-28.3294293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b90f14b99ee0d0b%3A0x62c934772f53df63!2sMurwillumbah%20Tennis%20Club!5e0!3m2!1sen!2sau!4v1691273813621!5m2!1sen!2sau" width="200" height="150" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        );
    };

}