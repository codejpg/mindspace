import React, { Component } from "react";
import Draggable from "react-draggable";

import HoverImage from "react-hover-image";
import { ThemeConsumer } from "styled-components";
import Modal from "./Modal";


class Product extends Component {
    constructor(props){
        super(props)
 
       
  this.state = {
    img: "",
    showModal: false,
    dataModal: {
      name: "",
      content: "",
      image: '',
      hoverImage: '',
      className: ""
      
    }
  };
}

  getModal = data => {
    this.setState({ showModal: true, dataModal: data });
    
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      
     <div className="folderWrapper">

        {this.props.data.map((data, key) => (
          
          <div key={key} className="folderWrapper">
              <div onClick={() => this.getModal(data)}>
                <img src={data.image}/>
                
            <p>{data.name}</p></div>
          </div>
        ))}

        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          name={this.state.dataModal.name}
          content={this.state.dataModal.content}
          image={this.state.dataModal.image}
          hoverImage={this.state.dataModal.hoverImage}
          modalClass={this.state.dataModal.className}
        />
        
      </div>
    );
  }
}

export default Product;
