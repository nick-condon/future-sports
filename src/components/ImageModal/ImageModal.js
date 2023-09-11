import React, { Component } from "react";
import './ImageModal.css';
import { useState } from "react";


const EnhancedComponent = () => {

    class ImageModal extends Component {
        state = { imageToShow: '' };

       showImageInModal = (image) => {
            this.setState({ imageToShow: this.image
            })
        }

        closeModal = () => { this.setState({ imageToShow: ''}) }

        render() {

            return (
                <div>
                    {this.state.imageToShow !== '' ? (
                        <div className="Modal">
                            <span class="ClosePhoto" onClick={this.closeModal}>X</span>
                            <img className="ModalPhoto" src={this.state.imageToShow} />
                        </div>
                    ) : null}
                    showImageInModal = {this.showImageInModal}
                </div>
            )
        }
    }
    return ImageModal;
}

export default EnhancedComponent;