import React from "react";
import { useState } from 'react';
import './PhotoCarousel.css';

const PhotoCarousel = ({imagesInfo}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [direction, setDirection] = useState(null);

    const moveNext = () => {
        // setDirection("right");
        setCurrentIndex((prevIndex) => prevIndex + 1 === imagesInfo.length ? 0 : prevIndex + 1 );
    };

    const moveBack = () => {
        // setDirection("left");
        setCurrentIndex((prevIndex) => prevIndex - 1 < 0 ? imagesInfo.length -1 : prevIndex - 1 );
    };

    return (
        <div className="CarouselContainer">
            <div className="Carousel">
                <div className="Heading">{imagesInfo[currentIndex].heading}</div>
                <img className="Image" src={imagesInfo[currentIndex].photo} alt={imagesInfo[currentIndex].alt} />
                <div className="Info">{imagesInfo[currentIndex].info}</div>
                <a className="Back" onClick={moveBack}>&#10094;</a>
                <a className="Forward" onClick={moveNext}>&#10095;</a>
            </div>
        </div>
    );
};

export default PhotoCarousel;