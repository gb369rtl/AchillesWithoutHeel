import React from "react";

const PhotoModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="photo" />
      </div>
    </div>
  );
};

export default PhotoModal;
