import React from "react";
import './Coaching.css';
import { useState } from 'react';
import Overlay from "./Overlay";
import CoachingPhoto1 from "../../assets/images/services-1.jpg";
import CoachingPhoto2 from "../../assets/images/services-2.jpg";
import CoachingPhoto3 from "../../assets/images/services-3.jpg";
import CoachingPhoto4 from "../../assets/images/services-4.jpg";
import IndividualCoachingForm from './IndividualCoachingForm.js';
import HolidayProgramForm from "./HolidayProgramForm";

const Coaching = () => {
    const [isIndOverlayOpen, setIsIndOverlayOpen] = useState(false);
    const [isGroupOverlayOpen, setIsGroupOverlayOpen] = useState(false);
    const [isHitOverlayOpen, setIsHitOverlayOpen] = useState(false);
    const [isHolidayOverlayOpen, setIsHolidayOverlayOpen] = useState(false);

    return (
        <div className="Coaching" id="Coaching">
            <h2>Our Coaching Services</h2>
            <p>We offer the best coaching in the world.</p>
            <p>Sign up to one of our programs today!</p>
            <div className="CoachingServices">
                <div>
                    <img src={CoachingPhoto1} alt="Boy holding tennis raquet and ball" width={'100%'} />
                    <h3>Individual Coaching</h3>
                    <p>Fine tune your skills with individual coaching</p>
                    <button type="submit" className="Button" onClick={() => setIsIndOverlayOpen(!isIndOverlayOpen)} >More Info</button>
                    <Overlay
                        isOpen={isIndOverlayOpen}
                        onClose={() => setIsIndOverlayOpen(!isIndOverlayOpen)}
                    >
                        {
                        <IndividualCoachingForm />
                        }
                    </Overlay>
                </div>
                <div>
                    <img src={CoachingPhoto2} alt="Coach helping boy with tennis" width={'100%'} />
                    <h3>Group Coaching</h3>
                    <p>Want to give tennis a try? Come and join a group!</p>
                    <button type="submit" className="Button" onClick={() => setIsGroupOverlayOpen(!isGroupOverlayOpen)} >More Info</button>
                    <Overlay
                        isOpen={isGroupOverlayOpen}
                        onClose={() => setIsGroupOverlayOpen(!isGroupOverlayOpen)}
                    >
                        <div>
                            <h2>Group Coaching Coming Soon!</h2>
                            <p>Stay tuned.</p>
                        </div>
                    </Overlay>
                </div>
                <div>
                    <img src={CoachingPhoto3} alt="Woman hitting tennis ball showing her teeth" width={'100%'} />
                    <h3>Weekly Hit Up</h3>
                    <p>Come down to the courts for a hit up!</p>
                    <button type="submit" className="Button" onClick={() => setIsHitOverlayOpen(!isHitOverlayOpen)} >More Info</button>
                    <Overlay
                        isOpen={isHitOverlayOpen}
                        onClose={() => setIsHitOverlayOpen(!isHitOverlayOpen)}
                    >
                        <div>
                            <h2>Weekly Hitup</h2>
                            <p>We practice every night of the week at 6pm.</p>
                        </div>
                    </Overlay>
                </div>
                <div>
                    <img src={CoachingPhoto4} alt="Smiling girl in school uniform" width={'100%'} />
                    <h3>Holiday Program</h3>
                    <p>Book your child in for holiday fun!</p>
                    <button type="submit" className="Button" onClick={() => setIsHolidayOverlayOpen(!isHolidayOverlayOpen)} >More Info</button>
                    <Overlay
                        isOpen={isHolidayOverlayOpen}
                        onClose={() => setIsHolidayOverlayOpen(!isHolidayOverlayOpen)}
                    >
                        {
                            <HolidayProgramForm />
                        }
                    </Overlay>
                </div>
            </div>
        </div>
    );
};

export default Coaching;