import React from "react";
import { Fragment } from "react";
import "./Overlay.css";

export function Overlay({ isOpen, onClose, children }) {
    return (
        <>
        {
            isOpen ? (
                <div className="Overlay">
                    <div className="OverlayBackground" />
                    <div className="OverlayContainer">
                        <div className="OverlayControls">
                            <button className="OverlayClose" type="button" onClick={onClose} />
                        </div>
                        {children}
                    </div>
                </div>
            ) : null
        }
        
        </>
    );
}

export default Overlay;