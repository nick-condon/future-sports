import React from "react";
import './Welcome.css';
import Overlay from "./Overlay";
import WelcomeOverlay from "./WelcomeOverlay";
import WelcomePhoto from '../../assets/images/welcome-tennis-court.jpg'
import { useState } from "react";

const Welcome = () => {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return (
        <div className="Welcome">
            <div>
                <img className="WelcomeImage" src={WelcomePhoto} alt="empty tennis court with net" />
            </div>
            <div className="WelcomeOverlayMessage">
                <h1>Welcome</h1>
                <h3 className="H3Welcome">to Future Sports</h3>
                <p className="PWelcome">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="PWelcome">Mauris in aliquam sem fringilla ut morbi tincidunt id neque aliquam vestibulum.</p>
                <button type="submit" class="welcome-btn" onClick={() => setIsOverlayOpen(!isOverlayOpen)}>Learn More &#8594;</button>
            </div>
            <Overlay
            isOpen={isOverlayOpen}
            onClose={() => setIsOverlayOpen(!isOverlayOpen)}
            >
                {WelcomeOverlay()}
            </Overlay>
        </div>
    );
};

export default Welcome;