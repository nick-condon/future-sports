import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div></div>
            <div className="ContactForm">
                <h2 style={{ color: "white", textAlign: "left", paddingTop: "0px" }}>Contact</h2>
                <h3 style={{ color: "white", textAlign: "left" }}>and we'll return with an answer!</h3>
                <form method="post">
                    <input type="text" style={{height:"20px", fontSize:"14pt"}} title="fullname" placeholder="Full Name*" required />
                    <br />
                    <br />
                    <input type="text" style={{height:"20px", fontSize:"14pt"}} title="email" placeholder="Email Address*" required />
                    <br />
                    <br />
                    <textarea rows="5" cols="40" style={{fontSize:"14pt"}} placeholder="Enter your message*" required></textarea>
                    <br />
                    <br />
                    <button type="submit" style={{height: "40px", width: "200px", fontSize: "14pt"}}>Send</button>
                </form>
            </div>
            <div>
                <p style={{ color: "white" }}><strong>Address:<br /></strong>Brisbane st, <br />Mellbourne</p>
                <p style={{ color: "white" }}><strong>Ph:<br /></strong>03 4444 3333</p>
                <p style={{ color: "white" }}><strong>Email:<br /></strong>admin@futuresports.com.au</p>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14047.89060974969!2d153.3950935!3d-28.3294293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b90f14b99ee0d0b%3A0x62c934772f53df63!2sMurwillumbah%20Tennis%20Club!5e0!3m2!1sen!2sau!4v1691273813621!5m2!1sen!2sau" width="200" height="150" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;