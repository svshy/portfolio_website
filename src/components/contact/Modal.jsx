import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <i
          class="fa-solid fa-xmark modal__content-close"
          onClick={props.onClose}
        ></i>
        <i class="fa-regular fa-circle-check modal__content-icon"></i>
        <h2 className="modal__content-info">
          Twoja wiadomość została wysłana poprawnie!
        </h2>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </>
  );
};

export default Modal;
