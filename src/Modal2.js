import React, { Component } from "react";
import Draggable from 'react-draggable'
import { textChangeRangeIsUnchanged } from "typescript";

import "./Modal.css";

class Modal2 extends Component {
  isActiveToggle= () => {
    return this.props.show ? 1000 : null
  }
  render() {
    console.log(this.props.show);

   
    return (
      
      <React.Fragment>
        {this.props.show && (
          <Draggable
                handle="#modalTopBar"
                bounds={{ top: -250, left: -250, right: 250, bottom: 250 }}>
            <div className={this.props.modalClass}
            style={{zIndex: this.isActiveToggle()}}>
              {console.log("modalClass: " + this.props.modalClass)}
              

            <div id="modalTopBar" onClick={this.props.onClick}><h1>{this.props.name}</h1></div>
            
            <button className = "closeBtn" onClick={this.props.onHide}></button>
            <div className="content" id="cont" 
            value={this.props.code}
            onClick={this.props.onClick}
            >{this.props.content}</div>
          </div></Draggable>
        )}
      </React.Fragment>
    );
  }
}

export default Modal2;
