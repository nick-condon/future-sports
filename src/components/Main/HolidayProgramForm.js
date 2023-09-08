import React from "react";
import './HolidayProgramForm.css';

//Define the valid charters for email
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class HolidayProgramForm extends React.Component {

    //Create placeholders for content entered into form and errors
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
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
        if (this.state.fullName == null || this.state.email == null || this.state.message == null) {
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
                <h2>Holiday Program</h2>
                <p>Register below</p>
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
                    <p>Select which programme you would like information on:</p><br />
                    <input type="checkbox" id="term-1" name="holiday-pro" value="term-1" />
                    <label for="term-1">Term 1 Holidays</label><br />
                    <input type="checkbox" id="term-2" name="holiday-pro" value="Tuesday-5pm" />
                    <label for="term-2">Term 2 Holidays</label><br />
                    <input type="checkbox" id="term-3" name="holiday-pro" value="Sunday-4pm" />
                    <label for="term-3">Term 3 Holidays</label><br />
                    <input type="checkbox" id="term-4" name="holiday-pro" value="Sunday-4pm" />
                    <label for="term-4">Term 4 Holidays</label><br />
                    <br />
                    <br />
                    <button type="submit" style={{ height: "40px", width: "200px", fontSize: "14pt" }}>Send</button>
                </form>
            </div>
        );
    };

}