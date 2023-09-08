import React from "react";
import './IndividualCoachingForm.css';

//Define the valid charters for email
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class IndividualCoachingForm extends React.Component {

    //Create placeholders for content entered into form and errors
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            coachingTime: null,
            errors: {
                fullName: '',
                email: '',
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
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.fullName == null || this.state.email == null || this.state.coachingTime == null) {
            alert('please fill in all the fields');
        } else if (validateForm(this.state.errors)) {
            console.info('Valid Form')
            alert('Thank you for your message!')
            document.getElementById("ContactFullName").value = '';
            document.getElementById("ContactEmail").value = '';
        } else {
            console.error('Invalid Form')
        }
    }

    //Render content. Fields are checked as the user enters data and an error message is displayed while it is incorrect.
    render() {
        const { errors } = this.state;
        return (
            <div>
                <h2>Individual Coaching</h2>
                <p>Register below</p>
                <br />
                <form onSubmit={this.handleSubmit} noValidate>
                    <input type="text" id="ContactFullName" style={{ height: "20px", fontSize: "14pt" }} name="fullName" onChange={this.handleChange} placeholder="Full Name*" />
                    <br />
                    {errors.fullName.length > 0 && <span className='Error'>{errors.fullName}</span>}
                    <br />
                    <br />
                    <input type="text" id="ContactEmail" style={{ height: "20px", fontSize: "14pt" }} name="email" onChange={this.handleChange} placeholder="Email Address*" />
                    <br />
                    {errors.email.length > 0 && <span className='Error'>{errors.email}</span>}
                    <br />
                    <br />
                    <p>Select which time you would like:</p><br />
                    <input type="radio" id="saturday-11am" name="coachingTime" value="Saturday-11am" onChange={this.handleChange} />
                    <label for="saturday-11am">Saturday at 11am</label><br />
                    <input type="radio" id="tuesday-5pm" name="coachingTime" value="Tuesday-5pm" onChange={this.handleChange} />
                    <label for="tuesday-5pm">Tuesday at 5pm</label><br />
                    <input type="radio" id="sunday-4pm" name="coachingTime" value="Sunday-4pm" onChange={this.handleChange} />
                    <label for="sunday-4pm">Sunday at 4pm</label><br />
                    <br />
                    <br />
                    <button type="submit" style={{ height: "40px", width: "200px", fontSize: "14pt" }}>Send</button>
                </form>
            </div>
        );
    };

}