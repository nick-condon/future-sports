import React from "react";
import './Footer.css';
import { useState } from 'react';
import Overlay from "../Main/Overlay";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import PhotoCredits from "./PhotoCredits";

const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPPOpen, setIsPPOpen] = useState(false);
    const [isPhotoCreditsOpen, setIsPhotoCreditsOpen] = useState(false);
    return (
        <div className="FooterGridContainer">
            <div>
                <a onClick={() => setIsTermsOpen(!isTermsOpen)}>Terms and Conditions</a>
            </div>
            <div>
                <a onClick={() => setIsPPOpen(!isPPOpen)}>Privacy Policy</a>
            </div>
            <div>
                <a onClick={() => setIsPhotoCreditsOpen(!isPhotoCreditsOpen)}>Photo Credits</a>
            </div>
            <Overlay
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(!isTermsOpen)}
            >
                {
                    <TermsAndConditions />
                }
            </Overlay>
            <Overlay
                isOpen={isPPOpen}
                onClose={() => setIsPPOpen(!isPPOpen)}
            >
                {
                    <PrivacyPolicy />
                }
            </Overlay>
            <Overlay
                isOpen={isPhotoCreditsOpen}
                onClose={() => setIsPhotoCreditsOpen(!isPhotoCreditsOpen)}
            >
                {
                    <PhotoCredits />
                }
            </Overlay>
        </div>
    );
};

export default Footer;