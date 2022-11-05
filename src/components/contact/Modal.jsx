import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { ThemeContext } from "../../App";
import BounceLoader from "react-spinners/BounceLoader";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div id={themeCtx.theme} className="modal">
      <div className="modal__content">
        <i
          className="fa-solid fa-xmark modal__content-close"
          onClick={props.onClose}
        ></i>
        <i className="fa-regular fa-circle-check modal__content-icon"></i>
        <h2 className="modal__content-info">
          Twoja wiadomość została wysłana poprawnie!
        </h2>
      </div>
    </div>
  );
};

const LoadingOverlay = (props) => {
  return (
    <div className="loading">
      <BounceLoader color="#6555c7" loading={props.loading} />
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
        props.loading ? (
          <LoadingOverlay loading={props.loading} />
        ) : (
          <ModalOverlay onClose={props.onClose} />
        ),
        portalElement
      )}
    </>
  );
};

export default Modal;
