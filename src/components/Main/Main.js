import React from 'react';
// import PhotoCarousel from "./PhotoCarousel";
import Welcome from "./Welcome";
import Coaching from "./Coaching";
import PhotoGallery from "./PhotoGallery";
// import WeatherDashboard from "./WeatherDashboard";
import Tips from "./Tips";
// import Blog from "./Blog";
import Contact from "./Contact";

const Main = () => {
    // Added blogText have a blog to display, you could use a JSON of blogs if you like
    const blogText = `This is a web app to provide information about the 
    local community for locals and tourists. This is a web app to provide information about the 
    local community for locals and tourists. This is a web app to provide information about the 
    local community for locals and tourists.`; 
    const blogText2 = `This is something else I decided to put in. This is something else I decided to put in. This is something else I decided to put in. This is something else I decided to put in. This is something else I decided to put in.`

    return (
        <div className="MainSection">
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