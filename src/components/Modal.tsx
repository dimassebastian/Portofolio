import React from "react";
import styled from "styled-components";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <StyledModal>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;

  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    color: #333;
    max-width: 80%;
    width: 400px; /* Adjust the width as needed */
    text-align: left;
    position: relative;
  }

  .close {
    color: #aaa;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
  }

  p {
    margin: 0; /* Remove default margin */
    font-size: 16px; /* Adjust font size as needed */
  }
`;
