import React from "react";
import Image1 from '../../assets/images/slide-one-doubles.jpg';
import Image2 from '../../assets/images/slide-2-balance-ball.jpg';
import Image3 from '../../assets/images/slide-3-tennis-rac.jpg';
import Image4 from '../../assets/images/welcome-tennis-court.jpg';
import Image5 from '../../assets/images/services-1.jpg';
import Image6 from '../../assets/images/services-2.jpg';
import Image7 from '../../assets/images/services-3.jpg';
import Image8 from '../../assets/images/services-4.jpg';

const PhotoCredits = () => {
    return (
        <div>
            <table border="1px" width="100%">
                <tr>
                    <th>Photo</th>
                    <th>Credit Info</th>
                </tr>
                <tr>
                    <td><img src={Image1} alt="lower half of two women playing tennis" style={{width:50}} /></td>
                    <td><a style={{color: "black"}} href="https://www.123rf.com/photo_118642225_fit-happy-poeple-playing-tennis-together-sport-concept.html">123rf.com</a></td>
                </tr>
                <tr>
                    <td><img src={Image2} alt="man holding tennis racquet with tennis ball balanced on its neck" style={{width:50}} /></td>
                    <td><a style={{color: "black"}} href="">123rf.com</a></td>
                </tr>
                <tr>
                    <td><img src={Image3} alt="tennis racquet on the ground with four tennis balls on it in a pyramid formation" style={{width:50}} /></td>
                    <td><a style={{color: "black"}} href="">123rf.com</a></td>
                </tr>
                <tr>
                    <td><img src={Image4} style={{width:50}} alt="empty tennis court with net" /></td>
                    <td><a style={{color: "black"}} href="https://www.flickr.com/photos/155403590@N07/43859281035">By dejankrsmanovic</a></td>
                </tr>
                <tr>
                    <td><img src={Image5} style={{width:50}} alt="Boy holding tennis raquet and ball" /></td>
                    <td><a style={{color: "black"}} href="https://www.123rf.com/photo_79193502_concentrated-boy-pitching-tennis-ball.html">123rf.com</a></td>
                </tr>
                <tr>
                    <td><img src={Image6} style={{width:50}} alt="Coach helping boy with tennis" /></td>
                    <td><a style={{color: "black"}} href="https://www.flickr.com/photos/64000826@N08/6107045658">Quickstart Tennis aids young players</a></td>
                </tr>
                <tr>
                    <td><img src={Image7} style={{width:50}} alt="Woman hitting tennis ball showing her teeth" /></td>
                    <td><a style={{color: "black"}} href="https://www.flickr.com/photos/45776673@N04/15051594191">2014 US Open (Tennis) - Qualifying Rounds - Melanie Oudin</a></td>
                </tr>
                <tr>
                    <td><img src={Image8} style={{width:50}} alt="Smiling girl in school uniform" /></td>
                    <td><a style={{color: "black"}} href="https://www.123rf.com/photo_79178304_portrait-of-happy-schoolgirl-in-uniform.html">123rf.com</a></td>
                </tr>
                <tr>
                    <td>Gallery Photos</td>
                    <td><a style={{color: "black"}} href="https://commons.wikimedia.org/w/index.php?curid=75394956">Photos by BugWarp</a></td>
                </tr>
            </table>
        </div>
    );
};

export default PhotoCredits;