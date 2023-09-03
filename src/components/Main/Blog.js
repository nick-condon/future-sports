import React from 'react';
import { useState } from 'react';
import Overlay from './Overlay';
import './Blog.css';

function Blog(props) {

    const maxChars = 35;

    const [hidden, setHidden] = useState(true);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    if (props.text.length <= maxChars) {

        return (
            <div>
                <img style={{ width: 205, height: 205}} src={props.photo} />
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
        );
    }
    return (
        <div>
            <img style={{ width: 205, height: 205}} src={props.photo} />
            <h3>{props.heading}</h3>
            {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}
            <br></br><br></br>
            <a className='OpenBlogLink' onClick={() => setIsOverlayOpen(!isOverlayOpen)}> Read more</a>
            <Overlay
            isOpen={isOverlayOpen}
            onClose={() => setIsOverlayOpen(!isOverlayOpen)}
            >
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </Overlay>
        </div>
    );
}

export default Blog;