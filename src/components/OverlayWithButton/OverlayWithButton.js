import React, { useState } from 'react';

const OverlayWithButton = (WrappedComponent) => {
  const OverlayWithButton = ({ buttonName, modalContent, ...props }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
      setModalOpen(!modalOpen);
    };

    return (
      <>
        <button onClick={toggleModal}>{buttonName}</button>
        {modalOpen && (
          <div className="Overlay">
            <div className="OverlayBackground" />
            <div className="OverlayContainer">
              <WrappedComponent modalContent={modalContent} {...props} />
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  };

  return OverlayWithButton;
};

export default OverlayWithButton;
