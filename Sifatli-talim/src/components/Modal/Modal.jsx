import React from "react";
import style from "./Modal.module.scss";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const Modal = ({ children, onClose }) => {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      backgroundColor: "rgb(233, 233, 233)",
      padding: "40px",
      borderRadius: "8px",
      position: "relative",
      width: "80%",
      maxWidth: "800px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "transparent",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          {children}
          <button style={styles.closeButton} onClick={onClose}>
            <IoClose />
          </button>
          <Link to={"/details"} className={style.more}></Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
