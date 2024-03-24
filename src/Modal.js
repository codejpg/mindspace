import React from "react";
import Draggable from 'react-draggable'
import "./Modal.css";

const Modal = (props) => {
  const isActiveToggle = () => {
    return props.isActive ? 900 : null
  }

  return (
    <React.Fragment>
      {props.show && (
        <Draggable handle="#modalTopBar">
          <div className={props.modalClass} style={{ zIndex: isActiveToggle() }}>
            <div id="modalTopBar" onClick={props.onClick}><h1>{props.name}</h1></div>
            <button className="closeBtnEck" onClick={props.onHide}></button>
            <div className="content" id="cont" value={props.code} onClick={props.onClick}>
              {props.content}
            </div>
          </div>
        </Draggable>
      )}
    </React.Fragment>
  );
}

export default Modal;
