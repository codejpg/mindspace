import React, { Component } from "react";
import Draggable from 'react-draggable'
import { textChangeRangeIsUnchanged } from "typescript";

import "./Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <Draggable
                handle="#modalTopBar"
                bounds={{ top: -250, left: -250, right: 250, bottom: 250 }}>
            <div className={this.props.modalClass}>
              {console.log("modalClass: " + this.props.modalClass)}
              

            <div id="modalTopBar"><h1>{this.props.name}</h1></div>
            
            <button className = "closeBtn" onClick={this.props.onHide}></button>
            <div className="content">{this.props.content}</div>
          </div></Draggable>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
