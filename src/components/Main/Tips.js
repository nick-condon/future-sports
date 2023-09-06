import React from "react";
import './Tips.css';
import Blog from './Blog';
import video from '../../assets/videos/How-to-improve-your-return-of-serve.mp4';
import BlogImage1 from '../../assets/images/slide-shot.jpg';
import BlogImage2 from '../../assets/images/trick-shot.jpg';
import BlogImage3 from '../../assets/images/underarm-serve.jpg';


const Tips = () => {

    const blogArray = [
        {
            id: 1,
            heading: "Learning to slide into the net",
            photo: BlogImage1,
            text: "Without pulling a hammy! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim fringilla justo ut varius. ",
        },
        {
            id: 2,
            heading: "Doing a shot under your leg",
            photo: BlogImage2,
            text: "The ultimate trick shot guide Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim fringilla justo ut varius. ",
        },
        {
            id: 3,
            heading: "The art of the underarm serve",
            photo: BlogImage3,
            text: "When your opponent is too far back! There are many trick shots in tennis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim fringilla justo ut varius. ",
        }
    ]


    return (
        <div className="Tips" id="Tips">
            <div className="TipsGridContainer">
                <div className="TipsGridVideo">
                    <h2>Video Tennis Tips</h2>
                    <p>This month: Returning Serve</p>
                    <video width={320} height={240} controls>
                        <source src={video} type="video/mp4" />
                    </video>
                    <blockquote>The best way to learn is to watch videos.</blockquote>
                    <figcaption>- Some Tennis Great</figcaption>
                </div>
                <div className="TipsGridHeading">
                    <h2>Tips and Tricks</h2>
                </div>
                {blogArray.map((item) => {
                    return (
                        <div className="TipsGridBLog">
                            {Blog(item)}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Tips;