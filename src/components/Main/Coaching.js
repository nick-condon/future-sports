import React from "react";
import './Coaching.css';
import { useState } from 'react';
import Overlay from "./Overlay";
import CoachingPhoto1 from "../../assets/images/services-1.jpg";
import CoachingPhoto2 from "../../assets/images/services-2.jpg";
import CoachingPhoto3 from "../../assets/images/services-3.jpg";
import CoachingPhoto4 from "../../assets/images/services-4.jpg";

const Coaching = () => {

    const coachingServicesList = [
        {
            "photo": CoachingPhoto1,
            "title": "Individual Coaching",
            "text": "Fine tune your skills with individual coaching",
            "buttonText": "More Info",
        },
        {
            "photo": CoachingPhoto2,
            "title": "Group Coaching",
            "text": "Want to give tennis a try? Come and join a group!",
            "buttonText": "More Info",
        },
        {
            "photo": CoachingPhoto3,
            "title": "Weekly Hit Up",
            "text": "Come down to the courts for a hit up!",
            "buttonText": "More Info",
        },
        {
            "photo": CoachingPhoto4,
            "title": "Holiday Program",
            "text": "Book your child in for holiday fun!",
            "buttonText": "More Info",
        }
    ]

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return (
        <div className="Coaching" id="Coaching">
            <h2>Our Coaching Services</h2>
            <p>We offer the best coaching in the world.</p>
            <p>Sign up to one of our programs today!</p>
            <div className="CoachingServices">
                {coachingServicesList.map((item) => {
                    return (
                        <div>
                            <img src={item.photo} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <button type="submit" className="Button" onClick={() => setIsOverlayOpen(!isOverlayOpen)} >More Info</button>
                            <Overlay
                                isOpen={isOverlayOpen}
                                onClose={() => setIsOverlayOpen(!isOverlayOpen)}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Overlay>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Coaching;