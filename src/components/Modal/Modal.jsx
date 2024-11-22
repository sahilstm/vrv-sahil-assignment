import React from "react";
import "../../styles/components/modal.scss";
import { HiX } from "react-icons/hi";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div
          className="modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>{title}</h2>
            <span className="close-button" onClick={onClose}>
            <HiX />
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  