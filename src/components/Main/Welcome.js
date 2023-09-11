import React from "react";
import './Welcome.css';
import WelcomePhoto from '../../assets/images/welcome-tennis-court.jpg'
import WelcomeButton from "./WelcomeButton";

const Welcome = () => {

    return (
        <div className="Welcome" id="Welcome">
            <div>
                <div>
                    <img className="WelcomeImage" src={WelcomePhoto} alt="empty tennis court with net" />
                </div>
                <div className="WelcomeOverlayMessage">
                    <h1>Welcome</h1>
                    <h3 className="H3Welcome">to Future Sports</h3>
                    <p className="PWelcome">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="PWelcome">Mauris in aliquam sem fringilla ut morbi tincidunt id neque aliquam vestibulum.</p>
                    <WelcomeButton
                        buttonName="Learn More..." />
                </div>
            </div>
        </div>
    );
};

export default Welcome;