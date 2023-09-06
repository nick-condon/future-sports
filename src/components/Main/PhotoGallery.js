import React from "react";
import './PhotoGallery.css';
import { useState } from "react";
import Photo1 from '../../assets/images/gallery-image-1.jpg';
import Photo2 from '../../assets/images/gallery-image-2.jpg';
import Photo3 from '../../assets/images/gallery-image-3.jpg';
import Photo4 from '../../assets/images/gallery-image-4.jpg';
import Photo5 from '../../assets/images/gallery-image-5.jpg';
import Photo6 from '../../assets/images/gallery-image-6.jpg';
import Photo7 from '../../assets/images/gallery-image-7.jpg';
import Photo8 from '../../assets/images/gallery-image-8.jpg';

const PhotoGallery = () => {

    const photoArray = [
        {
            "photo": Photo1,
            "alt": "Man playing tennis hitting a backhand",
        },
        {
            "photo": Photo2,
            "alt": "Man playing tennis",
        },
        {
            "photo": Photo3,
            "alt": "Man playing tennis waiting at the net",
        },
        {
            "photo": Photo4,
            "alt": "Two men playing tennis one about to volley",
        },
        {
            "photo": Photo5,
            "alt": "Two man playing tennis with one who has just hit a smash",
        },
        {
            "photo": Photo6,
            "alt": "Two men embracing on the tennis court",
        },
        {
            "photo": Photo7,
            "alt": "Two men embracing on the tennis court",
        },
        {
            "photo": Photo8,
            "alt": "Hand holding tennis ball",
        },
    ]

    const [modalDisplay, setModalDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState('');

    const showImageInModal = (image) => {
        //set image to show to be the one that was clicked
        setImageToShow(image);

        //set modal visibility to true
        setModalDisplay(true);
    }

    const closeModal = () => { setModalDisplay(false)}

    return (
        <div className="PhotoGallery" id="Gallery">
            <h2>Photo Gallery</h2>
            <div className="PhotoGalleryGridContainer">
                {photoArray.map((item) => {
                    return (
                        <figure>
                            <img className="GalleryImage" src={item.photo} alt={item.alt} onClick={() => showImageInModal(item.photo)} />
                        </figure>
                    )
                })}
            </div>
            {modalDisplay && (
                    <div className="Modal">
                        <span class="ClosePhoto" onClick={closeModal}>X</span>
                        <img className="ModalPhoto" src={imageToShow} />
                    </div>
                )}
        </div>
    );
};

export default PhotoGallery;