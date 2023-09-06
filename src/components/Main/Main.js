import React from 'react';
import PhotoCarousel from "./PhotoCarousel";
import Welcome from "./Welcome";
import Coaching from "./Coaching";
import PhotoGallery from "./PhotoGallery";
import Tips from "./Tips";
// import Blog from "./Blog";
import Contact from "./Contact";
import PhotoC1 from "../../assets/images/slide-one-doubles.jpg";
import PhotoC2 from "../../assets/images/slide-2-balance-ball.jpg";
import PhotoC3 from "../../assets/images/slide-3-tennis-rac.jpg";

const Main = () => {

    const photoCarouselList = [
        {
            "heading": "Keen to Play Tennis?",
            "photo": PhotoC1,
            "info": "Sign up today!",
            "alt": "lower half of two women playing tennis",
        },
        {
            "heading": "Are you ready?",
            "photo": PhotoC2,
            "info": "Let's Play!",
            "alt": "man holding tennis racquet with tennis ball balanced on its neck",
        },
        {
            "heading": "We play tennis",
            "photo": PhotoC3,
            "info": "Really well",
            "alt": "tennis racquet on the ground with four tennis balls on it in a pyramid formation",
        }
    ]
    
    return (
        <div className="MainSection">
            <PhotoCarousel imagesInfo={photoCarouselList} />
            <Welcome />
            <Coaching />
            <PhotoGallery />
            <Tips />

            {/* <div className="Blog">
                <Blog text={blogText} />
            </div>
            <div className="Blog">
                <Blog text={blogText2} />
            </div> */}
            <Contact />
        </div>
    );
};

export default Main;