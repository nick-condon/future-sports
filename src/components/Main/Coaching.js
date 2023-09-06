import React from "react";
import './Coaching.css';
import { useState } from 'react';
import Overlay from "./Overlay";
import CoachingPhoto1 from "../../assets/images/services-1.jpg";
import CoachingPhoto2 from "../../assets/images/services-2.jpg";
import CoachingPhoto3 from "../../assets/images/services-3.jpg";
import CoachingPhoto4 from "../../assets/images/services-4.jpg";

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
                    <img src={CoachingPhoto1} />
                    <h3>Individual Coaching</h3>
                    <p>Fine tune your skills with individual coaching</p>
                    <button type="submit" className="Button" onClick={() => setIsIndOverlayOpen(!isIndOverlayOpen)} >More Info</button>
                    <Overlay
                        isOpen={isIndOverlayOpen}
                        onClose={() => setIsIndOverlayOpen(!isIndOverlayOpen)}
                    >
                        <div>
                            <h2>Individual Coaching</h2>
                            <p>Register below</p>
                            <br />
                            <form method="post">
                                <label for="name">Name:  </label>
                                <input type="text" title="name" placeholder="Enter your name*" required />
                                <br />
                                <label for="email">Email:</label><br />
                                <input type="text" title="email" placeholder="Email Address*" required />
                                <br />
                                <br />
                                <p>Select which time you would like:</p><br />
                                <input type="radio" id="saturday-11am" name="coaching-time" value="Saturday-11am" />
                                <label for="saturday-11am">Saturday at 11am</label><br />
                                <input type="radio" id="tuesday-5pm" name="coaching-time" value="Tuesday-5pm" />
                                <label for="tuesday-5pm">Tuesday at 5pm</label><br />
                                <input type="radio" id="sunday-4pm" name="coaching-time" value="Sunday-4pm" />
                                <label for="sunday-4pm">Sunday at 4pm</label><br />
                                <button type="submit">Send</button>
                            </form>
                        </div>
                    </Overlay>
                </div>
                <div>
                    <img src={CoachingPhoto2} />
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
                    <img src={CoachingPhoto3} />
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
                    <img src={CoachingPhoto4} />
                    <h3>Holiday Program</h3>
                    <p>Book your child in for holiday fun!</p>
                    <button type="submit" className="Button" onClick={() => setIsHolidayOverlayOpen(!isHolidayOverlayOpen)} >More Info</button>
                    <Overlay
                        isOpen={isHolidayOverlayOpen}
                        onClose={() => setIsHolidayOverlayOpen(!isHolidayOverlayOpen)}
                    >
                        <div>
                            <h2>Holiday Program</h2>
                            <p>Register below</p>
                            <form method="post">
                                <label for="name">Name:</label><br />
                                <input type="text" title="name" placeholder="Enter your name*" required />
                                <br />
                                <br />
                                <label for="email">Email:</label><br />
                                <input type="text" title="email" placeholder="Email Address*" required />
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
                                <button type="submit">Send</button>
                            </form>

                        </div>
                    </Overlay>
                </div>
            </div>
        </div>
    );
};

export default Coaching;