import React from "react";
import './SideBlock.css';
import { useState } from 'react';

export function SideBlock(buttonImage, blockInfo) {

    const [sideBlockVisible, setSideBlockVisible] = useState(false);
    const [sideBlockButtonVisible, setSideBlockButtonVisible] = useState(true);

    const toggleSideBlock = () => {
        setSideBlockVisible(!sideBlockVisible)
        setSideBlockButtonVisible(!sideBlockButtonVisible)
    }

    return (
        <div>
            {sideBlockButtonVisible && (
                <div className="sideBlockButton">
                    <img className="ButtonImage" src={buttonImage} onClick={toggleSideBlock} />
                </div>
            )
            }
            {sideBlockVisible && (
                <div className="SideBlock">
                    <button className="SideBlockClose" type="button" onClick={toggleSideBlock} />
                    <br />
                    {blockInfo}
                </div>
            )
            }
        </div>
    )
}

export default SideBlock;